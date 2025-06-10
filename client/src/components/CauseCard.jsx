import React from "react";

export default function CauseCard({ image, title, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full text-sm">
          Donate
        </button>
      </div>
    </div>
  );
}
