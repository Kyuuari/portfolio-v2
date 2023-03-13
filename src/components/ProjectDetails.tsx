import React from "react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { useMDXComponents } from "@mdx-js/react";
import { ProjectInfo } from "../types/types";

interface ProjectDetailsProps {
  projectInfo: ProjectInfo;
  mdxSource: any;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  projectInfo,
  mdxSource,
}) => {
  const mdxComponents = useMDXComponents();

  return (
    <div className="grid justify-center">
      <div className="">
        <h1 className="text-5xl font-bold">{projectInfo.title}</h1>
      </div>

      <div className="max-w-[60ch]">
        <MDXRemote {...mdxSource} components={mdxComponents} />
      </div>

      <div className="divider" />
      <div className="carousel-center carousel rounded-box max-w-md  space-x-4 p-4">
        {projectInfo.images.map((image, index) => (
          <div key={index} className="carousel-item">
            <Image
              src={image.url ?? ""}
              width={200}
              height={200}
              loading="lazy"
              className="object-cover hover:opacity-75"
              alt={"Project Image"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
