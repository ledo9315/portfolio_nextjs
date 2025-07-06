import Project from "@/types/project";

const projects: Project[] = [
  {
    slug: "taskify",
    title: "Taskify",
    description: "Web-App, Todo-App",
    text: `Taskify ist eine Todo-App zum Verwalten von Aufgaben. Entwickelt wurde die App mit Next.js.`,
    keywords: "Next.js, SQLite, Drizzle ORM, React Hook Form, TanStack Query",
    linkText: "Link zur Webseite",
    websiteUrl: "https://taskify.software/de/landing",
    images: {
      cover: "/img/project-taskify/Frame-7.jpeg",
      thumbnail: "/img/project-taskify/thumbnail.jpg",
      frames: [
        {
          src: "/img/project-taskify/Frame-3.jpeg",
          alt: "Taskify App Detailansicht einer Aufgabe.",
        },
        {
          src: "/img/project-taskify/Frame-4.jpeg",
          alt: "Taskify App Startbildschirm mit Aufgabenliste.",
        },
      ],
    },
  },
  {
    slug: "metropol",
    title: "Metropol Theater",
    description: "Webseite, Branding, Kino-Design",
    text: "Im Studium habe ich im Rahmen des Moduls «WWW-Programmierung» eine Fullstack-Webseite für das Metropol-Theater entwickelt. Die Webseite bietet einen Überblick über aktuelle und kommende Filme, Vorstellungszeiten sowie Informationen zum Kino selbst. Zudem verfügt sie über einen Dashboard-Bereich, der es ermöglicht, Filme zu verwalten und das Programm effizient zu aktualisieren.",
    keywords: "Kirby CMS",
    websiteUrl: "https://github.com/ledo9315/metropol_kirby",
    linkText: "Link zum GitHub Repository",
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
    slug: "popcorn-buddys",
    title: "Popcorn Buddys",
    description: "Spieleentwicklung, Level-Design, Game-Design",
    text: `Popcorn Buddies – Teamwork, Strategie und jede Menge knuspriger Spaß! 
In Popcorn Buddies wird das Ploppen von Maiskörnern zur spannenden Mission! 
Dieses einzigartige Tower-Defense-Spiel erfordert strategisches Denken und 
schnelle Reaktionen, um die perfekte Knusprigkeit zu garantieren. Doch Vorsicht: 
Wenn fünf ungeploppte Körner in die Packung gelangen, ist das Spiel vorbei! 
Das Geheimnis zum Erfolg liegt in der Zusammenarbeit: Der PC-Spieler platziert 
und verbessert verschiedene Türme – Mikrowelle, Ofen und Kühlschrank – und 
sammelt das auf der Map erscheinende Geld ein. Der VR-Spieler übernimmt die 
Feinarbeit, richtet die Türme aus und sorgt dafür, dass jedes Korn rechtzeitig ploppt.`,
    keywords: "Unity, C#",
    websiteUrl: "https://github.com/ledo9315/tower_buddys",
    linkText: "Link zum GitHub Repository",
    video: {
      src: "/video/project-video.mp4",
      alt: "Tower Buddys Gameplay Video",
      poster: "/img/project-tower-buddys/video-cover.png",
    },
    images: {
      cover: "/img/project-tower-buddys/thumbnail.webp",
      frames: [
        {
          src: "/img/project-tower-buddys/Frame-1.jpg",
          alt: "Tower Buddys Spielansicht mit strategischen Elementen.",
        },
        {
          src: "/img/project-tower-buddys/Frame-2.jpg",
          alt: "Tower Buddys Level-Design mit verschiedenen Türmen.",
        },
      ],
    },
  },

  {
    slug: "capture-the-campus",
    title: "Capture the Campus",
    description: "Android App, Gamification",
    text: `Capture the Campus ist eine Android-App für das Sammeln virtueller Punkte an verschiedenen Campus-Standorten. Die App nutzt GPS-Tracking und zeigt eine interaktive Campuskarte mit allen verfügbaren Sammelpunkten. Spieler können ihre Fortschritte verfolgen und sich in einer Highscore-Liste mit anderen messen. Entwickelt wurde die App mit Kotlin unter Verwendung der Android Location Services und Material Design.`,
    keywords: "Kotlin, Android, Geolocation, Material Design",
    linkText: "Link zum GitHub Repository",
    websiteUrl: "https://github.com/ledo9315/capture_the_campus",
    images: {
      cover: "/img/project-capture-the-campus/Frame-1.webp",
      frames: [
        {
          src: "/img/project-capture-the-campus/Frame-1.webp",
          alt: "Capture the Campus App Startbildschirm mit interaktiver Karte.",
        },
      ],
    },
  },
];

export default projects;
