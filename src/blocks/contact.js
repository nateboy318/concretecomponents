import React from "react";

const contact = () => {
  return (
    <div>
      <div classname="relative flex items-top justify-center min-h-screen bg-white sm:items-center sm:pt-0">
        <div classname="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div classname="mt-8 overflow-hidden">
            <div classname="grid grid-cols-1 md:grid-cols-2">
              <div classname="p-6 mr-2 bg-gray-100 0 sm:rounded-lg">
                <h1 classname="text-4xl sm:text-5xl  text-white font-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p classname="text-normal text-lg sm:text-2xl font-medium text-white mt-2">
                  Fill in the form to start a conversation
                </p>

                <div classname="flex items-center mt-8 text-white"></div>

                <div classname="flex items-center mt-4 text-white">
                  <div classname="ml-4 text-md tracking-wide font-semibold w-40">
                    +44 1234567890
                  </div>
                </div>

                <div classname="flex items-center mt-2 text-white">
                  <div classname="ml-4 text-md tracking-wide font-semibold w-40">
                    <a href="https://veilmail.io/irish-geoff">
                      https://veilmail.io/irish-geoff
                    </a>
                  </div>
                </div>
              </div>

              <form
                action="https://fabform.io/f/xxxxx"
                method="post"
                classname="p-6 flex flex-col justify-center"
              >
                <div classname="flex flex-col">
                  <label for="name" classname="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    classname="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  ></input>
                </div>

                <div classname="flex flex-col mt-2">
                  <label for="email" classname="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    classname="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  ></input>
                </div>

                <div classname="flex flex-col mt-2">
                  <label for="message" classname="hidden">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    classname="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  classname="md:w-32 bg-black hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                >
                  Submit
                </button>
                <p classname="leading-relaxed text-xl text-gray-900 mt-8">
                  We use VeilMail.io to{" "}
                  <a
                    classname="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    href="https://veilmail.io"
                  >
                    hide email address from spammers
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
