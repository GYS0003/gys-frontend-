"use client";

import React, { useEffect, useState } from "react";
import {
  getServices,
  createService,
  updateService,
  deleteService,
} from "@/services/apis";
import Image from "next/image";

const initialForm = {
  id: "",
  title: "",
  subtitle: "",
  description: "",
  buttonText: "",
  imageUrl: "",
  about: {
    heading: "",
    description: [""],
  },
  offerings: [{ title: "", description: "" }],
  process: [""],
  callToAction: { text: "", link: "" },
};

const OurServices = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [formPanelOpen, setFormPanelOpen] = useState(false);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const data = await getServices();
      setServices(data);
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle nested fields
    if (name.startsWith("about.description")) {
      const idx = Number(name.split(".")[2]);
      const newDesc = [...formData.about.description];
      newDesc[idx] = value;
      setFormData((prev) => ({
        ...prev,
        about: { ...prev.about, description: newDesc },
      }));
    } else if (name.startsWith("offerings")) {
      const [_, index, key] = name.split(".");
      const updatedOfferings = [...formData.offerings];
      updatedOfferings[index][key] = value;
      setFormData((prev) => ({ ...prev, offerings: updatedOfferings }));
    } else if (name.startsWith("process")) {
      const index = Number(name.split(".")[1]);
      const updatedProcess = [...formData.process];
      updatedProcess[index] = value;
      setFormData((prev) => ({ ...prev, process: updatedProcess }));
    } else if (name.startsWith("callToAction")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        callToAction: { ...prev.callToAction, [key]: value },
      }));
    } else if (name.startsWith("about.heading")) {
      setFormData((prev) => ({
        ...prev,
        about: { ...prev.about, heading: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddOffering = () => {
    setFormData((prev) => ({
      ...prev,
      offerings: [...prev.offerings, { title: "", description: "" }],
    }));
  };

  const handleRemoveOffering = (index) => {
    const updatedOfferings = [...formData.offerings];
    updatedOfferings.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      offerings: updatedOfferings,
    }));
  };

  const handleAddProcessStep = () => {
    setFormData((prev) => ({
      ...prev,
      process: [...prev.process, ""],
    }));
  };

  const handleRemoveProcessStep = (index) => {
    const updatedProcess = [...formData.process];
    updatedProcess.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      process: updatedProcess,
    }));
  };

  const handleAddAboutDescription = () => {
    setFormData((prev) => ({
      ...prev,
      about: { ...prev.about, description: [...prev.about.description, ""] },
    }));
  };

  const handleRemoveAboutDescription = (index) => {
    const updatedDesc = [...formData.about.description];
    updatedDesc.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      about: { ...prev.about, description: updatedDesc },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const fd = new FormData();
      fd.append("id", formData.id);
      fd.append("title", formData.title);
      fd.append("subtitle", formData.subtitle);
      fd.append("description", formData.description);
      fd.append("buttonText", formData.buttonText);
      if (imageFile) fd.append("image", imageFile);

      fd.append("about", JSON.stringify(formData.about));
      fd.append("offerings", JSON.stringify(formData.offerings));
      fd.append("process", JSON.stringify(formData.process));
      fd.append("callToAction", JSON.stringify(formData.callToAction));

      if (editingId) {
        await updateService(editingId, fd);
        setMessage("Service updated successfully.");
      } else {
        await createService(fd);
        setMessage("Service created successfully.");
      }

      setFormData(initialForm);
      setImageFile(null);
      setImagePreview(null);
      setEditingId(null);
      setFormPanelOpen(false);
      fetchServices();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setMessage(err.message || "Something went wrong.");
    }
  };

  const handleEdit = (service) => {
    setFormData(service);
    setEditingId(service._id);
    setFormPanelOpen(true);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure to delete this service?")) {
      try {
        await deleteService(id);
        fetchServices();
      } catch (err) {
        setMessage(err.message);
      }
    }
  };

  const handleCancelEdit = () => {
    setFormData(initialForm);
    setEditingId(null);
    setImagePreview(null);
    setImageFile(null);
    setFormPanelOpen(false);
  };

  return (
    <div className="flex min-h-screen pt-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Manage Services</h2>
          <button
            onClick={() => setFormPanelOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
          >
            Add Service
          </button>
        </div>

        {message && (
          <p className="text-center text-blue-600 dark:text-blue-400 mb-4">
            {message}
          </p>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="p-3 border-b dark:border-gray-600">Title</th>
                <th className="p-3 border-b dark:border-gray-600">Subtitle</th>
                <th className="p-3 border-b dark:border-gray-600">Image</th>
                <th className="p-3 border-b dark:border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="p-4 text-center">
                    Loading services...
                  </td>
                </tr>
              ) : services.length > 0 ? (
                services.map((s) => (
                  <tr
                    key={s._id}
                    className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="p-3">{s.title}</td>
                    <td className="p-3">{s.subtitle}</td>
                    <td className="p-3">
                      {s.imageUrl ? (
                        <img
                          src={s.imageUrl}
                          className="h-10 w-10 object-cover rounded"
                          alt="Service"
                        />
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() => handleEdit(s)}
                        className="text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-2 py-1 text-sm rounded hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(s._id)}
                        className="text-red-600 dark:text-red-400 border border-red-600 dark:border-red-400 px-2 py-1 text-sm rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">
                    No services found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Side Panel */}
      {formPanelOpen && (
        <div className="fixed inset-0 z-50  flex">
          <div
            className=" flex-1 "
            onClick={handleCancelEdit}
          ></div>
          <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg overflow-y-auto">
            <div className="p-4 pt-16  border-b dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl  font-bold">
                {editingId ? "Edit Service" : "Create Service"}
              </h3>
              <button
                onClick={handleCancelEdit}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-7rem)]"
            >
              <div className="space-y-4">
                {["id", "title", "subtitle", "description", "buttonText"].map(
                  (field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium mb-1 capitalize">
                        {field}
                      </label>
                      <input
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={field}
                        required={field !== "subtitle" && field !== "imageUrl"}
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  )
                )}

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      setImageFile(e.target.files[0]);
                      setImagePreview(URL.createObjectURL(e.target.files[0]));
                    }}
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                  />
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-24 w-24 object-contain mt-2 rounded border"
                    />
                  )}
                </div>

                <div className="pt-4 border-t dark:border-gray-700">
                  <h3 className="font-semibold text-lg mb-2">About</h3>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Heading
                      </label>
                      <input
                        name="about.heading"
                        value={formData.about.heading}
                        onChange={handleChange}
                        placeholder="About Heading"
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="block text-sm font-medium">
                          Description
                        </label>
                        <button
                          type="button"
                          onClick={handleAddAboutDescription}
                          className="text-blue-600 dark:text-blue-400 text-sm"
                        >
                          + Add
                        </button>
                      </div>
                      {formData.about.description.map((desc, i) => (
                        <div key={i} className="flex gap-2 mb-2">
                          <input
                            name={`about.description.${i}`}
                            value={desc}
                            onChange={handleChange}
                            placeholder={`Description ${i + 1}`}
                            className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                          />
                          {formData.about.description.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveAboutDescription(i)}
                              className="text-red-600 dark:text-red-400 p-2"
                            >
                              -
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t dark:border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">Offerings</h3>
                    <button
                      type="button"
                      onClick={handleAddOffering}
                      className="text-blue-600 dark:text-blue-400 text-sm"
                    >
                      + Add Offering
                    </button>
                  </div>
                  <div className="space-y-3">
                    {formData.offerings.map((item, i) => (
                      <div key={i} className="space-y-2 p-3 border dark:border-gray-700 rounded">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Offering {i + 1}</h4>
                          {formData.offerings.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveOffering(i)}
                              className="text-red-600 dark:text-red-400"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Title
                          </label>
                          <input
                            name={`offerings.${i}.title`}
                            value={item.title}
                            onChange={handleChange}
                            placeholder="Title"
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Description
                          </label>
                          <textarea
                            name={`offerings.${i}.description`}
                            value={item.description}
                            onChange={handleChange}
                            placeholder="Description"
                            rows={2}
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t dark:border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">Process Steps</h3>
                    <button
                      type="button"
                      onClick={handleAddProcessStep}
                      className="text-blue-600 dark:text-blue-400 text-sm"
                    >
                      + Add Step
                    </button>
                  </div>
                  <div className="space-y-2">
                    {formData.process.map((step, i) => (
                      <div key={i} className="flex gap-2 items-center">
                        <span className="bg-gray-200 dark:bg-gray-700 rounded-full h-8 w-8 flex items-center justify-center">
                          {i + 1}
                        </span>
                        <input
                          name={`process.${i}`}
                          value={step}
                          onChange={handleChange}
                          placeholder={`Step ${i + 1}`}
                          className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        />
                        {formData.process.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveProcessStep(i)}
                            className="text-red-600 dark:text-red-400 p-2"
                          >
                            -
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t dark:border-gray-700">
                  <h3 className="font-semibold text-lg mb-2">Call to Action</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Text
                      </label>
                      <input
                        name="callToAction.text"
                        value={formData.callToAction.text}
                        onChange={handleChange}
                        placeholder="CTA Text"
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Link
                      </label>
                      <input
                        name="callToAction.link"
                        value={formData.callToAction.link}
                        onChange={handleChange}
                        placeholder="CTA Link"
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t dark:border-gray-700">
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="flex-1 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {loading
                    ? editingId
                      ? "Updating..."
                      : "Creating..."
                    : editingId
                    ? "Update Service"
                    : "Create Service"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurServices;