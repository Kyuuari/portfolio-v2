import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { ProjectData } from "../../types/types";
import client from "../../lib/apolloClient";
import { gql } from "@apollo/client";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";

const DevPage = ({ data }: { data: ProjectData }) => {
  // console.log(data);
  const postdata = data.developerPosts[0]?.projectInfo;
  const raw = postdata?.content.raw;
  // const raw = postdata?.content.raw;
  console.log(raw);
  return (
    <section className="h-auto py-16">
      <div className="grid justify-center">
        <div className="">
          <h1 className="text-lg font-bold">{postdata?.title}</h1>
          <h2 className="font-bold">{postdata?.subtitle}</h2>
        </div>
        <div>
          <Image
            src={postdata?.images[0]?.url ?? ""}
            width={200}
            height={200}
            loading="lazy"
            className="hover:opacity-75"
            alt={data.developerPosts[0]?.projectInfo.title ?? "Project"}
          />
        </div>
        {raw ? (
          <RichText content={raw}></RichText>
        ) : (
          <>
            <h1>Empty</h1>
          </>
        )}

        {/* <p className="max-w-[60ch]">
          Welcome to the page! I&apos;m Chester (@Kyuuari), and I&apos;m excited
          to share my passion for creativity and problem-solving with you.
          I&apos;ve always been interested in design, and as a web developer,
          I&apos;ve been able to combine my technical skills with my love of
          aesthetics. On this page, you&apos;ll find a variety of projects that
          showcase my work in graphic design, 3D modeling, web applications, and
          more. I&apos;m constantly pushing myself to improve and explore new
          techniques, and I&apos;d love to collaborate with you to bring your
          ideas to life.
        </p> */}
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
          # projectInfo {
          #   ... on ProjectInfo {
          #     id
          #     title
          #     subtitle
          #     slug
          #     images {
          #       url
          #     }
          #     content{
          #       raw
          #     }
          #   }
          # }
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
              content {
                raw
              }
            }
          }
        }
      }
    `,
    variables: { id },
  });
  return { props: { data }, revalidate: 10 };
};
