import React, { useState } from "react";
import client from "../lib/apolloClient";
import { GetStaticProps } from "next";
import { gql } from "@apollo/client";
import Image from "next/image";
import { PostData, ProjectData } from "../types/types";
import Link from "next/link";
import ProjectGrid from "./ProjectGrid";

const ProjectsSection = ({ data }: { data: ProjectData }) => {
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
          {/* <div className="place-content-start"> */}
          <h1 className="text-lg font-bold">Projects</h1>
          <div className="place-items-center">
            {/* <h1 className="text-2xl font-bold">Coming Soon</h1> */}
          </div>
        </div>
      </div>

      <div className="- grid place-items-center py-2 md:place-items-end">
        <ul className="menu rounded-box menu-horizontal bg-base-100">
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

export default ProjectsSection;

export const getStaticProps: GetStaticProps = async () => {
  const { data }: { data: ProjectData } = await client.query({
    query: gql`
      {
        developerPosts {
          id
          projectInfo {
            ... on ProjectInfo {
              id
              title
              subtitle
              slug
              images {
                url
              }
            }
          }
        }
        caseStudies {
          id
          projectInfo {
            ... on ProjectInfo {
              id
              slug
              subtitle
              title
              images {
                url
              }
            }
          }
        }
        graphicDesigns {
          id
          projectInfo {
            ... on ProjectInfo {
              id
              slug
              images {
                url
              }
              title
              subtitle
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
