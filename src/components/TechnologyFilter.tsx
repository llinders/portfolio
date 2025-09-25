import { Badge } from "./ui/badge";

interface TechnologyFilterProps {
    availableTechnologies: string[];
    selectedTechnologies: string[];
    onToggleTechnology: (technology: string) => void;
    onClearAll: () => void;
}

export function TechnologyFilter({
                                     availableTechnologies,
                                     selectedTechnologies,
                                     onToggleTechnology
                                 }: TechnologyFilterProps) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-primary">Filter op Technologie</h3>
                {/*{selectedTechnologies.length > 0 && (*/}
                {/*    <Button*/}
                {/*        variant="ghost"*/}
                {/*        size="sm"*/}
                {/*        onClick={onClearAll}*/}
                {/*        className="bg-card text-muted-foreground hover:text-primary hover:bg-primary/10"*/}
                {/*    >*/}
                {/*        <X className="w-4 h-4 mr-1" />*/}
                {/*        Alles wissen*/}
                {/*    </Button>*/}
                {/*)}*/}
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
                                    ? "bg-accent text-secondary hover:bg-accent/90"
                                    : "bg-card border-accent text-accent hover:bg-accent/10"
                            }`}
                            onClick={() => onToggleTechnology(tech)}
                        >
                            {tech}
                        </Badge>
                    );
                })}
            </div>
        </div>
    );
}