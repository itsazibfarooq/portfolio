import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { IoIosRecording } from "react-icons/io";
import { FiGithub } from "react-icons/fi";

import dp_gcp from "../../../public/assets/webinars/dp_gcp.jpeg";
import data_pipeline from "../../../public/assets/webinars/data_pipeline.jpeg";
import cover from "../../../public/assets/cover.webp";
import Link from "next/link";

export default function Dp_gcp() {
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
          <h2 className="py-2">Datapipelines in Google Cloud Platform</h2>
          <div className="flex">
            <IoIosRecording />
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 relative text-justify">
          <p className="mb-10">
            In this webinar, I have developed a simple datapipeline in GCP,
            using different services, including cloud storage, BigQuery, and
            Dataflow. I have delivered the webinar to the audience of more than
            100 participants. I successfully implemented an automated pipeline,
            using cloud function.
          </p>

          <div className="flex justify-center mb-5">
            <Image
              className="z-1"
              height={400}
              width={400}
              src={dp_gcp}
              alt="/"
            />
          </div>

          <h2 className="mb-5">PIPELINE:</h2>
          <div className="flex justify-center mb-5">
            <Image className="z-1" src={data_pipeline} alt="/" />
          </div>

          <ol className="mb-10">
            <li className="mb-5">
              <strong>Cloud Composer :</strong>Composer sequentially run the
              python script, which make the api call and save the response csv
              file format in cloud storage after parsing the response.
            </li>

            <li className="mb-5">
              <strong>Cloud Function :</strong> Declared a function which run a
              dataflow job, responsible for ETL from storage source to dataware
              house sink (BigQuery). Trigger is enabled on the bucket create
              object event.
            </li>

            <li className="mb-5">
              <strong>DataFlow :</strong> Dataflow upload the csv created file
              from cloud storage to the BigQuery, which in turn is connected to
              the Looker dashboard to update dashboard based on the
              datawarehouse.
            </li>
          </ol>

          <p>
            Learn more about the implementation, in the following video
            recording.
          </p>

          <div className="flex">
            <a
              href={"https://fb.watch/pIS8mLHw59/?mibextid=Nif5oz"}
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
                Cloud Storage
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Cloud Composer
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                IAM
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                BigQuery
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Cloud Functions
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                DataFlow
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Python
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
