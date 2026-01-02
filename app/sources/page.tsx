import { Navigation } from '@/components/navigation';
import { Card } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import { getSourcesByCategory } from '@/lib/sources';
import { SourceCategorySection } from '@/components/source-category-section';

export const revalidate = 3600; // Revalidate every hour

export default async function SourcesPage() {
  const sourcesByCategory = await getSourcesByCategory();
  const categoryOrder = [
    'manatees-habitat',
    'drawdowns-hydrology',
    'water-quality',
    'dam-history',
    'economics-fishing',
    'additional-resources',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Sources & References
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed">
              Our advocacy is grounded in scientific research, government
              reports, and expert analysis. All sources are linked and verifiable.
            </p>
          </div>
        </div>
      </section>

      {/* Note About Sources */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="border-accent bg-accent/5 p-8">
            <div className="flex items-start gap-4">
              <BookOpen className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Our Approach to Evidence
                </h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  This website presents advocacy positions based on peer-reviewed
                  research, government studies, and expert analysis. We prioritize
                  official government reports and published scientific research
                  over anecdotal claims. Every claim can be traced to the sources
                  listed below.
                </p>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  We encourage visitors to examine primary sources directly and
                  draw their own conclusions.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Grouped Sources */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
            Verifiable Sources
          </h2>

          <div className="space-y-12">
            {categoryOrder.map((categorySlug) => {
              const data = sourcesByCategory[categorySlug];
              if (!data) return null;

              return (
                <SourceCategorySection
                  key={categorySlug}
                  category={data.category}
                  sources={data.sources}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
