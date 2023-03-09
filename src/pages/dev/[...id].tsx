import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { PostData, ProjectData } from "../../types/types";
import client from "../../lib/apolloClient";
import { gql } from "@apollo/client";
import Image from "next/image";

const DevPage = ({ data }: { data: ProjectData }) => {
  console.log(data.developerPosts[0]?.projectInfo.title);
  return (
    <section id="about" className="h-auto py-16">
      <div className="grid justify-center">
        <div className="">
          <h1 className="text-lg font-bold">
            {data.developerPosts[0]?.projectInfo.title}
          </h1>
          <h1 className="text-lg font-bold">
            {data.developerPosts[0]?.projectInfo.subtitle}
          </h1>
        </div>

        <div>
          <Image
            src={data.developerPosts[0]?.projectInfo.images[0]?.url ?? ""}
            width={200}
            height={200}
            loading="lazy"
            className="hover:opacity-75"
            alt={data.developerPosts[0]?.projectInfo.title ?? "Project"}
          />
        </div>

        <p className="max-w-[60ch]">
          Welcome to the page! I&apos;m Chester (@Kyuuari), and I&apos;m excited
          to share my passion for creativity and problem-solving with you.
          I&apos;ve always been interested in design, and as a web developer,
          I&apos;ve been able to combine my technical skills with my love of
          aesthetics. On this page, you&apos;ll find a variety of projects that
          showcase my work in graphic design, 3D modeling, web applications, and
          more. I&apos;m constantly pushing myself to improve and explore new
          techniques, and I&apos;d love to collaborate with you to bring your
          ideas to life.
        </p>
      </div>
    </section>
  );
};

export default DevPage;

export const getStaticPaths: GetStaticPaths = async () => {
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
      }
    `,
  });
  const paths = data.developerPosts.map((post) => ({
    params: { id: [post.id] },
  }));
  return { paths, fallback: false };
};

// interface prams {
//   params: { id: string[] };
// }

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id?.[0] ?? null;
  // console.log(id);
  if (!id) {
    return {
      notFound: true,
    };
  }
  const { data }: { data: ProjectData } = await client.query({
    query: gql`
      query GetPost($id: ID!) {
        developerPosts(where: { id: $id }) {
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
      }
    `,
    variables: { id },
  });
  return { props: { data } };
};
