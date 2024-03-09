"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosClock, IoMdClock } from "react-icons/io";
import {
  IoBusinessOutline,
  IoMailOpen,
  IoPhonePortrait,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { SocialIcon } from "react-social-icons";

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
      <div
        id="contact"
        className=" mt-5 md:text-4xl text-2xl   w-full h-full  flex md:flex-row flex-col-reverse  justify-end md:gap-96 gap-20 md:p-20 p-10  "
      >

        <div id="detailsContact" className="h-full md:p-2  ">

          <div className="bg-green-50 p-12 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
            <div className="flex flex-col gap-16 text-white">
              <div className=" font-extralight">INFO</div>
              <div className="flex gap-4">
                <IoMailOpen />
                <div className="md:text-xl text-sm">
                  contact@agribiotech.co.in
                </div>
              </div>
              <div className="flex gap-4">
                <IoPhonePortraitOutline />
                <div className="md:text-xl text-sm">
                  +918411028760 +919434401977
                </div>
              </div>
              <div className="flex gap-4">
                <IoBusinessOutline />
                <div className="md:text-xl text-sm">
                  {" "}
                  Saradapally, Tarakeswar, Hooghly, West Bengal
                </div>
              </div>
              <div className="flex gap-4">
                <IoMdClock />
                <div className="md:text-xl text-sm">0900-1800 Hrs</div>
              </div>
              <div className="flex justify-cente gap-10">
                <SocialIcon network="facebook" />

                <SocialIcon network="instagram" />
                <SocialIcon network="x" />
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
        <div
          id="formParent"
          className=" mt-5 text-black flex flex-col md:gap-20 gap-10"
        >
          <div className=" md:text-8xl text-4xl font-extrabold">Contact Us</div>
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
