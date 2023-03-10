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
const CasePage = ({ projectInfo, mdxSource }: Props) => {
  // const mdxComponents = useMDXComponents();
  return (
    <section className="h-auto py-16">
      <ProjectDetails projectInfo={projectInfo} mdxSource={mdxSource} />
    </section>
  );
};

export default CasePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data }: { data: ProjectData } = await client.query({
    query: gql`
      {
        caseStudies {
          id
        }
      }
    `,
  });
  const paths = data.caseStudies.map((post) => ({
    params: { id: [post.id] },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id?.[0];
  const { data }: { data: ProjectData } = await client.query({
    query: gql`
      query GetPost($id: ID!) {
        caseStudies(where: { id: $id }) {
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
              content
            }
          }
        }
      }
    `,
    variables: { id },
  });
  const postdata = data.caseStudies[0]?.projectInfo?.content;
  const projectInfo = data.caseStudies[0]?.projectInfo;
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
