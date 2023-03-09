import React, { useState } from "react";
import client from "../lib/apolloClient";
import { GetStaticProps } from "next";
import { gql } from "@apollo/client";
import Image from "next/image";

// interface ProjectData {
//   developerPosts: {
//     id: string;
//     projectInfo: {
//       id: string;
//       title: string;
//       subtitle: string;
//       slug: string;
//       images: {
//         url: string;
//       }[];
//     };
//   }[];
//   caseStudies: {
//     id: string;
//     projectInfo: {
//       id: string;
//       title: string;
//       subtitle: string;
//       slug: string;
//       images: {
//         url: string;
//       }[];
//     };
//   }[];
//   graphicDesigns: {
//     id: string;
//     projectInfo: {
//       id: string;
//       title: string;
//       subtitle: string;
//       slug: string;
//       images: {
//         url: string;
//       }[];
//     };
//   }[];
// }

interface ImageData {
  url: string;
}

interface ProjectInfo {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  images: ImageData[];
}

interface PostData {
  id: string;
  projectInfo: ProjectInfo;
}

interface ProjectData {
  developerPosts: PostData[];
  caseStudies: PostData[];
  graphicDesigns: PostData[];
}

const ProjectsSection = ({ data }: { data: ProjectData }) => {
  console.log(data);
  const [projectMenu, setprojectMenu] = useState("Dev");
  // console.log(projectMenu);
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

      {projectMenu === "Dev" && (
        <div className="w-fill justify-center">
          <div className="mx-auto columns-1 gap-3 space-y-3 bg-red-400 pb-28 sm:columns-2 md:columns-3 lg:columns-4">
            {data.developerPosts.map((post) => (
              <div key={post.id} className="break-inside-avoid">
                {post.projectInfo.images && post.projectInfo.images[0]?.url && (
                  <img src={post.projectInfo.images[0].url} alt={post.id} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {projectMenu === "Graphic Design" && (
        <div className="w-fill justify-center">
          <div className="mx-auto columns-1 gap-3 space-y-3 bg-green-400 pb-28 sm:columns-2 md:columns-3 lg:columns-4"></div>
        </div>
      )}

      {projectMenu === "Case Studies" && (
        <div className="w-fill justify-center">
          <div className="mx-auto columns-1 gap-3 space-y-3 bg-blue-400 pb-28 sm:columns-2 md:columns-3 lg:columns-4"></div>
        </div>
      )}
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
