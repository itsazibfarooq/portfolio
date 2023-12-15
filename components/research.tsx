"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/miami_logo.jpg";

const Research = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 items-center py-16">
      <div className="max-w-[80%] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Current Status
          </p>
          <h2 className="py-4">Master&apos;s in Computer Science 🎓</h2>
          <p className="py-2 text-[#808080] font-mono"> 2023 - 2025</p>
          <p className="py-2 text-gray-600">
            Hello, I am currently pursuing my Masters in Computer Science at
            Miami University, where my academic journey is deeply rooted in the
            ever-evolving field of technology. My focus lies in the dynamic
            realm of machine learning, and my current research endeavors revolve
            around enhancing the security infrastructure of neural networks.
            Specifically, I am dedicated to fortifying the architecture and data
            of neural networks, ensuring their robustness and reliability for
            secure integration into offload cloud applications. This pursuit is
            driven by my passion for contributing to the advancements in
            artificial intelligence and its responsible utilization in diverse
            technological landscapes.
          </p>
          <p>
            <strong>Advisor</strong>
            <span className="text-red-500"> Prof. Xianglong Feng</span>
          </p>
          <a target="_blank" href={"https://drive.google.com/file/d/1-d67lyA9-GfTaMLsbWqOfFseTl6TzkyN/view?usp=sharing"}>
            <button className="bg-gradient-to-r from-[#5651e5] to-[#709dff] px-8 py-2 mt-4 mr-8">
              Resume
            </button>
          </a>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={logo}
            className="rounded-xl transition-transform duration-500"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Research;
