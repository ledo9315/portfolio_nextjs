import Project from "@/types/project";

const projects: Project[] = [
  {
    slug: "angelas-dance-academy",
    title: "Angela's Dance Academy",
    description: "Visuelle Identität, Branding, Logotype, Webseite",
    text: "Im Rahmen dieses Projekts habe ich meine Fähigkeiten in HTML und CSS genutzt, um eine dynamische und ansprechende Webseite für Angela's Dance Academy zu entwickeln. Die Webseite ist darauf ausgelegt, die Begeisterung und das Talent für Tanz in einer einzigartigen Weise zu präsentieren.",
    keywords: "HTML, SCSS",
    websiteUrl: "https://www.angelasdanceacademy.com/",
    linkText: "Link zur Webseite",
    images: {
      thumbnail: "/img/project-angelas-dance-academy/thumbnail.webp",
      cover: "/img/project-angelas-dance-academy/Frame-1.webp",
      frames: [
        {
          src: "/img/project-angelas-dance-academy/Frame-1.webp",
          alt: "GIF der Angela's Dance Academy-Website, das die Seite von oben nach unten scrollt und verschiedene Abschnitte zeigt.",
        },
        {
          src: "/img/project-angelas-dance-academy/Frame-2.webp",
          alt: "Logo der Angela's Dance Academy mit einem stilisierten Buchstaben 'A' und dem Text 'Angela's Dance Academy' daneben.",
        },
        {
          src: "/img/project-angelas-dance-academy/Frame-3.webp",
          alt: "Weitere Ansicht der Angela's Dance Academy Website",
        },
        {
          src: "/img/project-angelas-dance-academy/Frame-4.webp",
          alt: "Detailansicht der Angela's Dance Academy Website",
        },
      ],
    },
  },

  {
    slug: "metropol",
    title: "Metropol Theater",
    description: "Webseite, Branding, Kino-Design",
    text: "Im Studium habe ich im Rahmen des Moduls «WWW-Programmierung» eine Fullstack-Webseite für das Metropol-Theater entwickelt. Die Webseite bietet einen Überblick über aktuelle und kommende Filme, Vorstellungszeiten sowie Informationen zum Kino selbst. Zudem verfügt sie über einen Dashboard-Bereich, der es ermöglicht, Filme zu verwalten und das Programm effizient zu aktualisieren.",
    keywords: "Deno, Oak, SQLite, Nunjucks",
    websiteUrl: "#",
    linkText: "Link zur Webseite",
    images: {
      thumbnail: "/img/project-metropol/thumbnail.webp",
      cover: "/img/project-metropol/thumbnail.webp",
      frames: [
        {
          src: "/img/project-metropol/Frame-2.webp",
          alt: "Metropol Theater Homepage",
        },
        {
          src: "/img/project-metropol/Frame-3.webp",
          alt: "Menü Sektion des Metropol Theaters",
        },
        {
          src: "/img/project-metropol/Frame-4.webp",
          alt: "Über uns Bereich der Metropol Website",
        },
        {
          src: "/img/project-metropol/Frame-5.webp",
          alt: "Über uns Bereich der Metropol Website",
        },
      ],
    },
  },
];

export default projects;
