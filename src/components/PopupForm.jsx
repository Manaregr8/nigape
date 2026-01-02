"use client";
import { useState } from "react";
import ContactForm from "../Form/form.jsx";

export default function PopupForm({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative bg-black rounded-xl shadow-2xl border border-[#FF40EB]/40 max-w-2xl w-full mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#FF40EB] text-2xl font-bold hover:text-pink-400 focus:outline-none"
          aria-label="Close"
        >
          ×
        </button>
        <div className="p-6 pt-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
