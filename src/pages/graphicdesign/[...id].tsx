import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { ProjectData, ProjectInfo } from "../../types/types";
import client from "../../lib/apolloClient";
import { gql } from "@apollo/client";
// import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
// import { useMDXComponents } from "@mdx-js/react";
import ProjectDetails from "../../components/ProjectDetails";

interface Props {
  projectInfo: ProjectInfo;
  mdxSource: MDXRemoteSerializeResult;
}
const GraphicsPage = ({ projectInfo, mdxSource }: Props) => {
  // const mdxComponents = useMDXComponents();
  return (
    <section className="h-auto py-16">
      <ProjectDetails projectInfo={projectInfo} mdxSource={mdxSource} />
      {/* <div className="grid justify-center">
        <div className="">
          <h1 className="text-lg font-bold">{projectInfo.title}</h1>
          <h2 className="font-bold">{projectInfo.subtitle}</h2>
        </div>
        <div>
          <Image
            src={projectInfo.images[0]?.url ?? ""}
            width={200}
            height={200}
            loading="lazy"
            className="hover:opacity-75"
            alt={"Project Image"}
          />
        </div>

        <div className="wrapper max-w-[60ch]">
          <MDXRemote {...mdxSource} components={mdxComponents} />
        </div>
      </div> */}
    </section>
  );
};

export default GraphicsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data }: { data: ProjectData } = await client.query({
    query: gql`
      {
        graphicDesigns {
          id
        }
      }
    `,
  });
  const paths = data.graphicDesigns.map((post) => ({
    params: { id: [post.id] },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id?.[0];
  const { data }: { data: ProjectData } = await client.query({
    query: gql`
      query GetPost($id: ID!) {
        graphicDesigns(where: { id: $id }) {
          id
          projectInfo {
            ... on ProjectInfo {
              id
              title
              description
              platforms
              technologyUsed
              coverImage {
                url
              }
              images {
                url
              }
              links
            }
          }
        }
      }
    `,
    variables: { id },
  });
  const postdata = data.graphicDesigns[0]?.projectInfo?.links;
  const projectInfo = data.graphicDesigns[0]?.projectInfo;
  const mdxSource = await serialize(postdata ?? "");
  // console.log(mdxSource);
  return {
    props: {
      projectInfo,
      mdxSource,
    },
    revalidate: 10,
  };
};
