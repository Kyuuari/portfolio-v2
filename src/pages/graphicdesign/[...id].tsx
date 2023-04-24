import { GetStaticPaths, GetStaticProps } from "next";
import React, { Suspense, lazy } from "react";
import { ProjectData, ProjectInfo } from "../../types/types";
import client from "../../apollo/apolloClient";
import { gql } from "@apollo/client";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
const ProjectDetails = lazy(() => import("../../components/project-details"));

interface Props {
  projectInfo: ProjectInfo;
  mdxSource: MDXRemoteSerializeResult;
}
const GraphicsPage = ({ projectInfo, mdxSource }: Props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectDetails projectInfo={projectInfo} mdxSource={mdxSource} />
    </Suspense>
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
  return { paths, fallback: true };
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
  return {
    props: {
      projectInfo,
      mdxSource,
    },
    revalidate: 10,
  };
};
