export interface ImageData {
  url: string;
}
export interface ProjectInfo {
  id: string;
  title: string;
  coverImage: ImageData;
  description: string;
  images: ImageData[];
  links: string;
  platforms: string[];
  technologyUsed: string[];
}

export interface PostData {
  id: string;
  projectInfo: ProjectInfo;
}

export interface ProjectData {
  developerPosts: PostData[];
  caseStudies: PostData[];
  graphicDesigns: PostData[];
}

export interface HomeProps {
    data: ProjectData;
}