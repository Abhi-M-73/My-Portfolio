import React from 'react';

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16" id="contact">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-400 mb-6">
          Let’s Work Together
        </h2>
        <p className="text-center max-w-xl mx-auto text-lg sm:text-xl text-gray-300 mb-12">
          I’m open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
        </p>

        <form
          action="https://formsubmit.co/your-email@example.com"  // Replace with your email or form handler
          method="POST"
          className="flex flex-col items-center space-y-6 max-w-lg mx-auto"
        >
          {/* Name Field */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-lg p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
            required
          />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-lg p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
            required
          />

          {/* Message Field */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-lg p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 px-8 rounded-full font-semibold hover:scale-105 transform transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
