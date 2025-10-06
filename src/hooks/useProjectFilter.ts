import { useMemo, useState } from "react";
import { projects, type Project } from "../data/projects";

export function useProjectFilter() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  const allTechnologies = useMemo(() => {
    const techCounts: Record<string, number> = {};
    projects.forEach(project => {
      // Weighed ordering so that more familiar technologies end up higher in the list
      project.mainTechnologies.forEach(tech => {
        techCounts[tech] = (techCounts[tech] || 0) + 2.5;
      });
      project.secondaryTechnologies.forEach(tech => {
        techCounts[tech] = (techCounts[tech] || 0) + 1;
      });
    });
    return Object.keys(techCounts).sort((a, b) => techCounts[b] - techCounts[a]);
  }, []);

  const filteredProjects: Project[] = useMemo(() => {
    if (selectedTechnologies.length === 0) return projects;
    return projects.filter(project =>
      selectedTechnologies.some(
        tech =>
          project.mainTechnologies.includes(tech) ||
          project.secondaryTechnologies.includes(tech)
      )
    );
  }, [selectedTechnologies]);

  const toggleTechnology = (technology: string) => {
    setSelectedTechnologies(prev =>
      prev.includes(technology)
        ? prev.filter(t => t !== technology)
        : [...prev, technology]
    );
  };

  const clearAll = () => setSelectedTechnologies([]);

  return {
    allTechnologies,
    selectedTechnologies,
    filteredProjects,
    toggleTechnology,
    clearAll,
  };
}
