import type { Source, SourceCategory } from '@/types/database-helpers';
import { SourceCard } from './source-card';

interface SourceCategorySectionProps {
  category: SourceCategory;
  sources: Source[];
}

export function SourceCategorySection({
  category,
  sources
}: SourceCategorySectionProps) {
  if (sources.length === 0) return null;

  return (
    <section id={`category-${category.slug}`}>
      <h3 className="mb-6 text-2xl font-bold text-foreground">
        {category.name}
      </h3>
      {category.description && (
        <p className="mb-4 text-muted-foreground">
          {category.description}
        </p>
      )}
      <div className="space-y-3">
        {sources.map((source) => (
          <SourceCard key={source.id} source={source} />
        ))}
      </div>
    </section>
  );
}
