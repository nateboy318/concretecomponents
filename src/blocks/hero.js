import React from "react";
import img1 from "../img/1.PNG";

const Hero = ({ data }) => {
  // Extract the necessary fields from the data prop
  const { MainText, SubText, ButtonText } = data;

  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={img1} // Use the URL from the BackgroundImage field
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl sm:text-[7em] font-bold leading-tight mb-4">
            {MainText} {/* Render MainText */}
          </h1>
          <p className="sm:max-w-7xl max-w-xs text-xl sm:text-4xl text-gray-300 mb-16">
            {SubText} {/* Render SubText */}
          </p>
          <a
            href="#contact"
            className="bg-maroon text-white hover:bg-opacity-65 py-4 px-12 text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            {ButtonText} {/* Render ButtonText */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
