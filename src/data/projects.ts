import Project from "@/types/project";

const projects: Project[] = [
  {
    slug: "angelas-dance-academy",
    title: "Angela's Dance Academy",
    description: "Visuelle Identität, Branding, Logotype, Webseite",
    text: "Im Rahmen dieses Projekts habe ich meine Fähigkeiten in HTML und CSS genutzt, um eine dynamische und ansprechende Webseite für Angela's Dance Academy zu entwickeln. Die Webseite ist darauf ausgelegt, die Begeisterung und das Talent für Tanz in einer einzigartigen Weise zu präsentieren.",
    keywords: "HTML, CSS, Responsive Design",
    websiteUrl: "https://www.angelasdanceacademy.com/",
    linkText: "Link zur Webseite",
    images: {
      thumbnail: "/img/project-angelas-dance-academy/thumbnail.webp",
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
    text: "Ein elegantes Webdesign für das Metropol Theater, das die gehobene Küche und das stilvolle Ambiente widerspiegelt. Das Design betont die kulinarische Exzellenz und schafft eine einladende Online-Präsenz.",
    keywords: "HTML, CSS, Kino Design",
    websiteUrl: "#",
    linkText: "Link zur Webseite",
    images: {
      thumbnail: "/img/project-metropol/Frame-1.webp",
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
