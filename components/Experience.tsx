import React from "react";
import ExpItem from "./expItem";

import algolab from "../public/assets/experience/algolab.png";

function Experience() {
  return (
    <div id="projects" className="w-full p-2 pt-12">
      <div className="max-w-[80%] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Past Workplaces</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ExpItem
            image={algolab}
            title="Software Engineer"
            timeline="2022 - 2023"
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
