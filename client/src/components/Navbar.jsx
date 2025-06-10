import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green-600">
        Dhanleela Foundation
      </h1>

      <ul className="flex gap-4 text-gray-700 font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/donate">Donate</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/tracker">Donation Tracker</Link>
        </li>
        <li>
          <Link to="/admin-login">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}
