'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
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

const sourceTypeColors: Record<SourceType, string> = {
  peer_reviewed: 'text-green-700 dark:text-green-400',
  agency: 'text-blue-700 dark:text-blue-400',
  legal: 'text-slate-700 dark:text-slate-400',
  advocacy: 'text-purple-700 dark:text-purple-400',
  news: 'text-orange-700 dark:text-orange-400',
  other: 'text-gray-700 dark:text-gray-400',
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
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout>();
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const hasSetPosition = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const handleMouseEnter = (e: React.MouseEvent) => {
    // Only set position once when first opening
    if (!hasSetPosition.current) {
      setPosition({
        x: e.clientX - 20, // Use clientX for viewport-relative positioning
        y: e.clientY + 10 // 10px below cursor
      });
      hasSetPosition.current = true;
    }

    // Clear any pending close timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    loadCitation();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Debounce the close - only close after a short delay
    hoverTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      // Reset position flag when fully closed
      hasSetPosition.current = false;
    }, 60000); // 1 minute for debugging
  };

  const handlePopoverMouseEnter = () => {
    // Clear the close timeout when entering popover
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsOpen(true);
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
    <>
      <Link
        ref={triggerRef}
        href={linkHref}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={cn(
          'text-secondary underline decoration-secondary/30 hover:decoration-secondary',
          'transition-colors duration-150',
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={loadCitation}
      >
        {children}
      </Link>

      {/* Custom Portal-based Popover */}
      {mounted && isOpen && createPortal(
        <div
          className={cn(
            "fixed z-50 w-80 overflow-visible",
            "before:absolute before:left-6 before:-top-[15px] before:border-[8px] before:border-transparent before:border-b-border before:drop-shadow-md before:-z-10",
            "after:absolute after:left-[25px] after:-top-[13px] after:border-[7px] after:border-transparent after:border-b-popover after:z-10"
          )}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          {/* Content container */}
          <div
            className={cn(
              "relative rounded-md border bg-popover p-4 text-popover-foreground shadow-md",
              "animate-in fade-in-0 zoom-in-95 duration-200"
            )}
            onMouseEnter={handlePopoverMouseEnter}
            onMouseLeave={handleMouseLeave}
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
              <div className={cn(
                "flex items-center gap-1.5 text-xs font-medium",
                sourceTypeColors[citation.source_type]
              )}>
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
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
