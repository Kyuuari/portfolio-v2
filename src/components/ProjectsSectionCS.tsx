import React from "react";

const ProjectsSectionCS = () => {
  return (
    <section id="projects" className="h-auto">
      <div className="grid justify-center">
        <div className="place-items-center">
          {/* <div className="place-content-start"> */}
          <h1 className="text-lg font-bold">Projects</h1>
          <div className="place-items-center">
            <h1 className="text-2xl font-bold">Coming Soon</h1>
            <p className="max-w-[60ch]">
              Sorry, currently working on new projects and experimenting, In the
              mean time please feel free to check out my previous projects from{" "}
              <a className="text-red-600" href="https://github.com/kyuuari">
                Github
              </a>{" "}
              or my{" "}
              <a className="text-red-600" href="https://kyuuari.github.io/">
                Portfolio-v1
              </a>
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSectionCS;
