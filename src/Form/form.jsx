"use client";

export default function ContactForm() {
  return (
    <section className="w-full bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

     

        {/* RIGHT FORM */}
        <div className="bg-[#0b0b0b] border border-[#FF40EB]/30 rounded-3xl p-6 lg:p-10 shadow-[0_0_60px_rgba(255,64,235,0.35)]">
          <form
            className="
              grid grid-cols-1
              lg:grid-cols-2
              gap-5
            "
          >
            {/* Name */}
            <input className="input" placeholder="Your Name" />

            {/* Email */}
            <input className="input" placeholder="Your Email" />

            {/* Subject */}
            <input
              className="input lg:col-span-2"
              placeholder="Subject"
            />

            {/* Message */}
            <textarea
              rows={4}
              className="input lg:col-span-2 resize-none"
              placeholder="Your Message"
            />

            {/* Button */}
            <div className="lg:col-span-2 flex lg:justify-end">
              <button
                className="
                  w-full lg:w-auto
                  bg-[#FF40EB] text-black
                  font-semibold
                  px-10 py-3 rounded-xl
                  hover:shadow-[0_0_30px_#FF40EB]
                  transition
                "
              >
                Send Message →
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
