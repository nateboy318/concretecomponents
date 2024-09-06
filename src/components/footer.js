const Footer = () => {
  const navigation = [
    { title: "What We Do", path: "#wwd" },
    { title: "Testimonials", path: "#testimonials" },
    { title: "Our Dealers", path: "#clients" },
    { title: "Become A Dealer", path: "#contact" },
    { title: "View Projects", path: "#gallery" },
  ];

  return (
    <div className="w-full bg-white/5 pt-10">
      <footer className="w-full mx-auto p-4 md:py-8  ">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className=" sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex justify-center sm:justify-start items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-navy">
                <h1 className="text-white text-3xl">Concrete Components</h1>
              </span>
            </a>
            <ul className="hidden sm:flex flex-wrap items-center mb-6 text-lg font-medium text-white sm:mb-0 dark:text-gray-400">
              {navigation.map((item, idx) => (
                <li key={idx} className="me-4 md:me-6">
                  <a href={item.path} className="hover:underline text-white">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-6 border-white/50 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-white sm:text-center ">
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
