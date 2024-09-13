import React from "react";
import Img1 from "../img/1.PNG";

const BlogCTA = ({ data }) => {
  return (
    <div>
      <section className="text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mb-16">
          <div className="max-w-7xl flex flex-col lg:flex-row justify-between gap-10 lg:gap-36 items-center">
            <div className="max-w-lg text-center lg:text-left">
              <h2 className="text-3xl font-bold sm:text-5xl lg:text-6xl">
                {data?.MainText || "What Makes Us Different"}
              </h2>

              <p className="mt-6 text-xl sm:text-2xl mb-6 lg:mb-10 text-gray-300">
                {data?.SubText ||
                  "All-new, fresh designs resistant to rust, rot, warp, melt, or burn—enduring lifetime beauty and performance."}
              </p>
              <a
                href="/blog/1"
                className="inline-block bg-maroon text-white hover:bg-opacity-65 py-3 px-8 lg:py-4 lg:px-12 text-lg sm:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                {data?.ButtonText || "Read More..."}
              </a>
            </div>
            <div className="w-full lg:w-auto">
              <img
                src={
                  `https://cc-strapi-a63514d69bf3.herokuapp.com${data.Image1.data.attributes.url}` ||
                  Img1
                }
                className="w-full max-w-sm lg:max-w-md hover:scale-105 transition-all"
                alt="Featured Image"
              />
            </div>
          </div>

          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a
              className="block border border-white p-6 sm:p-8 hover:scale-105 transition-all"
              href="#"
            >
              <div className="flex gap-4 items-center justify-center lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-white h-10 sm:h-12 w-10 sm:w-12"
                >
                  <path d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z" />
                </svg>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  {data?.Block1Title || "Coastal Durability"}
                </h2>
              </div>

              <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-300">
                {data?.Block1Text ||
                  "Engineered to withstand harsh coastal environments while maintaining elegant style."}
              </p>
            </a>

            <a
              className="block border border-white p-6 sm:p-8 hover:scale-105 transition-all"
              href="#"
            >
              <div className="flex gap-4 items-center justify-center lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-white h-10 sm:h-12 w-10 sm:w-12"
                >
                  <path d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z" />
                </svg>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  {data?.Block2Title || "Lasting Value"}
                </h2>
              </div>

              <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-300">
                {data?.Block2Text ||
                  "Marvel Crete delivers long-term durability and beauty, backed by industry-leading warranties."}
              </p>
            </a>

            <a
              className="block border border-white p-6 sm:p-8 hover:scale-105 transition-all"
              href="#"
            >
              <div className="flex gap-4 items-center justify-center lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-white h-10 sm:h-12 w-10 sm:w-12"
                >
                  <path d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z" />
                </svg>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  {data?.Block3Title || "All-Weather Resistant"}
                </h2>
              </div>

              <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-300">
                {data?.Block3Text ||
                  "Guaranteed to endure freezing temperatures, extreme heat, heavy rain, or strong winds."}
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogCTA;
