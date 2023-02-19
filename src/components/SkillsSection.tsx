import React from "react";

const SkillsSection = () => {
  return (
    <section className="w-screen">
      <div className="grid justify-center">
        <div className="grid grid-cols-1 gap-28 md:grid-cols-2">
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
  );
};

export default SkillsSection;
