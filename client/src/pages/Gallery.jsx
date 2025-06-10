import React from "react";

const imageUrls = [
  "/images/proof1.jpg",
  "/images/proof2.jpeg",
  "/images/proof3.jpeg",
  "/images/proof4.jpeg",
  "/images/proof5.jpeg",
  "/images/proof6.jpeg",
];

export default function Gallery() {
  return (
    <div className="px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">Proof of Service</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {imageUrls.map((url, i) => (
          <div key={i} className="rounded overflow-hidden shadow-md hover:shadow-lg transition">
            <img
              src={url}
              alt={`Proof ${i + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
