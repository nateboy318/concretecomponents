import React from "react";
import Card from "../components/card.js";

const Cards = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-24">
      <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl text-white max-w-2xl sm:max-w-3xl text-center mx-auto pb-8 sm:pb-12 lg:pb-16">
        Concrete Components Dealers
      </h1>

      <Card />

      <div className="flex justify-center pt-8 sm:pt-12 lg:pt-16">
        <a
          href="#"
          className="bg-maroon text-white hover:bg-opacity-65 py-3 px-8 sm:py-4 sm:px-12 text-lg sm:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Become A Dealer
        </a>
      </div>
    </div>
  );
};

export default Cards;
