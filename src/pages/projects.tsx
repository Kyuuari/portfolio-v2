import React from "react";
import Layout from "../components/Layout";
import ProjectsSection, { getStaticProps } from "../components/ProjectsSection";
import { ProjectData } from "../types/types";

type Props = {
  data: ProjectData;
};

const projects = (props: Props) => {
  return (
    <Layout>
      <div className="">
        <ProjectsSection data={props.data} />
      </div>
    </Layout>
  );
};

export default projects;

export { getStaticProps };
