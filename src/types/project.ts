interface Project {
  slug: string;
  title: string;
  description: string;
  text: string;
  keywords: string;
  websiteUrl: string;
  linkText: string;
  images: {
    thumbnail?: string;
    frames: {
      src: string;
      alt: string;
    }[];
  };
}

export default Project;
