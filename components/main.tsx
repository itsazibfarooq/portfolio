"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Main() {
  const [hover, setHover] = useState(false);
  function handleHover() {
    setHover(!hover);
  }

  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <p className="uppercase text-sm tracking-widest text-gray-600">
              Breathes code
            </p>
            <h1 className="py-4 text-gray-700">
              Hi, I'm{" "}
              <span className="text-[#d18800]">Azib{hover ? "🤝" : " "}</span>
            </h1>
            <h1 className="py-2 text-gray-700">A Full Stack Developer</h1>
          </div>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {
              "My Code is destined to shape the future, I seek to explore algorithms that define a world where possibilities transcend limitations"
            }
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
  );
}

export default Main;
