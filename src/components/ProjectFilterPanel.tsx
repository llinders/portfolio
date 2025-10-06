import {TechnologyFilter} from "./TechnologyFilter";

interface Props {
  availableTechnologies: string[];
  selectedTechnologies: string[];
  onToggle: (tech: string) => void;
  onClear: () => void;
  total: number;
  totalAll: number;
}

export function ProjectFilterPanel({
                                     availableTechnologies,
                                     selectedTechnologies,
                                     onToggle,
                                     onClear,
                                     total,
                                     totalAll,
                                   }: Props) {
  return (
    <div className="flex-col w-full md:w-48 shrink-0">
      <TechnologyFilter
        availableTechnologies={availableTechnologies}
        selectedTechnologies={selectedTechnologies}
        onToggleTechnology={onToggle}
        onClearAll={onClear}
      />
      {selectedTechnologies.length > 0 && (
        <div className="text-center text-text-muted">
          Toont {total} van de {totalAll} projecten
        </div>
      )}
    </div>
  );
}
