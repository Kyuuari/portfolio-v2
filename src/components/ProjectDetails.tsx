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
  //   console.log(projectInfo.platforms);

  return (
    <>
      <section className="sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-start  sm:justify-center">
          <div className="min-h-32 relative aspect-square h-auto sm:h-56 sm:w-56">
            <Image
              src={projectInfo.coverImage.url ?? ""}
              fill
              className="object-cover sm:rounded-full"
              alt={"Project Image"}
            />
          </div>

          <div className=" mx-8 mb-8 mt-8 flex flex-col flex-wrap gap-4 sm:mt-0">
            <>
              <h1 className="max-w-[20ch] text-5xl font-bold">
                {projectInfo.title}
              </h1>
              <p className="max-w-[60ch]">{projectInfo.description}</p>
            </>
            <div>
              <h3 className="font-bold">Platforms</h3>
              <div className="flex flex-wrap gap-4">
                {projectInfo.platforms.map((platform, index) => (
                  <p key={index} className="">
                    {platform}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold">Technologies Used</h3>
              <div className="flex flex-wrap gap-4">
                {projectInfo.technologyUsed.map((platform, index) => (
                  <p key={index} className="">
                    {platform}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex max-w-[60ch] flex-wrap gap-4">
              <MDXRemote
                className={""}
                {...mdxSource}
                components={mdxComponents}
              />
            </div>
          </div>
        </div>

        {/* <div className="rounded-box max-w-md">
          {projectInfo?.images.map((image, index) => (
            <div key={index} className="relative aspect-video h-[20em]">
              <Image
                src={image.url ?? ""}
                fill
                className="object-cover"
                alt={"Project Image"}
              />
            </div>
          ))}
        </div> */}
        <div className="flex flex-col flex-wrap items-center gap-8">
          {projectInfo?.images.map((image, index) => (
            <div key={index} className="relative aspect-video w-full">
              <Image
                src={image.url ?? ""}
                fill
                className="object-contain"
                alt={"Project Image"}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
