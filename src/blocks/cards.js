import React from "react";
import Card from "../components/card.js";

const Cards = ({ data }) => {
  // Log data to debug
  console.log("Dealer Data:", data);

  // Determine the number of columns based on the number of dealers
  const columnClass =
    data && data.DealerCards && data.DealerCards.length === 1
      ? "grid-cols-1" // Use 1 column if there is exactly 1 dealer
      : data.DealerCards.length === 3
      ? "grid-cols-3" // Use 3 columns if there are exactly 3 dealers
      : "md:grid-cols-2 xl:grid-cols-2"; // Otherwise, default to 2 columns on medium screens and 2 columns on extra-large screens

  return (
    <div className="py-12 sm:py-16 lg:py-24 px-8 lg:px-16 ">
      <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl text-white max-w-2xl sm:max-w-3xl text-center mx-auto pb-8 sm:pb-12 lg:pb-16">
        Concrete Components Dealers
      </h1>

      <div
        className={`max-w-6xl mx-auto grid grid-cols-1 ${columnClass} justify-center`}
      >
        {data && data.DealerCards && data.DealerCards.length > 0
          ? data.DealerCards.map((dealer, index) => (
              <Card
                key={index}
                dealerName={dealer.DealerName}
                dealerDescription={dealer.DealerDescription}
                dealerImage={`https://cc-strapi-a63514d69bf3.herokuapp.com${dealer.DealerImage?.data?.attributes?.url}`} // Fixed template literal
              />
            ))
          : "No dealers available."}
      </div>

      <div className="flex justify-center pt-8 sm:pt-12 lg:pt-16">
        <a
          href="#contact"
          className="bg-maroon text-white hover:bg-opacity-65 py-3 px-8 sm:py-4 sm:px-12 text-lg sm:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Become A Dealer
        </a>
      </div>
    </div>
  );
};

export default Cards;
