import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PostData } from "../types/types";

interface Props {
  filteredData: PostData[];
  projectMenu: string;
}

const ProjectGrid = ({ filteredData, projectMenu }: Props) => {
  return (
    <div className="mx-auto grid min-h-[75vh] max-w-2xl place-items-center py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 gap-y-2 gap-x-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredData.map((post) =>
            post.projectInfo.images && post.projectInfo.images[0]?.url ? (
              <Link
                key={post.id}
                className=" relative block h-[250px] w-[250px] break-inside-avoid overflow-hidden"
                href={`/${projectMenu}/${post.id}`}
              >
                <Image
                  src={post.projectInfo.images[0].url}
                  fill
                  loading="lazy"
                  className="object-contain hover:opacity-75"
                  alt={post.id}
                />
              </Link>
            ) : null
          )}
        </div>
      ) : (
        <div className="grid place-items-center text-center">
          <h1 className="text-2xl font-bold">Coming Soon</h1>
          <p className="max-w-[60ch]">
            Exciting new projects are currently in the works! While I&apos;m
            experimenting and pushing my creativity, my latest work is not quite
            ready to be showcased. In the meantime, feel free to check out my
            previous projects on my{" "}
            <a className="text-red-600" href="https://github.com/kyuuari">
              Github
            </a>{" "}
            or my{" "}
            <a className="text-red-600" href="https://kyuuari.github.io/">
              Portfolio-v1
            </a>
            . Stay tuned for updates on what I&apos;m working on next!
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
