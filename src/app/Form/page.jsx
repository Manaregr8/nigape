"use client";
import React, { useState } from "react";

export default function LandscapeForm() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Landscape details submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl p-10 rounded-xl shadow-lg bg-[#181818] border border-[#FF40EB]/30 flex flex-col md:flex-row gap-8"
      >
        {/* Left column: labels and inputs */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h2 className="text-3xl font-bold mb-4 text-[#FF40EB]">Landscape Details</h2>

          <label className="block">
            <span className="text-[#FF40EB] font-semibold">Landscape Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 rounded bg-black text-white border border-[#FF40EB]/40 focus:border-[#FF40EB] focus:outline-none"
              placeholder="Enter name"
            />
          </label>

          <label className="block">
            <span className="text-[#FF40EB] font-semibold">Location</span>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 rounded bg-black text-white border border-[#FF40EB]/40 focus:border-[#FF40EB] focus:outline-none"
              placeholder="Enter location"
            />
          </label>

          <label className="block">
            <span className="text-[#FF40EB] font-semibold">Description</span>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 rounded bg-black text-white border border-[#FF40EB]/40 focus:border-[#FF40EB] focus:outline-none"
              placeholder="Describe the landscape"
              rows={4}
            />
          </label>
        </div>

        {/* Right column: image upload and submit */}
        <div className="flex-1 flex flex-col justify-center gap-6 items-center">
          <label className="block w-full">
            <span className="text-[#FF40EB] font-semibold">Image Upload</span>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 rounded bg-black text-white border border-[#FF40EB]/40 focus:border-[#FF40EB] focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="w-full py-3 rounded bg-[#FF40EB] text-black font-bold text-lg hover:bg-pink-600 transition mt-8"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
