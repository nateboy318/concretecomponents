import React from "react";

const About = ({ data }) => {
  const imageUrl1 = data?.Image1?.data?.attributes?.url
    ? `${data.Image1.data.attributes.url}`
    : "";
  const imageUrl2 = data?.Image2?.data?.attributes?.url
    ? `${data.Image2.data.attributes.url}`
    : "";

  return (
    <div>
      <section className="pt-12 sm:pt-24 pb-16 sm:pb-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="max-w-4xl mx-auto mb-4 text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {data?.MainText || "ABOUT US"}
            </p>
            <h1 className="max-w-4xl mx-auto px-4 sm:px-6 text-lg text-white sm:text-xl lg:text-2xl font-body">
              {data?.SubText ||
                "Welcome to Concrete Components, manufacturer of StoneKitchen Outdoor Living Designs, where innovation meets durability. Since 2018, we've specialized in luxury custom outdoor kitchen solutions, offering unmatched strength and beautiful designs for the harsh coastal outdoors."}
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-8 group max-w-6xl mx-auto lg:px-0 px-8">
          <div className="relative w-full lg:w-2/5 h-64 sm:h-80 lg:h-96 transition-all duration-300 ease-in-out group-hover:lg:w-3/5">
            <img
              className="w-full h-full object-cover border"
              src={imageUrl1}
              alt="Image 1"
            />
          </div>
          <div className="relative w-full lg:w-3/5 h-64 sm:h-80 lg:h-96 mt-4 lg:mt-0 lg:ml-4 transition-all duration-300 ease-in-out group-hover:lg:w-2/5">
            <img
              className="w-full h-full object-cover border"
              src={imageUrl2}
              alt="Image 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
