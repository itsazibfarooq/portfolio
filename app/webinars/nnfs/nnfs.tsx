import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { SiPytorch } from "react-icons/si";
import { IoIosRecording } from "react-icons/io";
import { FaPython } from "react-icons/fa";

import nnfs from "../../../public/assets/webinars/nnfs.jpeg";
import cover from "../../../public/assets/cover.webp";
import Link from "next/link";

export default function Nnfs() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cover}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="py-2">Building Neural Networks from Scratch</h2>
          <div className="flex">
            <FaPython className="mr-1" /> <SiPytorch />
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 relative text-justify">
          <p className="mb-10">
            Hello, fellow enthusiasts! 👋 I am thrilled to share the exciting
            journey we embarked on in my recent webinar, where we delved into
            the fascinating realm of neural networks. As the host, I guided
            participants through the intricate process of constructing a neural
            network from scratch using Python, culminating in the implementation
            of a fully connected dense network with PyTorch.
          </p>

          <div className="flex justify-center mb-5">
            <Image
              className="z-1"
              height={500}
              width={600}
              src={nnfs}
              alt="/"
            />
          </div>

          <h2 className="mb-5">Key Highlights:</h2>

          <ol className="mb-5">
            <li>
              <strong>Building from Scratch:</strong> We started at the
              foundation, unraveling the intricacies of neural networks. From
              understanding the basics to crafting our own neural network
              architecture, participants gained hands-on experience in
              constructing the backbone of deep learning.
            </li>

            <li>
              <strong>PyTorch Implementation:</strong> Venturing into the realm
              of PyTorch, we explored the powerful capabilities of this deep
              learning library. I showcased the step-by-step process of
              implementing our neural network using PyTorch, harnessing its
              flexibility and efficiency.
            </li>

            <li>
              <strong>Multi-Layer Perceptron (MLP):</strong> The exploration
              didn&apos;t stop at the basics. Together, we dived into the realm
              of Multi-Layer Perceptrons, understanding their role and
              significance in creating complex neural networks. Participants not
              only grasped the theory but also witnessed practical
              implementation.
            </li>
          </ol>

          <p className="mb-10">
            <strong>Recording and Jupyter Notebook:</strong> For those who
            missed the live session or want to revisit the content, fear not! I
            have the entire webinar recorded, ensuring that the knowledge shared
            is accessible at your convenience. Additionally, the Jupyter
            Notebook, a comprehensive guide to the code and concepts covered, is
            available for download.
          </p>

          <div className="flex">
            <a
              className="mr-10"
              href={
                "https://colab.research.google.com/drive/1WgPAfJv0-kt10zIT4gWndYpqBjXYSUX1?usp=sharing"
              }
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="70"
                height="70"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="70AWaG9FpYs2yn8LzRfdUa_J0SgMWzAxqFj_gr1"
                  x1="17.151"
                  x2="29.996"
                  y1="8.498"
                  y2="37.571"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f09701"></stop>
                  <stop offset="1" stop-color="#e36001"></stop>
                </linearGradient>
                <path
                  fill="url(#70AWaG9FpYs2yn8LzRfdUa_J0SgMWzAxqFj_gr1)"
                  d="M8.108,18.006C10.534,11.579,16.724,7,24,7c7.276,0,13.466,4.579,15.892,11.006	C36.653,14.6,30.757,12.313,24,12.313C17.243,12.313,11.347,14.6,8.108,18.006z M24,35.688c-6.757,0-12.653-2.287-15.892-5.693	C10.534,36.421,16.724,41,24,41c7.276,0,13.466-4.579,15.892-11.006C36.653,33.4,30.757,35.688,24,35.688z"
                ></path>
                <linearGradient
                  id="70AWaG9FpYs2yn8LzRfdUb_J0SgMWzAxqFj_gr2"
                  x1="1.319"
                  x2="25.671"
                  y1="44.651"
                  y2="1.059"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#a1aab3"></stop>
                  <stop offset="1" stop-color="#8f979e"></stop>
                </linearGradient>
                <path
                  fill="url(#70AWaG9FpYs2yn8LzRfdUb_J0SgMWzAxqFj_gr2)"
                  d="M39.512,4.744c0,1.515-1.228,2.744-2.744,2.744s-2.744-1.228-2.744-2.744S35.253,2,36.768,2	S39.512,3.228,39.512,4.744z M10.976,40.415c-1.818,0-3.293,1.474-3.293,3.293c0,1.818,1.474,3.293,3.293,3.293	s3.293-1.474,3.293-3.293C14.268,41.889,12.794,40.415,10.976,40.415z M7.683,6.39c-1.212,0-2.195,0.983-2.195,2.195	s0.983,2.195,2.195,2.195s2.195-0.983,2.195-2.195S8.895,6.39,7.683,6.39z"
                ></path>
              </svg>
              CODE
            </a>

            <a href={"https://fb.watch/py_JgUSX0W/"} target="_blank">
              <IoIosRecording className="hover:text-blue-900" size={70} />
              RECORDING
            </a>
          </div>
        </div>

        <div className="h-fit col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Stack</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Calculus
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                PyTorch
              </p>
            </div>
          </div>
        </div>
        <Link href="/#webinars">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}
