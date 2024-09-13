import React, { useState } from "react";
import img1 from "../img/logo.PNG";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuOnClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleNavClick = (sectionId) => (e) => {
    e.preventDefault();
    closeMenuOnClick();

    const currentPage = window.location.pathname;
    if (currentPage !== "/") {
      // Navigate back to the home page and scroll after a delay
      window.location.assign(`/#${sectionId}`);
    } else {
      // Scroll to the section if already on the home page
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div>
      <nav className="bg-black/90 fixed w-full top-0 left-0 z-40 px-4 lg:px-16">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-3xl items-center font-semibold whitespace-nowrap text-white">
              <img src={img1} className="h-10 md:h-16" alt="Logo" />
            </span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 z-50"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
          <div
            className={`${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } fixed inset-0 bg-black/95 text-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:items-center md:justify-end md:space-x-8 md:bg-transparent md:p-0`}
          >
            <ul className="font-medium text-xl flex flex-col h-full justify-center items-center md:flex-row md:space-x-8">
              <li>
                <a
                  href="/#about"
                  className="block py-2 px-3 rounded transition-all md:hover:bg-transparent md:border-0 md:hover:text-maroon md:p-0"
                  onClick={handleNavClick("about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#blogcta"
                  className="block py-2 px-3 rounded transition-all md:hover:bg-transparent md:border-0 md:hover:text-maroon md:p-0"
                  onClick={handleNavClick("blogcta")}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/#process"
                  className="block py-2 px-3 rounded transition-all md:hover:bg-transparent md:border-0 md:hover:text-maroon md:p-0"
                  onClick={handleNavClick("process")}
                >
                  The Process
                </a>
              </li>
              <li>
                <a
                  href="/#hero2"
                  className="block py-2 px-3 rounded transition-all md:hover:bg-transparent md:border-0 md:hover:text-maroon md:p-0"
                  onClick={handleNavClick("hero2")}
                >
                  Become A Dealer
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="block py-2 px-3 rounded transition-all md:hover:bg-transparent md:border-0 md:hover:text-maroon md:p-0"
                  onClick={handleNavClick("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
