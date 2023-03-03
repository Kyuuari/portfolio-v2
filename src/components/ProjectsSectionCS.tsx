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
              Exciting new projects are currently in the works! While I'm
              experimenting and pushing my creativity, my latest work is not
              quite ready to be showcased. In the meantime, feel free to check
              out my previous projects on my{" "}
              <a className="text-red-600" href="https://github.com/kyuuari">
                Github
              </a>{" "}
              or my{" "}
              <a className="text-red-600" href="https://kyuuari.github.io/">
                Portfolio-v1
              </a>
              . Stay tuned for updates on what I'm working on next!
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSectionCS;
