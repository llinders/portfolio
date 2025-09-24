import { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";
import { TechnologyFilter } from "./components/TechnologyFilter";

type ProjectType = "personal" | "school" | "professional";

interface Project {
  title: string;
  shortDescription: string;
  detailedDescription: string;
  technologies: string[];
  date: string;
  type: ProjectType;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "PolyView",
    shortDescription: "Een AI-gestuurde onderzoekstool die diverse perspectieven over een bepaald onderwerp vindt om gebruikers een genuanceerd en holistisch beeld te geven.",
    detailedDescription: `PolyView is een AI-gestuurde onderzoekstool die diverse perspectieven over een bepaald onderwerp vindt om gebruikers een genuanceerd en holistisch beeld te geven. De applicatie analyseert nieuws-onderwerpen, identificeert verschillende standpunten, verzamelt ondersteunende argumenten en feiten, en presenteert een samengevatte analyse.

Het systeem bestaat uit drie hoofdonderdelen:
1.  Frontend (React): Communiceert met de backend via een REST API om analyses te starten en gebruikt een WebSocket voor real-time voortgangsupdates.
2.  Backend (FastAPI): Biedt een REST API en een WebSocket aan voor de frontend.
3.  AI Core (LangGraph): Het "brein" van de applicatie. Het bevat een autonome zoekagent die informatie van het web verzamelt en filtert. Een stateful grafiek orkestreert taken zoals het identificeren, clusteren en samenvatten van perspectieven.`,
    technologies: ["React", "TypeScript", "Python", "FastAPI", "LangGraph", "Vite"],
    date: "Jun 2025 - Sep 2025",
    type: "personal",
    image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODcxNTU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    githubUrl: "https://github.com/llinders/PolyView",
  },
];

export default function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  // Extract all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on selected technologies
  const filteredProjects = useMemo(() => {
    if (selectedTechnologies.length === 0) {
      return projects;
    }
    return projects.filter(project =>
        selectedTechnologies.some(tech => project.technologies.includes(tech))
    );
  }, [selectedTechnologies]);

  const handleToggleTechnology = (technology: string) => {
    setSelectedTechnologies(prev =>
        prev.includes(technology)
            ? prev.filter(t => t !== technology)
            : [...prev, technology]
    );
  };

  const handleClearAllFilters = () => {
    setSelectedTechnologies([]);
  };

  return (
      <div className="min-h-screen bg-background">
        <Header />

        <main className="max-w-4xl mx-auto px-6 py-12">
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-primary">Uitgelichte Projecten</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
              </p>
            </div>

            {/* Technology Filter */}
            {/*<TechnologyFilter*/}
            {/*    availableTechnologies={allTechnologies}*/}
            {/*    selectedTechnologies={selectedTechnologies}*/}
            {/*    onToggleTechnology={handleToggleTechnology}*/}
            {/*    onClearAll={handleClearAllFilters}*/}
            {/*/>*/}

            {/* Projects Results */}
            <div className="space-y-4">
              {selectedTechnologies.length > 0 && (
                  <div className="text-center text-muted-foreground">
                    Toont {filteredProjects.length} van de {projects.length} projecten
                  </div>
              )}

              <div className="grid gap-8">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        shortDescription={project.shortDescription}
                        detailedDescription={project.detailedDescription}
                        technologies={project.technologies}
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
                    <p className="text-lg">Geen projecten gevonden met de geselecteerde technologieën.</p>
                    <p className="text-sm mt-2">Probeer andere technologieën te selecteren of wis alle filters.</p>
                  </div>
              )}
            </div>
          </section>

          <footer className="mt-16 pt-8 border-t border-primary/20 text-center text-muted-foreground">
            <p>&copy; 2025 Luc Linders. Gemaakt met React en TypeScript.</p>
          </footer>
        </main>
      </div>
  );
}