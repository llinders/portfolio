import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface TechnologyFilterProps {
    availableTechnologies: string[];
    selectedTechnologies: string[];
    onToggleTechnology: (technology: string) => void;
    onClearAll: () => void;
}

export function TechnologyFilter({
                                     availableTechnologies,
                                     selectedTechnologies,
                                     onToggleTechnology,
                                     onClearAll
                                 }: TechnologyFilterProps) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-primary">Filter op Technologie</h3>
                {selectedTechnologies.length > 0 && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onClearAll}
                        className="bg-card text-muted-foreground hover:text-primary"
                    >
                        <X className="w-4 h-4 mr-1" />
                        Alles wissen
                    </Button>
                )}
            </div>

            <div className="flex flex-wrap gap-2">
                {availableTechnologies.map((tech) => {
                    const isSelected = selectedTechnologies.includes(tech);
                    return (
                        <Badge
                            key={tech}
                            variant={isSelected ? "default" : "secondary"}
                            className={`cursor-pointer transition-all duration-200 ${
                                isSelected
                                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                    : "bg-card border-[--portfolio-tech-border] text-primary hover:bg-primary/10"
                            }`}
                            onClick={() => onToggleTechnology(tech)}
                        >
                            {tech}
                        </Badge>
                    );
                })}
            </div>

            {selectedTechnologies.length > 0 && (
                <div className="text-sm text-muted-foreground">
                    Filteren op: {selectedTechnologies.join(", ")}
                </div>
            )}
        </div>
    );
}