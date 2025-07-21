'use client';

import React, { useState, useEffect } from 'react';
import {
  getAllJobs,
  updateJob,
  deleteJob,
  createJob,
} from '@/services/apis';
import { X, Plus, Minus } from 'lucide-react';

const initialFormState = {
  id: '',
  title: '',
  type: '',
  location: '',
  experience: '',
  stack: '',
  description: '',
  responsibilities: [''],
  qualifications: [''],
  benefits: [''],
};

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [editingId, setEditingId] = useState(null);
  const [showPanel, setShowPanel] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const data = await getAllJobs();
      setJobs(data);
    } catch (err) {
      console.error('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle changes in array fields (responsibilities, qualifications, benefits)
  const handleArrayChange = (field, index, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  // Add new item to an array field
  const addArrayItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  // Remove item from an array field
  const removeArrayItem = (field, index) => {
    if (formData[field].length <= 1) return;
    
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setEditingId(null);
    setShowPanel(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Prepare payload - no need to split since we're using arrays
    const payload = {
      ...formData,
      responsibilities: formData.responsibilities.filter(item => item.trim() !== ''),
      qualifications: formData.qualifications.filter(item => item.trim() !== ''),
      benefits: formData.benefits.filter(item => item.trim() !== ''),
    };

    try {
      if (editingId) {
        const updated = await updateJob(editingId, payload);
        setJobs(jobs.map((job) => (job._id === editingId ? { ...job, ...updated } : job)));
      } else {
        const created = await createJob(payload);
        setJobs([...jobs, created]);
      }
      resetForm();
    } catch (err) {
      console.error('Error submitting job:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (job) => {
    setFormData({
      ...job,
      responsibilities: job.responsibilities.length > 0 ? job.responsibilities : [''],
      qualifications: job.qualifications.length > 0 ? job.qualifications : [''],
      benefits: job.benefits.length > 0 ? job.benefits : [''],
    });
    setEditingId(job._id);
    setShowPanel(true);
    setExpandedId(job._id);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this job?')) {
      try {
        setLoading(true);
        await deleteJob(id);
        setJobs(jobs.filter((job) => job._id !== id));
      } catch (err) {
        console.error('Delete failed:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  const openAddJob = () => {
    resetForm();
    setShowPanel(true);
  };

  // Render dynamic array fields with add/remove buttons
  const renderArrayField = (field, label) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
        {label}
      </label>
      
      {formData[field].map((item, index) => (
        <div key={index} className="flex gap-2 items-center">
          <input
            type="text"
            value={item}
            onChange={(e) => handleArrayChange(field, index, e.target.value)}
            placeholder={`${label} item ${index + 1}`}
            className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <button
            type="button"
            onClick={() => removeArrayItem(field, index)}
            disabled={formData[field].length <= 1}
            className="p-2 text-red-500 hover:text-red-700 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Minus size={16} />
          </button>
        </div>
      ))}
      
      <button
        type="button"
        onClick={() => addArrayItem(field)}
        className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm flex items-center gap-1"
      >
        <Plus size={14} /> Add {label} item
      </button>
    </div>
  );

  return (
    <div className="flex pt-20 min-h-screen">
      {/* Main Content */}
      <div className={`${showPanel ? 'w-full md:w-2/3' : 'w-full'} p-4 md:px-8 lg:px-16`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Careers</h2>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded flex items-center gap-2"
            onClick={openAddJob}
          >
            Add Job
          </button>
        </div>

        {loading && !showPanel ? (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-300">Loading jobs...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-300">No jobs found. Add your first job!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="border border-gray-300 dark:border-gray-700 p-4 rounded-md bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setExpandedId(expandedId === job._id ? null : job._id)}
                >
                  <div>
                    <p className="font-semibold text-lg text-gray-900 dark:text-white">{job.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      ID: {job.id} | Experience: {job.experience}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      className="text-blue-600 dark:text-blue-400 cursor-pointer border p-1 border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-md font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(job);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 dark:text-red-400 cursor-pointer p-1 border border-red-600 dark:border-red-400 bg-red-50 dark:bg-red-900/30 rounded-md font-medium hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(job._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {expandedId === job._id && (
                  <div className="mt-4 text-sm space-y-3 text-gray-700 dark:text-gray-300">
                    <p><strong className="text-gray-900 dark:text-white">Type:</strong> {job.type}</p>
                    <p><strong className="text-gray-900 dark:text-white">Location:</strong> {job.location}</p>
                    <p><strong className="text-gray-900 dark:text-white">Stack:</strong> {job.stack}</p>
                    <p><strong className="text-gray-900 dark:text-white">Description:</strong> {job.description}</p>

                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Responsibilities:</p>
                      <ul className="list-disc pl-5 mt-1">
                        {job.responsibilities.map((item, i) => (
                          <li key={i} className="py-1">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Qualifications:</p>
                      <ul className="list-disc pl-5 mt-1">
                        {job.qualifications.map((item, i) => (
                          <li key={i} className="py-1">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Benefits:</p>
                      <ul className="list-disc pl-5 mt-1">
                        {job.benefits.map((item, i) => (
                          <li key={i} className="py-1">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Side Panel */}
      {showPanel && (
        <div className="fixed top-0 right-0 pt-16 w-full md:w-1/3 h-full bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 shadow-lg p-6 z-50 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {editingId ? 'Edit Job' : 'Add New Job'}
            </h2>
            <button 
              onClick={resetForm}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <X />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { name: 'id', placeholder: 'Job ID' },
              { name: 'title', placeholder: 'Job Title' },
              { name: 'type', placeholder: 'Job Type' },
              { name: 'location', placeholder: 'Location' },
              { name: 'experience', placeholder: 'Experience' },
              { name: 'stack', placeholder: 'Tech Stack' }
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  {field.placeholder}
                </label>
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            ))}

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Job description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            {/* Array Fields */}
            {renderArrayField('responsibilities', 'Responsibilities')}
            {renderArrayField('qualifications', 'Qualifications')}
            {renderArrayField('benefits', 'Benefits')}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 rounded text-white font-semibold flex items-center justify-center ${
                loading ? 'bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {editingId ? 'Updating...' : 'Creating...'}
                </>
              ) : editingId ? 'Update Job' : 'Add Job'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Careers;