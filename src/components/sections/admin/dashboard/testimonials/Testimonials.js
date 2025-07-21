'use client';

import React, { useEffect, useState } from 'react';
import {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from '@/services/apis';
import Image from 'next/image';

const initialForm = {
  name: '',
  occupation: '',
  feedback: '',
  imageUrl: '',
};

const MAX_WORDS = 30;

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState(initialForm);
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const data = await getTestimonials();
      setTestimonials(data);
    } catch (err) {
      setMessage(err.message || 'Failed to fetch testimonials.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setSubmitting(true);

    const wordCount = countWords(formData.feedback);
    if (wordCount > MAX_WORDS) {
      setMessage(`Feedback must not exceed ${MAX_WORDS} words. Current: ${wordCount}`);
      setSubmitting(false);
      return;
    }

    try {
      const fd = new FormData();
      fd.append('name', formData.name);
      fd.append('occupation', formData.occupation);
      fd.append('feedback', formData.feedback);
      if (imageFile) {
        fd.append('image', imageFile);
      }

      if (editingId) {
        await updateTestimonial(editingId, fd);
        setMessage('Testimonial updated successfully');
      } else {
        await createTestimonial(fd);
        setMessage('Testimonial created successfully');
      }

      setFormData(initialForm);
      setImageFile(null);
      setEditingId(null);
      fetchTestimonials();
    } catch (err) {
      setMessage(err.message || 'Submit failed');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (testimonial) => {
    setFormData(testimonial);
    setEditingId(testimonial._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        await deleteTestimonial(id);
        setMessage('Testimonial deleted.');
        fetchTestimonials();
      } catch (err) {
        setMessage(err.message);
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData(initialForm);
    setImageFile(null);
  };

  return (
    <section className="max-w-5xl mx-auto p-6 pt-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-md shadow">
      <h2 className="text-2xl font-bold text-center mb-4">Testimonials</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-gray-50 dark:bg-gray-800 p-4 rounded shadow"
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 dark:border-gray-600 p-2 rounded dark:bg-gray-700 dark:text-white"
        />
        <input
          type="text"
          name="occupation"
          placeholder="Occupation"
          required
          value={formData.occupation}
          onChange={handleChange}
          className="border border-gray-300 dark:border-gray-600 p-2 rounded dark:bg-gray-700 dark:text-white"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="col-span-full border border-gray-300 dark:border-gray-600 p-2 rounded dark:bg-gray-700 dark:text-white"
        />
        {imageFile && (
          <img
            src={URL.createObjectURL(imageFile)}
            alt="Preview"
            className="h-20 w-20 object-cover rounded-full border mt-2"
          />
        )}

        <div className="col-span-full w-full">
          <p
            className={`text-sm mt-1 ${
              countWords(formData.feedback) > MAX_WORDS ? 'text-red-500' : 'text-gray-500'
            }`}
          >
            Word count: {countWords(formData.feedback)} / {MAX_WORDS}
          </p>
          <textarea
            name="feedback"
            placeholder="Feedback"
            required
            value={formData.feedback}
            onChange={handleChange}
            rows={2}
            className="border w-full border-gray-300 dark:border-gray-600 p-2 rounded dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="col-span-full flex gap-3 justify-end">
          {editingId && (
            <button
              type="button"
              onClick={handleCancelEdit}
              disabled={submitting}
              className={`bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded ${
                submitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            disabled={submitting}
            className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded ${
              submitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {submitting
              ? editingId
                ? 'Updating...'
                : 'Creating...'
              : editingId
              ? 'Update'
              : 'Create'}
          </button>
        </div>
      </form>

      {message && (
        <p className="text-center text-sm text-blue-500 dark:text-blue-300 mb-4">{message}</p>
      )}

      {loading ? (
        <p className="text-center">Loading testimonials...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border dark:border-gray-700 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-700 dark:text-white">
              <tr>
                <th className="p-2 border dark:border-gray-600">Image</th>
                <th className="p-2 border dark:border-gray-600">Name</th>
                <th className="p-2 border dark:border-gray-600">Occupation</th>
                <th className="p-2 border dark:border-gray-600">Feedback</th>
                <th className="p-2 border dark:border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((t) => (
                <tr key={t._id} className="text-center dark:text-white">
                  <td className="p-2 border dark:border-gray-700">
                    {t.imageUrl ? (
                      <img
                        src={t.imageUrl}
                        alt="profile"
                        className="h-12 w-12 object-cover mx-auto rounded-full"
                      />
                    ) : (
                      'N/A'
                    )}
                  </td>
                  <td className="p-2 border dark:border-gray-700">{t.name}</td>
                  <td className="p-2 border dark:border-gray-700">{t.occupation}</td>
                  <td className="p-2 border max-w-xs break-words dark:border-gray-700">
                    {t.feedback}
                  </td>
                  <td className="p-2 flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(t)}
                      className="text-blue-500 border border-blue-600 hover:bg-blue-100 px-2 py-1 rounded text-sm transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(t._id)}
                      className="text-red-500 border border-red-600 hover:bg-red-100 px-2 py-1 rounded text-sm transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {testimonials.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500 dark:text-gray-300">
                    No testimonials found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Testimonials;