import img1 from "../img/1.PNG";

function Details() {
  return (
    <div className="px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
      <h1 className="text-white text-5xl font-semibold sm:text-7xl flex justify-center mb-4">
        Our Unique Process
      </h1>
      <p className="text-white text-xl flex justify-center max-w-2xl text-center mx-auto mb-16 sm:mb-24">
        We combine design, engineering, and craftsmanship to create bespoke
        outdoor kitchens.
      </p>
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
          <div className="flex">
            <div className="flex flex-col items-center mr-4 ">
              <div>
                {" "}
                <div class="flex items-center justify-center bg-transparent h-12 w-12 shrink-0 border border-white   transition-all duration-200 group-hover:border-white/80 group-hover:bg-white">
                  <p className="text-4xl text-white">1</p>
                </div>
              </div>
              <div className="w-px h-full mt-4 bg-gray-300" />;
            </div>
            <div className="pt-1 pb-8 ml-4">
              <p className="mb-6  text-4xl text-white font-semibold">
                Design Consultation
              </p>
              <p className="text-white">
                Collaborate with our specialists to envision your ideal outdoor
                kitchen, blending your preferences with our innovative ideas.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4 ">
              <div>
                {" "}
                <div class="flex items-center justify-center bg-transparent h-12 w-12 shrink-0 border border-white   transition-all duration-200 group-hover:border-white/80 group-hover:bg-white">
                  <p className="text-4xl text-white">2</p>
                </div>
              </div>
              <div className="w-px h-full mt-4 bg-gray-300" />;
            </div>
            <div className="pt-1 pb-8 ml-4">
              <p className="mb-6  text-4xl text-white font-semibold">
                Custom Engineering
              </p>
              <p className="text-white">
                Our team engineers your design, providing detailed CAD drawings
                to ensure precision and quality in every aspect.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4 ">
              <div>
                {" "}
                <div class="flex items-center justify-center bg-transparent h-12 w-12 shrink-0 border border-white   transition-all duration-200 group-hover:border-white/80 group-hover:bg-white">
                  <p className="text-4xl text-white">3</p>
                </div>
              </div>
              <div className="w-px h-full mt-4 bg-gray-300" />;
            </div>
            <div className="pt-1 pb-8 ml-4">
              <p className="mb-6  text-4xl text-white font-semibold">
                Manufacturing
              </p>
              <p className="text-white">
                Our skilled craftsmen manufacture your kitchen using proprietary
                materials, ensuring consistency, strength, and beauty.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4 ">
              <div>
                {" "}
                <div class="flex items-center justify-center bg-transparent h-12 w-12 shrink-0 border border-white   transition-all duration-200 group-hover:border-white/80 group-hover:bg-white">
                  <p className="text-4xl text-white">4</p>
                </div>
              </div>
            </div>
            <div className="pt-1 pb-8 ml-4">
              <p className="mb-6  text-4xl text-white font-semibold">
                Installation and Quality Check
              </p>
              <p className="text-white">
                Our experts install your kitchen with precision, performing
                rigorous quality checks to ensure long-term performance.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
            src={img1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Details;
