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
    <div id="about" className="w-full md:h-screen p-2 items-center py-16">
      <div className="max-w-[80%] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-[#808080] font-mono">\\ Hello world 👋</p>
          <p className="py-2 text-gray-600">
            Meet Azib, a self-taught programming enthusiast with an unquenchable
            thirst for solving intricate problems. My love for coding knows no
            bounds, and I am always eager to take on big and complex challenges.
            I am a rapid learner and a natural leader, I excels at guiding
            others through the digital realm.
          </p>
          <p className="py-2 text-gray-600">
            My ultimate dream is to work in renowned tech software firms like
            MAANG, where I can passionately contribute and leave a lasting
            impact on the world of technology.
          </p>
        </div>
        <div
          onMouseEnter={hoverEnter}
          onMouseLeave={hoverEnter}
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <Image
            src={profile}
            className="rounded-xl transition-transform duration-500"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
