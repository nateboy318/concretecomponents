import React from "react";
import img1 from "../img/4.PNG";

const Card = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 justify-center">
      <article className="overflow-hidden max-w-xs  sm:max-w-lg hover:scale-105 transition-all border border-white mx-auto">
        <img
          alt="Card Image"
          src={img1}
          className="w-full h-48 sm:h-56 object-cover"
        />
        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-2xl sm:text-3xl font-medium text-white">
              StoneKitchen
            </h3>
          </a>
          <p className="mt-2 text-sm sm:text-base text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
          <a
            href="dealer-gallery"
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
      <article className="overflow-hidden max-w-xs  sm:max-w-lg hover:scale-105 transition-all border border-white mx-auto">
        <img
          alt="Card Image"
          src={img1}
          className="w-full h-48 sm:h-56 object-cover"
        />
        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-2xl sm:text-3xl font-medium text-white">
              StoneKitchen
            </h3>
          </a>
          <p className="mt-2 text-sm sm:text-base text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
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
