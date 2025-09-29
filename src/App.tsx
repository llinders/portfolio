import {useMemo, useState} from "react";
import {Header} from "./components/Header";
import {ProjectCard} from "./components/ProjectCard";
import {TechnologyFilter} from "./components/TechnologyFilter";
import {Footer} from "./components/Footer";

type ProjectType = "personal" | "school" | "professional";

interface Project {
  title: string;
  shortDescription: string;
  detailedDescription: string;
  mainTechnologies: string[];
  secondaryTechnologies: string[];
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
3.  AI Core (LangGraph): Het "brein" van de applicatie. Het bevat een autonome zoekagent die informatie van het web verzamelt en filtert. In een stateful graph worden taken zoals het identificeren, clusteren en samenvatten van perspectieven georkestreert.`,
    mainTechnologies: ["Python", "LangChain", "LangGraph"],
    secondaryTechnologies: ["FastAPI", "React", "TypeScript", "Vite"],
    date: "Jun 2025 - Sep 2025",
    type: "personal",
    image: "./polyview.webp",
    githubUrl: "https://github.com/llinders/PolyView",
  },
  {
    title: "",
    shortDescription: "",
    detailedDescription: "",
    mainTechnologies: [],
    secondaryTechnologies: [],
    date: "",
    type: "personal"
  }
];


export default function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.mainTechnologies.forEach(tech => techSet.add(tech));
      project.secondaryTechnologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on selected technologies
  const filteredProjects = useMemo(() => {
    if (selectedTechnologies.length === 0) {
      return projects;
    }
    return projects.filter(project =>
      selectedTechnologies.some(tech => project.mainTechnologies.includes(tech) || project.secondaryTechnologies.includes(tech))
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
    <div className="min-h-screen">
      <Header/>

      <main className="w-full px-18 py-12">
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-primary">Uitgelichte Projecten</h2>
            <p className="text-destructive/80 max-w-2xl mx-auto">
              DISCLAIMER: Portfolio is nog in ontwikkeling en nog niet volledig.
            </p>
          </div>

          <div className="flex flex-row gap-8">
            <div className="flex-col w-48 shrink-0">
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