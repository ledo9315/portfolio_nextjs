// 📦 Externe Module importieren
import fs from "fs"; // Node.js Modul zum Lesen/Schreiben von Dateien
import path from "path"; // Node.js Modul für sicheres Arbeiten mit Dateipfaden
import matter from "gray-matter"; // Zum Extrahieren von Frontmatter (Metadaten) aus Markdown-Dateien
import { remark } from "remark"; // Markdown-Parser
import html from "remark-html"; // Plugin für remark – wandelt Markdown in HTML um
import Project from "@/types/project"; // TypeScript-Typdefinition für ein Projekt

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    // Absoluter Pfad zur Datei basierend auf dem Slug (z. B. "projekt1" → "projekt1.md")
    const fullPath = path.join(projectsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    // Dateiinhalt lesen
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Zerlegen in Metadaten (Frontmatter) und Inhalt
    const { data, content } = matter(fileContents);

    // Markdown → HTML konvertieren
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    // Einzelnes Projekt-Objekt zurückgeben
    return {
      slug,
      title: data.title || "Untitled",
      description: data.description || "",
      keywords: data.keywords || "",
      websiteUrl: data.websiteUrl || "#",
      linkText: data.linkText || "Link zur Webseite",
      text: contentHtml,
      images: {
        thumbnail: data.thumbnail || null,
        frames: data.frames || [],
      },
      video: data.video
        ? {
            src: data.video.src,
            poster: data.video.poster || null,
            title: data.video.title || null,
          }
        : null,
    } as Project;
  } catch (error) {
    console.error(`Fehler beim Laden von Projekt "${slug}":`, error);
    return null;
  }
}

export async function getAllProjects(): Promise<Project[]> {
  // Prüfen ob Verzeichnis existiert
  if (!fs.existsSync(projectsDirectory)) {
    console.warn("Projects directory does not exist:", projectsDirectory);
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);

  // Verarbeitet jede Markdown-Datei und wandelt sie in ein `Project`-Objekt um
  const allProjectsData = await Promise.all(
    fileNames
      // Nur Dateien mit ".md" berücksichtigen
      .filter((fileName) => fileName.endsWith(".md"))
      .map(async (fileName) => {
        // Entfernt die Dateiendung ".md", um den Slug zu erhalten (z. B. "projekt1")
        const slug = fileName.replace(/\.md$/, "");

        // Absoluter Pfad zur Datei (z. B. /users/.../src/content/projects/projekt1.md)
        const fullPath = path.join(projectsDirectory, fileName);

        try {
          // Liest den Inhalt der Datei als UTF-8-Text
          const fileContents = fs.readFileSync(fullPath, "utf8");

          // Zerlegt die Datei in `data` (Frontmatter) und `content` (Markdown-Inhalt)
          const { data, content } = matter(fileContents);

          // Wandelt den Markdown-Inhalt in HTML um
          const processedContent = await remark().use(html).process(content);
          const contentHtml = processedContent.toString();

          // Gibt das Projekt-Objekt zurück (passend zum `Project`-Typ)
          return {
            slug,
            title: data.title || "Untitled",
            description: data.description || "",
            keywords: data.keywords || "",
            websiteUrl: data.websiteUrl || "#",
            linkText: data.linkText || "Link zur Webseite",
            text: contentHtml, // der HTML-Inhalt des Markdown-Texts
            images: {
              thumbnail: data.thumbnail || null, // Pfad oder URL zum Vorschaubild
              frames: data.frames || [], // optionales Array mit weiteren Bildern
            },
            video: data.video
              ? {
                  src: data.video.src,
                  poster: data.video.poster || null,
                  title: data.video.title || null,
                }
              : null,
          } as Project;
        } catch (error) {
          console.error(`Error processing ${fileName}:`, error);
          return null;
        }
      })
  );

  // Null-Werte herausfiltern
  return allProjectsData.filter(
    (project): project is Project => project !== null
  );
}

// 🧾 Gibt alle Slugs (Dateinamen ohne ".md") der vorhandenen Projekte zurück
export async function getAllProjectSlugs(): Promise<string[]> {
  // Alle Dateinamen im Projektverzeichnis lesen
  const fileNames = fs.readdirSync(projectsDirectory);

  // Nur .md-Dateien → Endung entfernen → nur Slugs zurückgeben
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}
