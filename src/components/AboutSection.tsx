import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="h-auto">
      <div className="grid justify-center">
        <div className="">
          <h1 className="text-lg font-bold">About Me 🌱</h1>
          {/* <h1 className="text-lg font-bold">Chester Cari</h1> */}
        </div>

        <p className="max-w-[60ch]">
          Welcome to the page! I&apos;m Chester (@Kyuuari), and I&apos;m excited
          to share my passion for creativity and problem-solving with you.
        </p>
        <p className="max-w-[60ch]">
          I&apos;ve always been interested in design, and as a web developer,
          I&apos;ve been able to combine my technical skills with my love of
          aesthetics.
        </p>
        <p className="max-w-[60ch]">
          On this page, you&apos;ll find a variety of projects that showcase my
          work in:
        </p>
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
          techniques, and I&apos;d love to collaborate with you to bring your
          ideas to life.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
