"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { IoIosClock, IoMdClock } from "react-icons/io";
import {
  IoBusinessOutline,
  IoMailOpen,
  IoPhonePortrait,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { SocialIcon } from "react-social-icons";

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: any }) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "Agribiotech_mail",
        "template_2ozg8te",
        {
          from_name: form.name,
          to_name: "Rahul",
          from_email: form.email,
          to_email: "connect@rahultalukdar.in",
          message: form.message,
        },
        "qmeqgh5sh0sD3xQpl"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
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
                <div className="md:text-xl text-sm flex flex-col">
                  <div>+918411028760</div>
                  <div>+919434401977</div>
                  <div>+919832979513</div>
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
                  value={form.name}
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
                  value={form.email}
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
                  value={form.message}
                  onChange={handleChange}
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
