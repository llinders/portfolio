import { ProjectCard } from "./ProjectCard";
import type { Project } from "../data/projects";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="flex-1 flex flex-col items-center space-y-4">
      <div className="grid gap-8 max-w-4xl w-full">
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}