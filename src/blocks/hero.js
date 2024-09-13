import React from "react";
import img1 from "../img/1.PNG";

const hero = () => {
  return (
    <div>
      <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div class="absolute inset-0">
          <img
            src={img1}
            alt="Background Image"
            class="object-cover object-center w-full h-full"
          />
          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-6xl sm:text-[7em] font-bold leading-tight mb-4">
            CONCRETE COMPONENTS
          </h1>
          <p class="sm:max-w-7xl max-w-xs text-xl sm:text-4xl text-gray-300 mb-16">
            The Future of Durable Concrete for Your Coastal Home
          </p>
          <a
            href="/#contact"
            class="bg-maroon text-white hover:bg-opacity-65 py-4 px-12 text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Become A Dealer
          </a>
        </div>
      </div>
    </div>
  );
};

export default hero;
