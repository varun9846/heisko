import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center py-12 px-4">
      <section className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10">
        {/* Contact Details */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-extrabold text-red-600 mb-2">Contact Us</h1>
          <div className="text-lg text-gray-700 space-y-2">
            <div>
              <span className="font-semibold">Company:</span> <br />
              Australian Integrated Technology Solutions
            </div>
            <div>
              <span className="font-semibold">Address:</span> <br />
              Unit 52, 32-34 Mons Rd., Westmead
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Business Hours</h2>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Closed on weekends and public holidays</p>
          </div>
        </div>
        {/* Contact Form Placeholder */}
        <div className="flex-1 bg-gray-50 rounded-xl p-6 flex flex-col justify-center shadow-inner">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Send us a message</h2>
          <form className="space-y-4" aria-label="Contact form">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
              disabled
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
              disabled
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none min-h-[100px]"
              disabled
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-red-700 transition-colors cursor-not-allowed"
              disabled
            >
              Send Message
            </button>
            <p className="text-xs text-gray-400">(Contact form coming soon)</p>
          </form>
        </div>
      </section>
    </main>
  );
} 