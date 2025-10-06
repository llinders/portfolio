export function EmptyState() {
  return (
    <div className="text-center py-12 text-muted-foreground">
      <p className="text-lg">
        Geen projecten gevonden met de geselecteerde technologieën.
      </p>
      <p className="text-sm mt-2">
        Probeer andere technologieën te selecteren of wis alle filters.
      </p>
    </div>
  );
}
