import React from "react";

const Hero2 = ({ data }) => {
  // Extract the necessary fields from the data prop
  const { MainText, SubText, ButtonText, BackgroundImage } = data;

  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[66vh] sm:h-[75vh] lg:h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={BackgroundImage.data.attributes.url} // Use the URL from the BackgroundImage field
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 max-w-3xl">
            {MainText} {/* Render MainText */}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-lg sm:max-w-xl lg:max-w-3xl">
            {SubText} {/* Render SubText */}
          </p>
          <a
            href="#"
            className="bg-maroon text-white hover:bg-opacity-65 py-3 px-8 sm:py-4 sm:px-10 text-lg sm:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            {ButtonText} {/* Render ButtonText */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
