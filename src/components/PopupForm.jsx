"use client";
import { useState } from "react";
import { useEffect } from "react";
import ContactForm from "../Form/form.jsx";

export default function PopupForm({ open, onClose }) {
  const [show, setShow] = useState(open);

  useEffect(() => {
    if (!show) {
      const timer = setTimeout(() => setShow(true), 30000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl mx-2 sm:mx-4 flex flex-col md:flex-row items-stretch bg-gradient-to-br from-[#1a0022] via-black to-[#2d0036] border border-[#FF40EB]/40 rounded-2xl shadow-2xl overflow-hidden">
        <button
          onClick={() => { setShow(false); if (onClose) onClose(); }}
          className="absolute top-4 right-4 text-[#FF40EB] text-2xl font-bold hover:text-pink-400 focus:outline-none z-20"
          aria-label="Close"
        >
          ×
        </button>
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-10 bg-black/70">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
