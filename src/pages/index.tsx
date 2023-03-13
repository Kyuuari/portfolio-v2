import { NextPage } from "next";
import Head from "next/head";
import { HeroSection } from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
// import ProjectsSection, { getStaticProps } from "../components/ProjectsSection";
import { HomeProps } from "../types/types";
import Layout from "../components/Layout";

const Home: NextPage<HomeProps> = () => {
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
      <Layout>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        {/* <ProjectsSection data={data} /> */}
        {/* <div className="h-5 py-5" /> */}
      </Layout>
    </>
  );
};

export default Home;

// export { getStaticProps };
