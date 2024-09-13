import React from "react";

const Card = ({ dealerName, dealerDescription, dealerImage }) => {
  return (
    <div className="mx-auto">
      <article className="overflow-hidden max-w-xs sm:max-w-lg hover:scale-105 transition-all border my-8 border-white mx-2 sm:mx-8">
        <img
          alt={dealerName}
          src={dealerImage} // Ensure image URL is correct
          className="w-full h-48 sm:h-56 object-cover"
        />
        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-2xl sm:text-3xl font-medium text-white">
              {dealerName}
            </h3>
          </a>
          <p className="mt-2 text-sm sm:text-base text-white">
            {dealerDescription}
          </p>
          <a
            href="/dealer-gallery"
            className="group mt-6 inline-flex items-center gap-1 text-sm sm:text-base font-medium text-maroon bg-white p-2.5"
          >
            Find out more
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-1 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </div>
      </article>
    </div>
  );
};

export default Card;
