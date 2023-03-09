import React, { useState } from "react";
import client from "../lib/apolloClient";
import { GetStaticProps } from "next";
import { gql } from "@apollo/client";
import Image from "next/image";
import { PostData, ProjectData } from "../types/types";

const ProjectsSection = ({ data }: { data: ProjectData }) => {
  // console.log(data);
  const [projectMenu, setprojectMenu] = useState("Dev");
  // console.log(projectMenu);

  let filteredData: PostData[] = [];
  if (projectMenu === "Dev") {
    filteredData = data.developerPosts;
  } else if (projectMenu === "Graphic Design") {
    filteredData = data.graphicDesigns;
  } else if (projectMenu === "Case Studies") {
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
          <li onClick={() => setprojectMenu("Dev")}>
            <a>Dev</a>
          </li>
          <li onClick={() => setprojectMenu("Graphic Design")}>
            <a>Graphic Design</a>
          </li>
          <li onClick={() => setprojectMenu("Case Studies")}>
            <a>Case Studies</a>
          </li>
        </ul>
      </div>

      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredData.map((post) =>
            post.projectInfo.images && post.projectInfo.images[0]?.url ? (
              <div
                key={post.id}
                className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden"
              >
                <Image
                  src={post.projectInfo.images[0].url}
                  // src={"https://picsum.photos/200/300"}
                  width={200}
                  height={200}
                  className="group-hover:opacity-75"
                  alt={post.id}
                />
              </div>
            ) : null
          )}
        </div>
      </div>
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
