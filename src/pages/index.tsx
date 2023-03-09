import { NextPage } from "next";
import Head from "next/head";
import { HeroSection } from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection, { getStaticProps } from "../components/ProjectsSection";

interface HomeProps {
  data: {
    developerPosts: {
      id: string;
      projectInfo: {
        id: string;
        title: string;
        subtitle: string;
        slug: string;
        images: {
          url: string;
        }[];
      };
    }[];
    caseStudies: {
      id: string;
      projectInfo: {
        id: string;
        title: string;
        subtitle: string;
        slug: string;
        images: {
          url: string;
        }[];
      };
    }[];
    graphicDesigns: {
      id: string;
      projectInfo: {
        id: string;
        title: string;
        subtitle: string;
        slug: string;
        images: {
          url: string;
        }[];
      };
    }[];
  };
}

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
      <main className="absolute top-0 z-[-1] w-full">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection data={data} />
        <div className="h-5 py-5" />
      </main>
    </>
  );
};

export default Home;

export { getStaticProps };
