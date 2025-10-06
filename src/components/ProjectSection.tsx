import { ProjectList } from "./ProjectList";
import { EmptyState } from "./EmptyState.tsx";
import { ProjectFilterPanel } from "./ProjectFilterPanel";
import { useProjectFilter } from "../hooks/useProjectFilter";

export function ProjectSection() {
  const {
    allTechnologies,
    selectedTechnologies,
    filteredProjects,
    toggleTechnology,
    clearAll,
  } = useProjectFilter();

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-primary">Uitgelichte Projecten</h2>
        <p className="text-destructive/80 max-w-2xl mx-auto">
          DISCLAIMER: Portfolio is nog in ontwikkeling en nog niet volledig.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <ProjectFilterPanel
          availableTechnologies={allTechnologies}
          selectedTechnologies={selectedTechnologies}
          onToggle={toggleTechnology}
          onClear={clearAll}
          total={filteredProjects.length}
          totalAll={filteredProjects.length}
        />

        {filteredProjects.length > 0 ? (
          <ProjectList projects={filteredProjects} />
        ) : selectedTechnologies.length > 0 ? (
          <EmptyState />
        ) : null}
      </div>
    </section>
  );
}
