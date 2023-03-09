import React from "react";
import client from "../lib/apolloClient";
import { GetStaticProps } from "next";
import { gql } from "@apollo/client";

interface ProjectData {
  developerPosts: {
    id: string;
  }[];
}

const ProjectsSection = ({ data }: { data: ProjectData }) => {
  console.log(data);
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
          <li>
            <a>Dev</a>
          </li>
          <li>
            <a>Graphic Design</a>
          </li>
          <li>
            <a>Case Studies</a>
          </li>
        </ul>
      </div>

      <div className="w-fill justify-center">
        <div className="mx-auto columns-1 gap-3 space-y-3 bg-red-400 pb-28 sm:columns-2 md:columns-3 lg:columns-4">
          {/* {data.developerPosts.map((post) => (
              <div key={post.id} className="card-body">
                {post.id}
              </div>
            ))} */}
          <div className="break-inside-avoid bg-gray-200">Post Name</div>
          <div className="break-inside-avoid bg-gray-200">Post Name</div>
          <div className="break-inside-avoid bg-gray-200">Post Name</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      {
        developerPosts {
          id
          projectInfo {
            ... on ProjectInfo {
              id
              title
              subtitle
            }
          }
        }
        caseStudies {
          id
        }
        graphicDesigns {
          id
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
