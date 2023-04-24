import React from "react";
import type { ProjectInfo } from "../../types/types";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

interface Props {
  projectInfo: ProjectInfo;
  mdxSource: MDXRemoteSerializeResult;
}
const CasePage = ({ projectInfo, mdxSource }: Props) => {
  return (
    <section className="">
      {/* <ProjectDetails projectInfo={projectInfo} mdxSource={mdxSource} /> */}
    </section>
  );
};

export default CasePage;
