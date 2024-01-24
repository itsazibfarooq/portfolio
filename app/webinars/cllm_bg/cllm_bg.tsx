import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { IoIosRecording } from "react-icons/io";
import { FiGithub } from "react-icons/fi";

import cllm_bg from "../../../public/assets/webinars/cllm_bg.jpeg";
import cover from "../../../public/assets/cover.webp";
import Link from "next/link";

export default function Cllm_bg() {
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
          <h2 className="py-2">Character Level Laguage Modelling via Bigram</h2>
          <div className="flex">
            <FiGithub className="mr-1" /> <IoIosRecording />
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 relative text-justify">
          <p className="mb-10">
            In this webinar, I guide audience through the process of deploying
            static web applications using three powerful methods. I was the
            host, and we explored the seamless deployment of static web apps
            with AWS Amplify, AWS S3 for static web app hosting, and delved into
            the automation with Terraform.
          </p>

          <div className="flex justify-center mb-5">
            <Image
              className="z-1"
              height={400}
              width={400}
              src={cllm_bg}
              alt="/"
            />
          </div>

          <h2 className="mb-5">Key Highlights:</h2>

          <ol className="mb-10">
            <li className="mb-5">
              <strong>AWS Amplify Unleashed:</strong> I kicked off the webinar
              by harnessing the full potential of AWS Amplify. Together, we
              explored how this service simplifies the deployment process,
              providing an intuitive and efficient way to get your static web
              apps up and running in no time.
            </li>

            <li className="mb-5">
              <strong>AWS S3 for Static Web App Hosting:</strong> Dive deep into
              the core of AWS S3 as we discovered the robust hosting
              capabilities it offers for static web applications. I demonstrated
              the step-by-step process, highlighting best practices to ensure a
              smooth deployment experience.
            </li>

            <li className="mb-5">
              <strong>Automate with Terraform:</strong> Automation is key, and
              with Terraform, we took our deployment process to the next level.
              Uncover the magic of infrastructure as code (IaC) as we explored
              how Terraform simplifies and streamlines the setup of S3 for web
              app hosting.
            </li>
          </ol>

          <div className="flex">
            <a
              className="mr-10"
              href={"https://github.com/itsazibfarooq/aws"}
              target="_blank"
            >
              <FiGithub className="hover:text-red-500" size={70} />
              CODE
            </a>

            <a
              href={
                "https://web.facebook.com/iCodeguru/videos/1602647703820200"
              }
              target="_blank"
            >
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
                AWS Amplify
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                AWS S3
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                AWS IAM
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Terrafrom
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
