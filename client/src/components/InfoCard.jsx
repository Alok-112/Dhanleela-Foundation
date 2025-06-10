import React from 'react';

export default function InfoCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg hover:scale-105 transition-transform duration-300 ">
      <div className="text-4xl mb-3 text-green-600">{icon}</div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}
