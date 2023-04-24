import React, { useState } from "react";
import { PostData, ProjectData } from "../types/types";
import ProjectGrid from "./project-grid";

interface Props {
  data: ProjectData;
}

export const ProjectGallery = ({ data }: Props) => {
  // console.log(data);
  const [projectMenu, setprojectMenu] = useState("dev");
  // console.log(projectMenu);

  let filteredData: PostData[] = [];
  if (projectMenu === "dev") {
    filteredData = data.developerPosts;
  } else if (projectMenu === "graphicdesign") {
    filteredData = data.graphicDesigns;
  } else if (projectMenu === "casestudies") {
    filteredData = data.caseStudies;
  }

  return (
    <section id="projects" className="h-auto">
      <div className="grid justify-center">
        <div className="place-items-center py-2">
          <h1 className="text-lg font-bold">Projects</h1>
          <div className="place-items-center"></div>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-end">
        <ul className="menu rounded-box menu-horizontal justify-center gap-4 bg-base-100 font-bold">
          <li onClick={() => setprojectMenu("dev")}>
            <a>Dev</a>
          </li>
          <li onClick={() => setprojectMenu("graphicdesign")}>
            <a>Graphic Design</a>
          </li>
          <li onClick={() => setprojectMenu("casestudies")}>
            <a>Case Studies</a>
          </li>
        </ul>
      </div>

      <ProjectGrid filteredData={filteredData} projectMenu={projectMenu} />
    </section>
  );
};
