import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown, ChevronUp, Calendar, ExternalLink, Github, User, Users, Briefcase } from "lucide-react";

type ProjectType = "personal" | "school" | "professional";

interface ProjectCardProps {
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

export function ProjectCard({
                              title,
                              shortDescription,
                              detailedDescription,
                              technologies,
                              date,
                              type,
                              image,
                              githubUrl,
                              liveUrl
                            }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getProjectTypeInfo = (projectType: ProjectType) => {
    switch (projectType) {
      case "personal":
        return { icon: User, label: "Persoonlijk Project", color: "text-primary" };
      case "school":
        return { icon: Users, label: "Schoolgroepsproject", color: "text-primary" };
      case "professional":
        return { icon: Briefcase, label: "Professioneel Project", color: "text-primary" };
      default:
        return { icon: User, label: "Project", color: "text-primary" };
    }
  };

  const { icon: TypeIcon, label: typeLabel, color: typeColor } = getProjectTypeInfo(type);

  return (
      <Card className="w-full transition-all duration-200 hover:shadow-md">

        <div className="flex flex-row items-start justify-between gap-6 p-6">
          {/* Left Column: Title, Date, Tags, and Short Description */}
          <div className="flex-1 space-y-3 min-w-0">
            <div className="space-y-2">
              <CardTitle className="text-primary">{title}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{date}</span>
                </div>
                <div className={`flex items-center gap-2 ${typeColor}`}>
                  <TypeIcon className="w-4 h-4" />
                  <span>{typeLabel}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                  <Badge
                      key={index}
                      variant="default"
                      className="text-primary text-xs"
                  >
                    {tech}
                  </Badge>
              ))}
            </div>
            <CardDescription className="text-base leading-relaxed pt-1">
              {shortDescription}
            </CardDescription>
          </div>

          {/* Right Column: Image */}
          <div className="w-60 h-48 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
            <img
                src={image || "https://via.placeholder.com/150/CCCCCC/FFFFFF?text=Project"}
                alt={`${title} afbeelding`}
                className="w-full h-full object-cover"
            />
          </div>
        </div>

        <CardContent className="space-y-4 pt-0 px-6 pb-6">
          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <CollapsibleTrigger asChild>
              <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between text-primary hover:bg-primary/5 hover:text-primary p-2"
              >
                <span>{isExpanded ? "Minder weergeven" : "Meer details weergeven"}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 pt-4">
              <div className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line border-t border-primary/10 pt-4">
                {detailedDescription}
              </div>
            </CollapsibleContent>
          </Collapsible>

          {(githubUrl || liveUrl) && (
              <div className="flex gap-3 pt-2">
                {githubUrl && (
                    <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/30 text-primary hover:bg-primary/5"
                        asChild
                    >
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                )}
                {liveUrl && (
                    <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/30 text-primary hover:bg-primary/5"
                        asChild
                    >
                      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                )}
              </div>
          )}
        </CardContent>
      </Card>
  );
}