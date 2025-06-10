import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-gray-900 text-white text-sm py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-3">
        <p>&copy; {currentYear} Dhanleela Foundation. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms
          </a>
          <li>
            <Link to="/tracker">Donation Tracker</Link>
          </li>
          <li>
            <Link to="/admin-login">Admin</Link>
          </li>
        </div>
      </div>
    </footer>
  );
}
