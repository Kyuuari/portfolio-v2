import { NextPage } from "next";
import Head from "next/head";
import { HeroBanner } from "../components/hero-banner";
import { ProjectGallery } from "../components/projects-gallery";
import { HomeProps, ProjectData } from "../types/types";
import { GetStaticProps } from "next";
import client from "../apollo/apolloClient";
import { gql } from "@apollo/client";
import { Suspense } from "react";

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
        <Suspense
          fallback={
            <div className="h-screen w-screen animate-pulse rounded bg-black">
              Loading...
            </div>
          }
        >
          <section className="h-screen">
            <HeroBanner />
          </section>

          <section
            id="about"
            className="flex flex-col items-center justify-center self-center px-6"
          >
            <div className="">
              <h1 className="text-2xl font-bold">About Me 🌱</h1>
              <p className="max-w-[60ch]">
                Welcome to the page! I&apos;m Chester (@Kyuuari), and I&apos;m
                excited to share my passion for creativity and problem-solving
                with you.
              </p>

              <br />
              <div>
                <h1 className="text-lg font-bold">Why ❔</h1>
                <p className="max-w-[60ch]">
                  Design has always been a passion of mine, and as a web
                  developer, I&apos;ve been able to merge my technical skills
                  with my love for aesthetics.
                </p>
              </div>

              <br />
              <div>
                <h1 className="text-lg font-bold">How 🎯</h1>
                <p className="max-w-[60ch]">
                  Here, you&apos;ll find a diverse collection of projects that
                  highlight my work in:
                </p>
              </div>

              <br />
              <ul className="list-inside list-disc">
                <li>Graphic design</li>
                <li>3D modeling</li>
                <li>Web applications</li>
                <li>And more</li>
              </ul>
              <br />
              <p className="max-w-[60ch]">
                I&apos;m constantly pushing myself to improve and explore new
                techniques, and I&apos;d love to collaborate with you to bring
                your ideas to life.
              </p>
            </div>
          </section>

          <section className="h-auto w-screen pt-10">
            <div className="grid  justify-center">
              <div className="grid grid-cols-1 gap-28 md:grid-cols-2">
                <div>
                  <h1 className="text-lg font-bold">Services</h1>
                  <ul className="list-inside ">
                    <li>+ Frontend Development</li>
                    <li>+ Fullstack Development</li>
                    <li>+ Graphic Design</li>
                    <li>+ Wireframing</li>
                    <li>+ Prototyping</li>
                    <li>+ UI/UX Design</li>
                  </ul>
                </div>

                <div>
                  <h1 className="text-lg font-bold">Interests</h1>
                  <ul className="list-inside">
                    <li>+ Web/App Development</li>
                    <li>+ Game Development</li>
                    <li>+ Illustration</li>
                    <li>+ Motion/Graphic Design</li>
                    <li>+ Learning</li>
                  </ul>
                </div>

                <div>
                  <h1 className="text-lg font-bold">Developer Tools</h1>
                  <ul className="list-inside ">
                    <li>+ React.js</li>
                    <li>+ Next.js</li>
                    <li>+ Storybook</li>
                    <li>+ Node.js</li>
                    <li>+ Three.js</li>
                    <li>+ Git</li>
                    <li>+ TailwindCSS</li>
                  </ul>
                </div>

                <div>
                  <h1 className="text-lg font-bold">Design Tools</h1>
                  <ul className="list-inside">
                    <li>+ Figma</li>
                    <li>+ Adobe Illustrator</li>
                    <li>+ Adobe Photoshop</li>
                    <li>+ Blender</li>
                    <li>+ Affinity Suite</li>
                    <li>+ Procreate</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-10">
            <ProjectGallery data={data} />
          </section>
        </Suspense>
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
