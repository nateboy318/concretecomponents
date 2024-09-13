import React from "react";

const Process = ({ data }) => {
  return (
    <div>
      <section className="bg-white/10 py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {data?.MainText || "Our Unique Process"}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-white lg:text-xl lg:leading-8">
              {data?.SubText ||
                "We combine design, engineering, and craftsmanship to create bespoke outdoor kitchens."}
            </p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-6xl lg:grid-cols-4">
            {/* Step 1 */}
            <li className="flex-start group relative flex lg:flex-col text-white hover:text-black">
              <span
                className="hidden lg:block absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex bg-transparent h-12 w-12 shrink-0 items-center justify-center border border-white transition-all duration-200 group-hover:border-white/80 group-hover:bg-white">
                <p className="text-4xl">1</p>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-2xl font-bold text-white">
                  {data?.Step1 || "Design Consultation"}
                </h3>
              </div>
            </li>

            {/* Step 2 */}
            <li className="flex-start group relative flex lg:flex-col text-white hover:text-black">
              <span
                className="hidden lg:block absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex bg-transparent h-12 w-12 shrink-0 items-center justify-center border border-white transition-all duration-200 group-hover:border-white/80 group-hover:bg-white">
                <p className="text-4xl">2</p>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-2xl font-bold text-white">
                  {data?.Step2 || "Custom Engineering"}
                </h3>
              </div>
            </li>

            {/* Step 3 */}
            <li className="flex-start group relative flex lg:flex-col text-white hover:text-black">
              <span
                className="hidden lg:block absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex bg-transparent h-12 w-12 shrink-0 items-center justify-center border border-white transition-all duration-200 group-hover:border-white/80 group-hover:bg-white">
                <p className="text-4xl">3</p>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-2xl font-bold text-white">
                  {data?.Step3 || "Manufacturing"}
                </h3>
              </div>
            </li>

            {/* Step 4 */}
            <li className="flex-start group relative flex lg:flex-col text-white hover:text-black">
              <div className="flex items-center">
                <span
                  className="hidden lg:block absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"
                ></span>
                <div
                  className="hidden lg:block absolute right-[-10px] top-[15%] transform -translate-y-1/2 h-4 w-4 bg-gray-300 rounded-full lg:right-auto lg:left-[calc(100%_+_0px)]"
                  aria-hidden="true"
                ></div>
              </div>

              <div className="inline-flex bg-transparent h-12 w-12 shrink-0 items-center justify-center border border-white transition-all duration-200 group-hover:border-white/80 group-hover:bg-white">
                <p className="text-4xl">4</p>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-2xl font-bold text-white">
                  {data?.Step4 || "Quality Check"}
                </h3>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center pt-24">
          <a
            href="/details"
            className="bg-maroon text-white hover:bg-opacity-65 py-4 px-12 text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            {data?.ButtonText || "Learn More"}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Process;
