import React from "react";
import img1 from "../img/1.PNG";
import img2 from "../img/4.PNG";
import img3 from "../img/6.PNG";
import img4 from "../img/7.PNG";

const DealerGallery = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,

    // Add or remove image paths as needed
  ];

  // Determine the number of columns based on the number of images
  const gridCols =
    images.length % 2 === 0
      ? images.length > 4
        ? "grid-cols-4"
        : "grid-cols-2"
      : "grid-cols-3";

  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8">
      {/* Dealer Info */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl text-white font-semibold mt-8 mb-8">
          StoneKitchen Outdoor Living Designs
        </h1>
        <p className="text-white text-center text-lg">1054 Redi Mix Rd</p>
        <p className="text-white text-center text-lg">Little River, SC 29566</p>
        <p className="text-white text-center text-lg">843-331-2357</p>
      </div>

      {/* Gallery */}
      <div className="mt-12 max-w-5xl mx-auto">
        <div className={`grid gap-4 ${gridCols}`}>
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-64 bg-gray-200 overflow-hidden"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover border "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealerGallery;
