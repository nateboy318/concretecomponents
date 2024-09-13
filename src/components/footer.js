import React from "react";

const Footer = () => {
  // Navigation links (same as in Nav)
  const navigation = [
    { title: "About", path: "/#about" },
    { title: "Blog", path: "/#blogcta" },
    { title: "The Process", path: "/#process" },
    { title: "Become A Dealer", path: "/#hero2" },
    { title: "Contact", path: "/#contact" },
  ];

  return (
    <div className="w-full bg-black/90 pt-10">
      <footer className="w-full mx-auto p-4 md:py-8">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex justify-center sm:justify-start items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-navy">
                <h1 className="text-white text-3xl">Concrete Components</h1>
              </span>
            </a>

            {/* Footer Navigation Links */}
            <ul className="hidden md:flex flex-wrap items-center text-lg font-medium text-white sm:mb-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="me-4 md:me-6">
                  <a
                    href={item.path}
                    className="block py-2 px-3 rounded transition-all md:hover:bg-transparent md:border-0 md:hover:text-maroon"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-6 border-white/50 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-white text-center">
            © 2024{" "}
            <a href="/" className="hover:underline text-navy">
              Concrete Components
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
