'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ExternalLink, FileText, Building2, BookOpen, Newspaper, Scale } from 'lucide-react';
import type { CitationData, SourceType } from '@/types/database-helpers';
import { cn } from '@/lib/utils';

interface CitationProps {
  sourceSlug: string;
  passageId?: string;
  children: React.ReactNode;
  className?: string;
  showPopover?: boolean;
}

const sourceTypeIcons: Record<SourceType, React.ReactNode> = {
  peer_reviewed: <BookOpen className="h-3 w-3" />,
  agency: <Building2 className="h-3 w-3" />,
  advocacy: <FileText className="h-3 w-3" />,
  news: <Newspaper className="h-3 w-3" />,
  legal: <Scale className="h-3 w-3" />,
  other: <FileText className="h-3 w-3" />,
};

const sourceTypeLabels: Record<SourceType, string> = {
  peer_reviewed: 'Peer-Reviewed',
  agency: 'Agency Report',
  advocacy: 'Advocacy/Policy',
  news: 'News',
  legal: 'Legal Document',
  other: 'Other',
};

export function Citation({
  sourceSlug,
  passageId,
  children,
  className,
  showPopover = true,
}: CitationProps) {
  const [citation, setCitation] = useState<CitationData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Fetch citation data on hover/focus
  const loadCitation = async () => {
    if (citation || isLoading || hasError) return;

    setIsLoading(true);
    try {
      const res = await fetch(`/api/citations/${sourceSlug}`);
      if (res.ok) {
        const data = await res.json();
        setCitation(data);
      } else {
        setHasError(true);
      }
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const linkHref = citation?.url || `/sources#${sourceSlug}`;
  const isExternal = citation?.url?.startsWith('http');

  if (!showPopover) {
    return (
      <Link
        href={linkHref}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={cn(
          'text-secondary underline decoration-secondary/30 hover:decoration-secondary',
          'transition-colors duration-150',
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <Popover onOpenChange={(open) => open && loadCitation()}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            'text-secondary underline decoration-secondary/30 hover:decoration-secondary',
            'transition-colors duration-150 inline cursor-pointer bg-transparent border-none p-0 font-inherit',
            className
          )}
          type="button"
        >
          {children}
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 p-4"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {isLoading && (
          <div className="text-sm text-muted-foreground">Loading...</div>
        )}
        {hasError && (
          <div className="text-sm text-muted-foreground">
            Unable to load source details
          </div>
        )}
        {citation && (
          <div className="space-y-2">
            {/* Source Type Badge */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              {sourceTypeIcons[citation.source_type]}
              <span>{sourceTypeLabels[citation.source_type]}</span>
            </div>

            {/* Title */}
            <h4 className="font-semibold text-sm leading-tight">
              {citation.short_title || citation.title}
            </h4>

            {/* Author & Year */}
            {(citation.author || citation.year) && (
              <p className="text-xs text-muted-foreground">
                {[citation.author, citation.year].filter(Boolean).join(' • ')}
              </p>
            )}

            {/* Description */}
            {citation.description && (
              <p className="text-xs text-muted-foreground line-clamp-3">
                {citation.description}
              </p>
            )}

            {/* Link */}
            <Link
              href={linkHref}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
            >
              View Source
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
