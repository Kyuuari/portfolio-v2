import { RichTextContent } from '@graphcms/rich-text-types';

export interface ImageData {
  url: string;
}

import { ElementNode } from '@graphcms/rich-text-types';

type Content = {
    raw: RichTextContent;
};

export interface ProjectInfo {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  images: ImageData[];
  content: Content; 
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