interface Project {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  websiteUrl: string;
  linkText: string;
  text: string;
  images: {
    thumbnail: string | null;
    frames: Array<{
      src: string;
      alt: string;
      title?: string;
    }>;
  };
  video?: {
    src: string;
    poster?: string;
    title?: string;
  } | null;
}

export default Project;
