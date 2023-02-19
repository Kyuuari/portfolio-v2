import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="h-auto w-screen">
      <div className="grid justify-center">
        <div className="">
          <h1 className="text-lg font-bold">About Me</h1>
          <h1 className="text-lg font-bold text-accent-content">
            Chester Cari
          </h1>
        </div>

        <p className="max-w-[60ch]">
          Welcome to the page! I&apos;m Chester (@Kyuuari), and I&apos;m
          exciteed to share my passion for creativity and problem-solving with
          you. I&apos;ve always been interested in design, and as a web
          developer, I&apos;ve been able to combine my technical skills with my
          love of aesthetics. On this page, you&apos;ll find a variety of
          projects that showcase my work in graphic design, 3D modeling, web
          applications, and more. I&apos;m constantly pushing myself to improve
          and explore new techniques, and I&apos;d love to collaborate with you
          to bring your ideas to life.
          {/* Welcome to the page! I'm Chester @Kyuuari, and I'm excited to share my
          passion for creativity and problem-solving with you. I've always been
          interested in design, and as a web developer, I've been able to
          combine my technical skills with my love of aesthetics. On this page,
          you'll find a variety of projects that showcase my work in graphic
          design, 3D modeling, web applications, and more. I'm constantly
          pushing myself to improve and explore new techniques, and I'd love to
          collaborate with you to bring your ideas to life. */}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;