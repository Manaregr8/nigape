// // ContactForm.tsx (Next.js + Tailwind CSS)
// 'use client';

// import { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log(formData);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white font-mono">
//       {/* Optional: pixel font import */}
//       <style jsx global>{`
//         @import url('https://fonts.cdnfonts.com/css/press-start-2p');
//         .font-mono { font-family: 'Press Start 2P', monospace; }
//       `}</style>

//       <div className="max-w-6xl mx-auto px-4 py-12">
//         <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
//           {/* Form Section */}
//           <div className="w-full lg:w-1/2 space-y-6">
//             <h2 className="text-2xl font-bold text-[#FF40EB] tracking-wide">GET IN TOUCH</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm mb-2 text-[#FF40EB]">NAME</label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-black border border-[#FF40EB]/30 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF40EB] placeholder:text-[#FF40EB]/50"
//                   placeholder="YOUR NAME"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm mb-2 text-[#FF40EB]">EMAIL</label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-black border border-[#FF40EB]/30 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF40EB] placeholder:text-[#FF40EB]/50"
//                   placeholder="YOUR@EMAIL.COM"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="phone" className="block text-sm mb-2 text-[#FF40EB]">PHONE</label>
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full bg-black border border-[#FF40EB]/30 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF40EB] placeholder:text-[#FF40EB]/50"
//                   placeholder="YOUR NUMBER"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm mb-2 text-[#FF40EB]">MESSAGE</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={4}
//                   className="w-full bg-black border border-[#FF40EB]/30 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF40EB] placeholder:text-[#FF40EB]/50 resize-none"
//                   placeholder="YOUR MESSAGE"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-[#FF40EB] text-black font-bold tracking-wider hover:bg-[#ff5df0] transition-colors duration-300"
//               >
//                 SEND
//               </button>
//             </form>
//           </div>

//           {/* AI Image Section */}
//           <div className="w-full lg:w-1/2 flex justify-center">
//             <div className="relative w-full max-w-md h-80 lg:h-96">
//               {/* Placeholder for AI-themed image — replace with your actual image */}
//               <div className="absolute inset-0 bg-gradient-to-br from-[#FF40EB]/10 to-purple-900/20 rounded-xl flex items-center justify-center">
//                 <span className="text-[#FF40EB]/70 text-center px-4">
//                   AI ILLUSTRATION<br />OR ABSTRACT<br />VISUALIZATION
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;