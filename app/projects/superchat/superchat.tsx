import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import cover from "../../../public/assets/cover.webp";
import Link from "next/link";

export default function Superchat() {
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
          <h2 className="py-2">Super Chat</h2>
          <h3>JavaScript | Socket.io</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 text-justify">
          <p>Project</p>
          <h2 className="mb-10">Introducing SUPERCHAT</h2>
          <p className="mb-5">
            My innovative project is a peer-to-peer chat application built on
            the robust Socket.IO library. It redefines the way people connect
            and communicate in real-time, providing a super chat experience
            where multiple individuals from various browsers or clients can
            seamlessly join the conversation.
          </p>

          <p className="mb-5">
            Powered by Socket.IO, my peer-to-peer chat application ensures a
            lightning-fast and reliable communication channel. Users can engage
            in real-time conversations, sharing thoughts, ideas, and experiences
            effortlessly. The platform supports multiple users concurrently,
            fostering a dynamic and interactive environment where participants
            can exchange messages and collaborate in a truly peer-to-peer
            fashion.
          </p>

          <p className="mb-5">
            The super chat feature enhances the social experience by enabling
            users to join conversations from different browsers or clients,
            breaking down traditional communication barriers. Whether it&apos;s
            a group discussion, a brainstorming session, or a casual chat, my
            application provides a versatile platform for connecting people
            across diverse environments.
          </p>

          <h2 className="mb-5">Key Features:</h2>
          <ul>
            <li className="mb-5">
              <strong>Real-time Communication:</strong> Enjoy instant messaging
              with minimal latency, creating a seamless and engaging
              communication experience.
            </li>
            <li className="mb-5">
              <strong>Multi-User Support:</strong> Facilitate group discussions
              with ease, allowing multiple participants to join the chat
              concurrently.
            </li>
            <li className="mb-5">
              <strong>Cross-Browser Compatibility:</strong> Break free from
              limitations my application enables users to connect from various
              browsers and clients, fostering inclusivity.
            </li>
            <li className="mb-5">
              <strong>User-Friendly Interface:</strong> A clean and intuitive
              interface ensures that users can navigate the application
              effortlessly, focusing on what matters the conversation.
            </li>
            <li className="mb-5">
              <strong>Scalability:</strong> Built on Socket.IO, my application
              is designed to scale, accommodating a growing number of users
              without compromising performance.
            </li>
          </ul>

          <p className="mb-5">
            Experience the next frontier of peer-to-peer communication with my
            super chat application, where the possibilities for connection are
            limitless. Embrace a new era of collaborative and inclusive
            conversations, making communication not just a necessity but an
            enjoyable and enriching experience.
          </p>

          <a href={"https://solitary-leaf-5079.fly.dev/"}>
            <button className="bg-gradient-to-r from-[#5651e5] to-[#709dff] px-8 py-2 mt-4 mr-8">
              Demo
            </button>
          </a>
          <Link
            href={"https://github.com/itsazibfarooq/SuperChat"}
            target="_blank"
          >
            <button className="bg-gradient-to-r from-[#5651e5] to-[#709dff] px-8 py-2 mt-4">
              Code
            </button>
          </Link>
        </div>
        <div className="h-fit col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Stack</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Socket.io
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NodeJS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}
