"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

import contact from "../public/assets/contact.jpg";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const serverBase: string = "https://wild-sound-3168.fly.dev";

const axiosInstance = axios.create({
  baseURL: `${serverBase}`,
  headers: { "Content-Type": "application/json" },
});

function Contact() {
  const defaultContact = {
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(defaultContact);

  function handleChange(event: any) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const [status, setStatus] = useState("send message");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const payload: any = JSON.stringify(formData);
    try {
      await axiosInstance.post(`/portfolio/contact`, payload);
      setFormData(defaultContact);
      setStatus("success");
      setTimeout(() => {
        setStatus("send message");
      }, 3000);
    } catch (err) {
      setStatus("Try Again");
      console.log(err);
    }
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[80%] m-auto px-2 py-8 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contact}
                  width="640"
                  height="120"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Azib Farooq</h2>
                <p>Full Stack Developer</p>
                <p>Available for Freelance or Full-Time Position.</p>
              </div>
              <div>
                <p className="uppercase pt-8">Let's Talk</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaInstagram />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaTwitter />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="phoneNumber"
                      className="uppercase text-sm py-2"
                    >
                      Phone Number
                    </label>
                    <input
                      name="phoneNumber"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      onChange={handleChange}
                      value={formData.phoneNumber}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    name="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    name="subject"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    onChange={handleChange}
                    value={formData.subject}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    rows="10"
                    onChange={handleChange}
                    value={formData.message}
                  ></textarea>
                </div>
                <button
                  className={`w-full p-4 text-gray-100 mt-4 ${
                    status === "send message"
                      ? "bg-gradient-to-r from-[#5651e5] to-[#709dff]"
                      : status === "success"
                      ? "bg-gradient-to-r from-green-300 to-green-500"
                      : "bg-gradient-to-r from-red-300 to-red-500"
                  }`}
                >
                  {status}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
