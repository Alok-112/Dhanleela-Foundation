import React from "react";

export default function GalleryImage({ src }) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <img src={src} alt="Gallery" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
    </div>
  );
}
