import React from "react";
import ProjectItem from "./projectItem";

import propertyImg from "../public/assets/projects/property.jpg";
import crypto from "../public/assets/projects/crypto.jpg";
import netflix from "../public/assets/projects/netflix.jpg";

function Projects() {
  return (
    <div id="projects" className="w-full p-2 pt-12">
      <div className="max-w-[80%] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            image={propertyImg}
            title="Propert Finder"
            tools={["ReactJS", "JS"]}
            url="/property"
          />
          <ProjectItem
            image={crypto}
            title="Crypto Trading"
            tools={["Bitcoin", "TS"]}
            url="/crypto"
          />
          <ProjectItem
            image={netflix}
            title="NetFlix Clone"
            tools={["TDBM", "TS"]}
            url="/netflix"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
