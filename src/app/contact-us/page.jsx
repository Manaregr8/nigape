// app/contact/page.jsx
'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Iridescence from '@/Homesections/bits/Iridescence.js';


// const navItems = [
//   { name: "About", icon: Info, href: "About" },
//   { name: "Courses", icon: BookOpen, href: "/courses" },
// ];

const socials = [
  {
    name: "Instagram",
    label: "IG",
    href: "https://www.instagram.com/nigape.official/",
  },
  {
    name: "LinkedIn",
    label: "IN",
    href: "https://www.linkedin.com/in/national-institute-genai-and-prompt-engineering-116711381/",
  },
];

// const Navbar = memo(() => (
//   <motion.nav
//     initial={{ opacity: 0, y: -30 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8, delay: 0.3 }}
//     className="fixed top-6 sm:top-8 left-0 right-0 z-50 flex justify-center pointer-events-none px-4"
//   >
//     <div className="pointer-events-auto w-full max-w-4xl">
//       <div
//         className="
//         flex items-center justify-between 
//         px-5 py-4 sm:px-8 sm:py-5 
//         bg-black/70 backdrop-blur-xl 
//         rounded-2xl sm:rounded-full 
//         shadow-2xl border border-white/10
//         overflow-x-auto scrollbar-hide
//       "
//       >
//         {/* Home Button */}
//         <Link
//           href="/"
//           className="
//             flex items-center gap-3 
//             px-5 py-3 rounded-full 
//             text-white font-bold text-sm 
//             bg-gradient-to-r from-purple-500 to-pink-500
//             shadow-lg hover:shadow-purple-500/50 
//             transition-all duration-300 
//             whitespace-nowrap shrink-0
//           "
//         >
//           <Home size={22} strokeWidth={2.8} />
//           <span className="hidden sm:inline">Home</span>
//         </Link>

//         {/* Icons */}
//         <div className="flex items-center gap-5 sm:gap-7 shrink-0">
//           {navItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               aria-label={item.name}
//               className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 shrink-0"
//             >
//               <item.icon size={26} strokeWidth={2.2} />
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   </motion.nav>
// ));

// Navbar.displayName = "ContactNavbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    city: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState({ status: "idle", message: "" });

  const appsScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!appsScriptUrl) {
      setSubmitState({
        status: "error",
        message: "Form endpoint not configured. Add NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL.",
      });
      return;
    }

    setSubmitState({ status: "submitting", message: "Submitting your request..." });

    try {
      const payload = new URLSearchParams({
        ...formData,
        source: "website-contact-us",
        submittedAt: new Date().toISOString(),
      });

      const response = await fetch(appsScriptUrl, {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setSubmitState({
        status: "success",
        message: "Thanks! Your details were submitted successfully.",
      });
      setFormData({ name: "", email: "", phone: "", course: "", city: "", message: "" });
    } catch {
      setSubmitState({
        status: "error",
        message: "Submission failed. Please try again.",
      });
    }
  };

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Iridescence
          color={[1, 0.25, 0.92]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      <div className="  absolute inset-0 -z-[1] bg-black/50 "></div>


      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-32 sm:pt-36 pb-32 sm:pb-40 text-center">
        <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-base xs:text-lg md:text-xl text-white leading-relaxed max-w-xl sm:max-w-3xl mx-auto"
          >
            Have questions about admissions, batches, or career support in Generative AI and Prompt Engineering?
            Our institute team will guide you with clear next steps.
          </motion.p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-2 xs:px-4 sm:px-6 pb-20 sm:pb-32 bg-black/95 pt-10 sm:pt-20">
        <div className="max-w-4xl sm:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">

          {/* LEFT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 sm:space-y-10"
          >
            <div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
                We’re happy to help!
              </h2>
              <p className="text-pink-200/85 text-base xs:text-lg leading-relaxed">
                Share your background and goals, and we’ll suggest the right NIGAPE learning path.
              </p>
            </div>

            <form className="space-y-5 sm:space-y-7" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="* Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 bg-white/10 border border-pink-500/30 rounded-xl text-white placeholder-pink-300/70 focus:outline-none focus:border-pink-400 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg"
              />

              <input
                type="email"
                name="email"
                placeholder="* Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 bg-white/10 border border-pink-500/30 rounded-xl text-white placeholder-pink-300/70 focus:outline-none focus:border-pink-400 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg"
              />

              <input
                type="tel"
                name="phone"
                placeholder="* Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 bg-white/10 border border-pink-500/30 rounded-xl text-white placeholder-pink-300/70 focus:outline-none focus:border-pink-400 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg"
              />

              <input
                type="text"
                name="course"
                placeholder="Course Interested In"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 bg-white/10 border border-pink-500/30 rounded-xl text-white placeholder-pink-300/70 focus:outline-none focus:border-pink-400 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg"
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 bg-white/10 border border-pink-500/30 rounded-xl text-white placeholder-pink-300/70 focus:outline-none focus:border-pink-400 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg"
              />

              <textarea
                rows={5}
                name="message"
                placeholder="Tell us about your current background and AI career goal..."
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 bg-white/10 border border-pink-500/30 rounded-xl text-white placeholder-pink-300/70 focus:outline-none focus:border-pink-400 focus:bg-white/15 transition-all duration-300 resize-none backdrop-blur-sm text-base sm:text-lg"
              />

              {submitState.status !== "idle" && (
                <p
                  className={`text-sm ${submitState.status === "success" ? "text-green-300" : submitState.status === "error" ? "text-red-300" : "text-pink-100"}`}
                >
                  {submitState.message}
                </p>
              )}

              <button
                type="submit"
                disabled={submitState.status === "submitting"}
                className="w-full py-4 sm:py-5 bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-500 hover:to-purple-600 text-white font-bold text-base sm:text-lg rounded-xl transition-all duration-300 shadow-lg shadow-pink-600/30 hover:shadow-pink-600/50"
              >
                {submitState.status === "submitting" ? "Submitting..." : "Request Counseling Call"}
              </button>
            </form>
          </motion.div>

          {/* RIGHT: INFO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10 sm:space-y-16 text-white"
          >
            {/* FAQ */}
            <div>
              <h3 className="text-xl xs:text-2xl md:text-3xl font-bold text-pink-400 mb-3 sm:mb-5">
                FAQs
              </h3>
              <p className="text-pink-100/90 text-sm xs:text-base leading-relaxed">
                Have a quick question?
                Check our FAQs for instant guidance on courses, eligibility, and placements.
              </p>
              <Link
                href="/#faq"
                className="inline-block mt-3 sm:mt-5 text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-4 transition"
              >
                View FAQs →
              </Link>
            </div>

            {/* OFFICE */}
            <div>
              <h3 className="text-xl xs:text-2xl md:text-3xl font-bold text-pink-400 mb-3 sm:mb-5">
                Campus Address
              </h3>
              <p className="text-pink-100/90 text-sm xs:text-base leading-relaxed">
                Spacetime GK2,<br />
                near Savitri Cinema Complex,<br />
                New Delhi, Delhi 110048, India
              </p>
            </div>

            {/* SOCIALS */}
            <div>
              <h3 className="text-xl xs:text-2xl md:text-3xl font-bold text-pink-400 mb-4 sm:mb-6">
                Follow Us
              </h3>
              <div className="flex gap-3 sm:gap-5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-pink-500/40 flex items-center justify-center text-base sm:text-lg font-semibold hover:bg-pink-500/20 hover:border-pink-400 transition-all duration-300"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GLOBAL FONT */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </>
  );
}
