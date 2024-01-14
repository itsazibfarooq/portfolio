import React from "react";
import WebinarItem from "./webinarItem";

import nnfs from "../public/assets/webinars/nnfs.jpeg";
import swph from "../public/assets/webinars/aws_swph.jpeg";

function Webinars() {
  return (
    <div id="webinars" className="w-full p-2 pt-12">
      <div className="max-w-[80%] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Webinars
        </p>
        <h2 className="py-4">What I&apos;ve Taught</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <WebinarItem
            image={nnfs}
            title="Neural Network From Scratch"
            tools={["Python, Calculus, PyTorch"]}
            url="/webinars/nnfs"
          />
          <WebinarItem
            image={swph}
            title="AWS Static Webapp Deployment"
            tools={["AWS, Terraform"]}
            url="/webinars/swph"
          />
        </div>
      </div>
    </div>
  );
}

export default Webinars;
