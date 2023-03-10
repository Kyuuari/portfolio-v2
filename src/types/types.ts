export interface ImageData {
  url: string;
}
export interface ProjectInfo {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  images: ImageData[];
  content: string;
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