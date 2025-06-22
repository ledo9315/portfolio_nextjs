import { Technology } from "@/types/technology";

interface TechCategoryProps {
  title: string;
  icon: React.ReactNode;
  technologies: Technology[];
}

export function TechCategory({ title, icon, technologies }: TechCategoryProps) {
  const getTechItemStyle = (type: Technology["type"]) => {
    switch (type) {
      case "expert":
        return {
          background:
            "linear-gradient(135deg, rgba(144, 212, 145, 0.2), rgba(161, 150, 223, 0.2))",
          color: "white",
          borderColor: "rgba(144, 212, 145, 0.4)",
          levelColor: "#a196df",
        };
      case "advanced":
        return {
          background: "rgba(144, 212, 145, 0.1)",
          color: "rgba(255, 255, 255, 0.9)",
          borderColor: "rgba(144, 212, 145, 0.2)",
          levelColor: "rgba(144, 212, 145, 0.8)",
        };
      case "intermediate":
        return {
          background: "rgba(255, 255, 255, 0.05)",
          color: "rgba(255, 255, 255, 0.8)",
          borderColor: "rgba(255, 255, 255, 0.15)",
          levelColor: "rgba(255, 255, 255, 0.6)",
        };
    }
  };

  return (
    <div className="rounded border border-white/20 bg-white/3 relative overflow-visible p-8 md:p-12">
      <div className="category-header flex items-center mb-8">
        <div className="text-purple category-icon flex items-center justify-center w-12 h-12 flex-shrink-0 mr-1">
          {icon}
        </div>
        <h3 className="category-title text-xl md:text-2xl font-bold m-0 tracking-tight overflow-hidden text-ellipsis">
          {title}
        </h3>
      </div>

      <div className="tech-grid flex flex-col gap-3">
        {technologies.map((tech) => {
          const styles = getTechItemStyle(tech.type);
          return (
            <div
              key={tech.name}
              className="tech-item flex justify-between items-center px-5 py-4 rounded border gap-4 min-h-14"
              style={{
                background: styles.background,
                color: styles.color,
                borderColor: styles.borderColor,
              }}
            >
              <span className="tech-name font-semibold text-sm md:text-base flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                {tech.name}
              </span>
              <span
                className="tech-level text-xs font-medium uppercase tracking-wider opacity-80 flex-shrink-0 whitespace-nowrap"
                style={{
                  color: styles.levelColor,
                }}
              >
                {tech.level}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
