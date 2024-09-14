// components/Contact.js
import React from 'react';

export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white py-10" id="contact">
      <h2 className="text-2xl text-center font-bold">Let’s Work Together</h2>
      <p className="text-center mt-2 max-w-xs mx-auto">
        I am open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>

      <form
        action="https://formsubmit.co/your-email@example.com"  // Replace with your email or form handler
        method="POST"
        className="flex flex-col items-center mt-6 max-w-md mx-auto"
      >
        {/* Name Field */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-gray-800 text-white rounded-md p-3 mb-4 w-full"
          required
        />

        {/* Email Field */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="bg-gray-800 text-white rounded-md p-3 mb-4 w-full"
          required
        />

        {/* Message Field */}
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          className="bg-gray-800 text-white rounded-md p-3 mb-4 w-full"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
