import React from "react";

const Video = () => {
  return (
    <div>
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl">
              Check Out Our YouTube Channel
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg font-normal text-white sm:text-xl lg:text-2xl lg:leading-8">
              Discover more about Concrete Components and explore our
              StoneKitchen Outdoor Living Designs
            </p>
          </div>
          <div className="relative pt-8 pb-16 sm:pb-20 lg:pb-12">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/3A7tZm0Bbu8?si=o1MMepQ8fHW0XxsT"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full max-w-6xl h-full mx-auto aspect-video border p-4"
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="#"
            className="bg-maroon text-white hover:bg-opacity-65 py-4 px-12 text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            More Videos Here
          </a>
        </div>
      </section>
    </div>
  );
};

export default Video;
