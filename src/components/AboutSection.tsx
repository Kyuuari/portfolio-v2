import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="h-auto">
      <div className="grid justify-center">
        <div className="">
          <h1 className="text-2xl font-bold">About Me 🌱</h1>
          {/* <h1 className="text-lg font-bold">Chester Cari</h1> */}
        </div>

        <p className="max-w-[60ch]">
          Welcome to the page! I&apos;m Chester (@Kyuuari), and I&apos;m excited
          to share my passion for creativity and problem-solving with you.
        </p>
        <br />
        <h1 className="text-lg font-bold">Why ❔</h1>
        <p className="max-w-[60ch]">
          Design has always been a passion of mine, and as a web developer,
          I&apos;ve been able to merge my technical skills with my love for
          aesthetics.
        </p>
        <br />
        <h1 className="text-lg font-bold">How 🎯</h1>
        <p className="max-w-[60ch]">
          Here, you&apos;ll find a diverse collection of projects that highlight
          my work in:
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
