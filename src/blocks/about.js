import React from "react";
import img1 from "../img/2.PNG";
import img2 from "../img/7.PNG";

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
              Welcome to Concrete Components, manufacturer of StoneKitchen
              Outdoor Living Designs, where innovation meets durability. Since
              2018, we've specialized in luxury custom outdoor kitchen
              solutions, offering unmatched strength and beautiful designs for
              the harsh coastal outdoors.
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-8 group max-w-6xl mx-auto sm:px-0 px-8">
          <div className="relative w-full lg:w-2/5 h-64 sm:h-80 lg:h-96 transition-all duration-300 ease-in-out group-hover:lg:w-3/5">
            <img
              className="w-full h-full object-cover border"
              src={img2}
              alt="Image 1"
            />
          </div>
          <div className="relative w-full lg:w-3/5 h-64 sm:h-80 lg:h-96 mt-4 lg:mt-0 lg:ml-4 transition-all duration-300 ease-in-out group-hover:lg:w-2/5">
            <img
              className="w-full h-full object-cover border"
              src={img1}
              alt="Image 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
