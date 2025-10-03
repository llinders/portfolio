import {useMemo, useState} from "react";
import {Header} from "./components/Header";
import {ProjectCard} from "./components/ProjectCard";
import {TechnologyFilter} from "./components/TechnologyFilter";
import {Footer} from "./components/Footer";
import {type Project, projects} from "./data/projects.ts";


export default function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  const allTechnologies: string[] = useMemo((): string[] => {
    const techCounts: { [key: string]: number } = {};
    projects.forEach(project => {
      // Weighed ordering so that more familiar technologies end up higher in the list
      project.mainTechnologies.forEach(tech => {
        techCounts[tech] = (techCounts[tech] || 0) + 2.5;
      });
      project.secondaryTechnologies.forEach(tech => {
        techCounts[tech] = (techCounts[tech] || 0) + 1;
      });
    });

    return Object.keys(techCounts).sort((a: string, b: string): number => techCounts[b] - techCounts[a]);
  }, []);

  // Filter projects based on selected technologies
  const filteredProjects: Project[] = useMemo((): Project[] => {
    if (selectedTechnologies.length === 0) {
      return projects;
    }
    return projects.filter(project =>
      selectedTechnologies.some(tech => project.mainTechnologies.includes(tech) || project.secondaryTechnologies.includes(tech))
    );
  }, [selectedTechnologies]);

  const handleToggleTechnology = (technology: string): void => {
    setSelectedTechnologies(prev =>
      prev.includes(technology)
        ? prev.filter(t => t !== technology)
        : [...prev, technology]
    );
  };

  const handleClearAllFilters = (): void => {
    setSelectedTechnologies([]);
  };

  return (
    <div className="min-h-screen">
      <Header/>

      <main className="w-full px-6 md:px-18 py-12">
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-primary">Uitgelichte Projecten</h2>
            <p className="text-destructive/80 max-w-2xl mx-auto">
              DISCLAIMER: Portfolio is nog in ontwikkeling en nog niet volledig.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-col w-full md:w-48 shrink-0">
              <TechnologyFilter
                availableTechnologies={allTechnologies}
                selectedTechnologies={selectedTechnologies}
                onToggleTechnology={handleToggleTechnology}
                onClearAll={handleClearAllFilters}
              />
              {selectedTechnologies.length > 0 && (
                <div className="text-center text-text-muted">
                  Toont {filteredProjects.length} van de {projects.length} projecten
                </div>
              )}
            </div>

            {/* Projects Results */}
            <div className="flex-1 flex flex-col items-center space-y-4">


              <div className="grid gap-8 max-w-4xl w-full">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    title={project.title}
                    shortDescription={project.shortDescription}
                    detailedDescription={project.detailedDescription}
                    mainTechnologies={project.mainTechnologies}
                    secondaryTechnologies={project.secondaryTechnologies}
                    date={project.date}
                    type={project.type}
                    image={project.image}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                  />
                ))}
              </div>

              {filteredProjects.length === 0 && selectedTechnologies.length > 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  <p className="text-lg">Geen projecten gevonden met de geselecteerde
                    technologieën.</p>
                  <p className="text-sm mt-2">Probeer andere technologieën te selecteren of wis alle
                    filters.</p>
                </div>
              )}
            </div>
          </div>
        </section>
        <Footer/>
      </main>
    </div>
  );
}