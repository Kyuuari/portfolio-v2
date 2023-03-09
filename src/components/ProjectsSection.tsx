import React, { useState } from "react";
import client from "../lib/apolloClient";
import { GetStaticProps } from "next";
import { gql } from "@apollo/client";
import Image from "next/image";
import { PostData, ProjectData } from "../types/types";

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

      <div className="mx-auto min-h-[75vh] max-w-2xl py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-2 gap-x-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredData.map((post) =>
              post.projectInfo.images && post.projectInfo.images[0]?.url ? (
                <a
                  key={post.id}
                  className="grid break-inside-avoid-page place-items-center overflow-hidden"
                  href={`/${projectMenu}/${post.id}`}
                >
                  <Image
                    src={post.projectInfo.images[0].url}
                    width={200}
                    height={200}
                    loading="lazy"
                    className="hover:opacity-75"
                    alt={post.id}
                  />
                  {/* <div className="bg-red-300">Project Name</div> */}
                </a>
              ) : null
            )}
          </div>
        ) : (
          <div className="place-items-center">
            <h1 className="text-2xl font-bold">Coming Soon</h1>
            <p className="max-w-[60ch]">
              Exciting new projects are currently in the works! While I&apos;m
              experimenting and pushing my creativity, my latest work is not
              quite ready to be showcased. In the meantime, feel free to check
              out my previous projects on my{" "}
              <a className="text-red-600" href="https://github.com/kyuuari">
                Github
              </a>{" "}
              or my{" "}
              <a className="text-red-600" href="https://kyuuari.github.io/">
                Portfolio-v1
              </a>
              . Stay tuned for updates on what I&apos;m working on next!
            </p>
          </div>
        )}
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
