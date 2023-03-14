import { NextPage } from "next";
import Head from "next/head";
import { HeroSection } from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import { HomeProps, ProjectData } from "../types/types";
// import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import client from "../lib/apolloClient";
import { gql } from "@apollo/client";

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Kyuuari Project</title>
        <meta
          name="description"
          content="Chester Cari (@Kyuuari) - Exploring the intersection of design and technology with The Kyuuari Project, a collection of web applications, UI/UX, and digital art projects. This showcase combines my passion for design and technology into fun and creative works"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kyuuari Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />

        <div className="p-8">
          <AboutSection />
        </div>

        <div className="p-8">
          <ServicesSection />
        </div>

        <div className="min-h-screen p-8">
          <ProjectsSection data={data} />
        </div>
      </main>
    </>
  );
};

export default Home;

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
              coverImage {
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
              title
              coverImage {
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
              title
              coverImage {
                url
              }
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
