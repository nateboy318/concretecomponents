import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    zipcode: "",
    message: "",
    projectType: "",
    timeFrame: "",
  });

  const [notification, setNotification] = useState({
    isOpen: false,
    message: "",
    type: "", // "success" or "error"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_p5bhm29", // replace with your EmailJS service ID
        "template_5a7ksls", // replace with your EmailJS template ID
        formData,
        "QhsMke_x-Wh46_mdR" // replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("Message sent successfully:", response);
        setNotification({
          isOpen: true,
          message: "Your message has been sent successfully!",
          type: "success",
        });
        // Clear form fields after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          zipcode: "",
          message: "",
          projectType: "",
          timeFrame: "",
        });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setNotification({
          isOpen: true,
          message:
            "There was an error sending your message. Please try again later.",
          type: "error",
        });
      });
  };

  return (
    <div>
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
            Have questions about designing your outdoor kitchen? Want to know
            more about our concrete materials? Looking for installation or
            product details? Reach out to us, and we’ll be happy to assist.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                className="border bg-transparent text-opacity-100 text-sm text-white focus:border-primary-500 block w-full p-4"
                placeholder="FIRST NAME"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                className="border bg-transparent text-opacity-100 text-sm text-white focus:border-primary-500 block w-full p-4"
                placeholder="LAST NAME"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="border bg-transparent text-opacity-100 text-sm text-white focus:border-primary-500 block w-full p-4"
                placeholder="EMAIL ADDRESS"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex gap-4">
              <input
                type="tel"
                name="phoneNumber"
                className="border bg-transparent text-opacity-100 text-sm text-white focus:border-primary-500 block w-full p-4"
                placeholder="PHONE NUMBER"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="zipcode"
                className="border bg-transparent text-opacity-100 text-sm text-white focus:border-primary-500 block w-full p-4"
                placeholder="ZIPCODE"
                value={formData.zipcode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex gap-4">
              <select
                name="projectType"
                className="border bg-transparent text-opacity-100 text-sm text-gray-400 focus:border-primary-500 block w-full p-4"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option className="bg-black " value="" disabled>
                  Select Project Type
                </option>
                <option className="bg-black" value="Custom Kitchen">
                  Custom Kitchen
                </option>
                <option className="bg-black" value="Chef Kitchen">
                  Chef Kitchen
                </option>
                <option className="bg-black" value="Kamado Kitchen">
                  Kamado Kitchen
                </option>
                <option className="bg-black" value="Other">
                  Other
                </option>
              </select>
              <select
                name="timeFrame"
                className="border bg-transparent text-opacity-100 text-sm text-gray-400 focus:border-primary-500 block w-full p-4"
                value={formData.timeFrame}
                onChange={handleChange}
                required
              >
                <option className="bg-black" value="" disabled>
                  Select Time Frame
                </option>
                <option className="bg-black" value="Ready Now">
                  Ready Now
                </option>
                <option className="bg-black" value="3-6 months">
                  3-6 months
                </option>
                <option className="bg-black" value="6+ Months">
                  6+ Months
                </option>
                <option className="bg-black" value="Just Looking">
                  Just Looking
                </option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <textarea
                name="message"
                rows="6"
                className="border bg-transparent text-opacity-100 text-sm text-white focus:border-primary-500 block w-full p-4"
                placeholder="Leave a comment..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-maroon text-white hover:bg-opacity-65 py-4 px-12 text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mx-auto flex justify-center"
            >
              Send Message
            </button>
          </form>
          {notification.isOpen && (
            <div
              className={`mt-6 p-4 rounded-lg text-white ${
                notification.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              <p>{notification.message}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
