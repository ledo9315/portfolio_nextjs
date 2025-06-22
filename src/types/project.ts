interface Project {
  slug: string;
  title: string;
  description: string;
  text: string;
  keywords: string;
  websiteUrl?: string;
  linkText: string;
  images: {
    thumbnail?: string;
    cover: string;
    frames: {
      src: string;
      alt: string;
    }[];
  };
  video?: {
    src: string;
    poster?: string;
    alt?: string;
  };
}

export default Project;
