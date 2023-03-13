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
import Layout from "../../components/Layout";
import { useInView } from "framer-motion";

interface Props {
  projectInfo: ProjectInfo;
  mdxSource: MDXRemoteSerializeResult;
}
const DevPage = ({ projectInfo, mdxSource }: Props) => {
  return (
    <Layout>
      <section className="h-auto py-16">
        <ProjectDetails projectInfo={projectInfo} mdxSource={mdxSource} />
      </section>
    </Layout>
  );
};

export default DevPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data }: { data: ProjectData } = await client.query({
    query: gql`
      {
        developerPosts {
          id
        }
      }
    `,
  });
  const paths = data.developerPosts.map((post) => ({
    params: { id: [post.id] },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id?.[0];
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
              content
            }
          }
        }
      }
    `,
    variables: { id },
  });
  const postdata = data.developerPosts[0]?.projectInfo?.content;
  const projectInfo = data.developerPosts[0]?.projectInfo;
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
