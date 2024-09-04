import React from "react";

const About = () => {
  return (
    <div>
      <section className="pt-12 sm:pt-24 pb-16 sm:pb-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="max-w-4xl mx-auto mb-4 text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              ABOUT US
            </p>
            <h1 className="max-w-4xl mx-auto px-4 sm:px-6 text-lg text-white sm:text-xl lg:text-2xl font-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-8 group max-w-6xl mx-auto sm:px-0 px-8">
          <div className="relative w-full lg:w-2/5 h-64 sm:h-80 lg:h-96 transition-all duration-300 ease-in-out group-hover:lg:w-3/5">
            <img
              className="w-full h-full object-cover border"
              src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac"
              alt="Image 1"
            />
          </div>
          <div className="relative w-full lg:w-3/5 h-64 sm:h-80 lg:h-96 mt-4 lg:mt-0 lg:ml-4 transition-all duration-300 ease-in-out group-hover:lg:w-2/5">
            <img
              className="w-full h-full object-cover border"
              src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac"
              alt="Image 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
