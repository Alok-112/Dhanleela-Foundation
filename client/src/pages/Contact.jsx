import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="bg-white p-6 rounded-lg shadow space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 border rounded"
            required
          ></textarea>
          <button className="w-full py-2 bg-green-600 text-white rounded font-medium hover:bg-green-700">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Get in Touch</h2>
          <p className="text-gray-600">📍 Address: New Delhi, India</p>
          <p className="text-gray-600">📞 Phone: +91 74284 31774</p>
          <p className="text-gray-600">✉️ Email: support@dhanleela.org</p>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Follow us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/dhanleelafoundation/"
                className="text-green-600 hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/16U4A3D9jN/"
                className="text-green-600 hover:underline"
              >
                Facebook
              </a>
              <a href="#" className="text-green-600 hover:underline">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
