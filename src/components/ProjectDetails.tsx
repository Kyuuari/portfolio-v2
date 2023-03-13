import React from "react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { useMDXComponents } from "@mdx-js/react";
import { ProjectData, ProjectInfo } from "../types/types";

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
        <h1 className="text-lg font-bold">{projectInfo.title}</h1>
        <h2 className="font-bold">{projectInfo.subtitle}</h2>
      </div>
      {/* <div className="relative my-16 block h-[25vh] w-auto">
        <Image
          src={projectInfo.images[0]?.url ?? ""}
          fill
          loading="lazy"
          className="hover:opacity-75"
          alt={"Project Image"}
          objectFit="contain"
        />
      </div> */}

      <div className="wrapper max-w-[60ch]">
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
