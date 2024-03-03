"use client";
import Image from "next/image";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., send data to a server, etc.)
    console.log("Form submitted:", formData);
    // Clear the form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className=" mt-5 text-4xl   w-full h-full  flex md:flex-row flex-col-reverse  justify-end gap-96 p-20  ">
        <div id="detailsContact" className="h-full  ">
          <div className="bg-green-50 p-12 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
            <div className="flex flex-col gap-16 text-white">
              <div>Info</div>
              <div>email</div>
              <div>phone no.</div>
              <div>address</div>
              <div>working hours</div>
              <div className="flex justify-cente gap-2">
                <div>facebook</div>
                <div>instagram</div>
                <div>twitter</div>
              </div>
            </div>
            <Image
              src="/quote.svg"
              alt="camp-2"
              width={186}
              height={219}
              className="camp-quote"
            />
          </div>
        </div>
        <div id="formParent" className="text-black flex flex-col gap-20">
          <div className=" text-8xl font-extrabold">Contact Us</div>
          <div>
            Feel free to contact us any time.
            <br /> We will get back to you as soon as we can!
          </div>
          <div id="form">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-xl font-bold mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-xl font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-xl font-bold mb-2"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChangeMessage}
                  required
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 border-2 border-green-50 text-white font-bold py-2 px-4 rounded-3xl   hover:bg-white hover:text-green-50"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
