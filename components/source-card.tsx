import Link from 'next/link';
import { ExternalLink, FileText, Building2, BookOpen, Newspaper, Scale } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Source, SourceType } from '@/types/database-helpers';
import { cn } from '@/lib/utils';

interface SourceCardProps {
  source: Source;
  showCategory?: boolean;
}

const sourceTypeBadges: Record<SourceType, { label: string; className: string; icon: React.ReactNode }> = {
  peer_reviewed: {
    label: 'Peer-Reviewed',
    className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    icon: <BookOpen className="h-3 w-3" />,
  },
  agency: {
    label: 'Agency',
    className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    icon: <Building2 className="h-3 w-3" />,
  },
  advocacy: {
    label: 'Advocacy',
    className: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
    icon: <FileText className="h-3 w-3" />,
  },
  news: {
    label: 'News',
    className: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
    icon: <Newspaper className="h-3 w-3" />,
  },
  legal: {
    label: 'Legal',
    className: 'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400',
    icon: <Scale className="h-3 w-3" />,
  },
  other: {
    label: 'Other',
    className: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400',
    icon: <FileText className="h-3 w-3" />,
  },
};

export function SourceCard({ source, showCategory }: SourceCardProps) {
  const badge = sourceTypeBadges[source.source_type];
  const primaryUrl = source.url || source.pdf_url;
  const hasPdfSeparate = source.url && source.pdf_url;

  return (
    <Card
      id={source.slug}
      className="p-6 scroll-mt-24"
    >
      {/* Type Badge */}
      <div className="flex items-center gap-2 mb-2">
        <span className={cn(
          'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium',
          badge.className
        )}>
          {badge.icon}
          {badge.label}
        </span>
        {source.year && (
          <span className="text-xs text-muted-foreground">
            {source.year}
          </span>
        )}
      </div>

      {/* Title */}
      <h4 className="font-bold text-foreground">
        {source.author && `${source.author} — `}
        {source.title}
      </h4>

      {/* Publication */}
      {source.publication && (
        <p className="text-sm text-muted-foreground mt-1">
          {source.publication}
        </p>
      )}

      {/* Description */}
      {source.description && (
        <p className="mt-2 text-sm text-muted-foreground">
          {source.description}
        </p>
      )}

      {/* Links */}
      <div className="mt-3 flex flex-wrap items-center gap-4">
        {primaryUrl && (
          <Link
            href={primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:underline"
          >
            {source.pdf_url && !source.url ? 'View PDF' : 'View Source'}
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        )}
        {hasPdfSeparate && (
          <Link
            href={source.pdf_url!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:underline"
          >
            View PDF
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        )}
        {source.doi && (
          <Link
            href={`https://doi.org/${source.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            DOI: {source.doi}
          </Link>
        )}
      </div>
    </Card>
  );
}
