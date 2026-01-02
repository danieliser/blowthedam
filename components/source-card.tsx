import Link from 'next/link';
import { ExternalLink, FileText, Building2, BookOpen, Newspaper, Scale, Star, Quote } from 'lucide-react';
import type { Source, SourceType, SourcePassage } from '@/types/database-helpers';
import { cn } from '@/lib/utils';

interface SourceCardProps {
  source: Source & { passages?: SourcePassage[] };
  showCategory?: boolean;
}

const sourceTypeBadges: Record<SourceType, { label: string; className: string; borderColor: string; icon: React.ReactNode }> = {
  peer_reviewed: {
    label: 'Peer-Reviewed',
    className: 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400',
    borderColor: 'border-l-green-500',
    icon: <BookOpen className="h-3.5 w-3.5" />,
  },
  agency: {
    label: 'Agency',
    className: 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
    borderColor: 'border-l-blue-500',
    icon: <Building2 className="h-3.5 w-3.5" />,
  },
  advocacy: {
    label: 'Advocacy',
    className: 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400',
    borderColor: 'border-l-purple-500',
    icon: <FileText className="h-3.5 w-3.5" />,
  },
  news: {
    label: 'News',
    className: 'bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400',
    borderColor: 'border-l-orange-500',
    icon: <Newspaper className="h-3.5 w-3.5" />,
  },
  legal: {
    label: 'Legal',
    className: 'bg-slate-50 text-slate-700 dark:bg-slate-900/20 dark:text-slate-400',
    borderColor: 'border-l-slate-500',
    icon: <Scale className="h-3.5 w-3.5" />,
  },
  other: {
    label: 'Other',
    className: 'bg-gray-50 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400',
    borderColor: 'border-l-gray-500',
    icon: <FileText className="h-3.5 w-3.5" />,
  },
};

export function SourceCard({ source, showCategory }: SourceCardProps) {
  const badge = sourceTypeBadges[source.source_type];
  const primaryUrl = source.url || source.pdf_url;
  const hasPdfSeparate = source.url && source.pdf_url;

  return (
    <article
      id={source.slug}
      className={cn(
        "scroll-mt-24 bg-card border-l-4 border-y border-r border-border rounded-r-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-r-2",
        badge.borderColor
      )}
    >
      {/* Header with Badge and Year */}
      <div className="px-5 pt-4 pb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className={cn(
            'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold shadow-sm',
            badge.className
          )}>
            {badge.icon}
            {badge.label}
          </span>
          {source.is_featured && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-accent/10 text-accent">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </span>
          )}
        </div>
        {source.year && (
          <span className="text-sm font-bold text-foreground/60 px-2.5 py-1 bg-muted/50 rounded">
            {source.year}
          </span>
        )}
      </div>

      {/* Main Content */}
      <div className="px-5 pb-4 space-y-4">
        {/* Title */}
        <h4 className="font-bold text-lg leading-tight text-foreground">
          {source.title}
        </h4>

        {/* Metadata - Two Column Layout */}
        <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-sm">
          {source.author && (
            <>
              <dt className="text-muted-foreground font-semibold">Author</dt>
              <dd className="text-foreground">{source.author}</dd>
            </>
          )}
          {source.publication && (
            <>
              <dt className="text-muted-foreground font-semibold">Source</dt>
              <dd className="text-foreground">{source.publication}</dd>
            </>
          )}
          {source.doi && (
            <>
              <dt className="text-muted-foreground font-semibold">DOI</dt>
              <dd className="text-foreground font-mono text-xs">{source.doi}</dd>
            </>
          )}
        </dl>

        {/* Description - Emphasized */}
        {source.description && (
          <div className="pt-3 border-t border-border/50">
            <p className="text-sm leading-relaxed text-foreground/80 italic">
              "{source.description}"
            </p>
          </div>
        )}

        {/* Key Citations/Passages */}
        {source.passages && source.passages.length > 0 && (
          <div className="pt-3 border-t border-border/50">
            <div className="flex items-center gap-2 mb-2.5">
              <Quote className="h-4 w-4 text-muted-foreground" />
              <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Key Citations ({source.passages.length})
              </h5>
            </div>
            <div className="space-y-2.5">
              {source.passages.slice(0, 2).map((passage) => (
                <div key={passage.id} className="pl-3 border-l-2 border-accent/30">
                  <p className="text-xs leading-relaxed text-foreground/70">
                    "{passage.quote_text}"
                  </p>
                  {(passage.page_number || passage.section) && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {[passage.section, passage.page_number && `p. ${passage.page_number}`]
                        .filter(Boolean)
                        .join(' • ')}
                    </p>
                  )}
                </div>
              ))}
              {source.passages.length > 2 && (
                <p className="text-xs text-muted-foreground italic pl-3">
                  + {source.passages.length - 2} more citation{source.passages.length - 2 !== 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="px-5 py-3.5 bg-gradient-to-r from-muted/40 to-muted/20 border-t border-border/50 flex flex-wrap items-center gap-4">
        {primaryUrl && (
          <Link
            href={primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors group"
          >
            {source.pdf_url && !source.url ? 'View PDF' : 'View Source'}
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        )}
        {hasPdfSeparate && (
          <Link
            href={source.pdf_url!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors group"
          >
            View PDF
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        )}
        {source.doi && (
          <Link
            href={`https://doi.org/${source.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors ml-auto"
          >
            View on DOI.org →
          </Link>
        )}
      </div>
    </article>
  );
}
