"use client";
import Image from "next/image";

import AboutImage from "../public/assets/profile.jpg";
import hoverImage from "../public/assets/profile2.jpg";
import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [profile, setProfile] = useState(AboutImage);

  const hoverEnter = () => {
    profile === AboutImage ? setProfile(hoverImage) : setProfile(AboutImage);
  };

  return (
    <div className="w-full md:h-screen p-2 items-center py-16">
      <div className="max-w-[80%] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-[#808080] font-mono">
            \\ I am something which you might be interested to talk to
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            aliquid deleniti cupiditate quaerat perspiciatis error delectus
            veniam nisi ipsum possimus aperiam neque molestiae, assumenda,
            doloribus, repudiandae esse. Architecto, quasi veritatis!
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            aliquid deleniti cupiditate quaerat perspiciatis error delectus
            veniam nisi ipsum possimus aperiam neque molestiae, assumenda,
            doloribus, repudiandae esse. Architecto, quasi veritatis!
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Checkout my Projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={profile}
            onMouseEnter={hoverEnter}
            onMouseLeave={hoverEnter}
            className="rounded-xl transition-transform duration-500"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
