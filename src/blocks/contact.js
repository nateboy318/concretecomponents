import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Have questions about designing your outdoor kitchen? Want to know
            more about our concrete materials? Looking for installation or
            product details? Reach out to us, and we’ll be happy to assist.
          </p>
          <form action="#" className="space-y-8">
            <div className="flex gap-4">
              <input
                type="email"
                id="email"
                className="border bg-transparent text-opacity-100 text-sm text-white focus:border-primary-500 block w-full p-4 "
                placeholder="FIRST NAME"
                required
              />
              <input
                type="email"
                id="email"
                className="border bg-transparent text-opacity-100 text-sm text-white focus:border-primary-500 block w-full p-4 "
                placeholder="LAST NAME"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="border bg-transparent text-opacity-100 text-sm text-white focus:border-primary-500 block w-full p-4 "
                placeholder="EMAIL ADDRESS"
                required
              />
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                id="email"
                className="border bg-transparent text-opacity-100 text-sm text-white focus:border-primary-500 block w-full p-4 "
                placeholder="PHONE NUMBER"
                required
              />
              <input
                type="email"
                id="email"
                className="border bg-transparent text-opacity-100 text-sm text-white focus:border-primary-500 block w-full p-4 "
                placeholder="ZIPCODE"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <textarea
                id="message"
                rows="6"
                className="border bg-transparent text-opacity-100 text-sm text-white focus:border-primary-500 block w-full p-4 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <a
              href="/details"
              class="bg-maroon text-white hover:bg-opacity-65 py-4 px-12 text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mx-auto flex justify-center"
            >
              Send Message
            </a>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
