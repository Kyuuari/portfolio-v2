import { type NextPage } from "next";
import Head from "next/head";
import { HeroSection } from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
// import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
// import ProjectsSection from "../components/ProjectsSection";
import ProjectsSectionCS from "../components/ProjectsSectionCS";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kyuuari Project</title>
        <meta
          name="description"
          content="Chester Cari (@Kyuuari) - Exploring the intersection of design and technology with The Kyuuari Project, a collection of web applications, UI/UX, and digital art projects. This showcase combines my passion for design and technology into fun and creative works"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="absolute top-0 z-[-1] w-full">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        {/* <SkillsSection /> */}
        <ProjectsSectionCS />
        <div className="h-5 py-5" />
        {/* <div className="h-screen w-screen ">Hellow World 2</div> */}
      </main>
    </>
  );
};

export default Home;
