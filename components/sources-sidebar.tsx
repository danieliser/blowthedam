'use client';

import { useEffect, useState, useRef } from 'react';
import { BookOpen, Building2, FileText, Newspaper, Scale, Info, X } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import type { SourceCategory, SourceType } from '@/types/database-helpers';
import { cn } from '@/lib/utils';

interface SourcesSidebarProps {
  categories: SourceCategory[];
}

const sourceTypeInfo: Record<SourceType, {
  label: string;
  icon: React.ReactNode;
  className: string;
  trustworthiness: string;
  description: string;
  examples: string;
}> = {
  peer_reviewed: {
    label: 'Peer-Reviewed',
    icon: <BookOpen className="h-4 w-4" />,
    className: 'bg-green-50 text-green-700 border-green-500 dark:bg-green-900/20 dark:text-green-400',
    trustworthiness: 'Highest',
    description: 'Academic research published in scientific journals after rigorous peer review by experts in the field.',
    examples: 'Scientific studies, research papers, academic publications',
  },
  agency: {
    label: 'Agency',
    icon: <Building2 className="h-4 w-4" />,
    className: 'bg-blue-50 text-blue-700 border-blue-500 dark:bg-blue-900/20 dark:text-blue-400',
    trustworthiness: 'High',
    description: 'Official reports and data from government agencies with regulatory oversight and technical expertise.',
    examples: 'USFWS, SJRWMD, Marine Mammal Commission, EPA',
  },
  legal: {
    label: 'Legal',
    icon: <Scale className="h-4 w-4" />,
    className: 'bg-slate-50 text-slate-700 border-slate-500 dark:bg-slate-900/20 dark:text-slate-400',
    trustworthiness: 'High',
    description: 'Court documents, legal opinions, and regulatory decisions with evidentiary standards.',
    examples: 'Court rulings, legal briefs, regulatory determinations',
  },
  advocacy: {
    label: 'Advocacy',
    icon: <FileText className="h-4 w-4" />,
    className: 'bg-purple-50 text-purple-700 border-purple-500 dark:bg-purple-900/20 dark:text-purple-400',
    trustworthiness: 'Moderate',
    description: 'Position papers and analysis from advocacy organizations. May contain valuable research but with stated positions.',
    examples: 'Environmental groups, policy organizations, advocacy coalitions',
  },
  news: {
    label: 'News',
    icon: <Newspaper className="h-4 w-4" />,
    className: 'bg-orange-50 text-orange-700 border-orange-500 dark:bg-orange-900/20 dark:text-orange-400',
    trustworthiness: 'Moderate',
    description: 'Journalistic reporting and news coverage. Quality varies by publication standards.',
    examples: 'Newspapers, news websites, investigative journalism',
  },
  other: {
    label: 'Other',
    icon: <FileText className="h-4 w-4" />,
    className: 'bg-gray-50 text-gray-700 border-gray-500 dark:bg-gray-900/20 dark:text-gray-400',
    trustworthiness: 'Varies',
    description: 'Miscellaneous sources that don\'t fit other categories. Evaluate individually.',
    examples: 'Educational materials, historical documents, miscellaneous sources',
  },
};

export function SourcesSidebar({ categories }: SourcesSidebarProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -66%',
      }
    );

    // Observe all category sections
    categories.forEach((category) => {
      const element = document.getElementById(`category-${category.slug}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [categories]);

  const scrollToSection = (slug: string) => {
    const element = document.getElementById(`category-${slug}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="sticky top-24 h-fit">
      <div className="space-y-8">
        {/* Table of Contents */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
            Contents
          </h3>
          <nav className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => scrollToSection(category.slug)}
                className={cn(
                  'block w-full text-left px-3 py-2 text-sm rounded-md transition-colors cursor-pointer',
                  activeSection === `category-${category.slug}`
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Source Type Legend */}
        <div className="border-t border-border pt-6">
          <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
            Source Types
          </h3>
          <div className="space-y-2">
            {(Object.entries(sourceTypeInfo) as [SourceType, typeof sourceTypeInfo[SourceType]][]).map(([type, info]) => {
              return (
                <div
                  key={type}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-md text-xs font-semibold border-l-2',
                    info.className
                  )}
                >
                  {info.icon}
                  <span className="flex-1">{info.label}</span>

                  <Popover
                    open={openPopover === type}
                    onOpenChange={(open) => {
                      if (open) {
                        setOpenPopover(type);
                      } else if (openPopover === type) {
                        setOpenPopover(null);
                      }
                    }}
                  >
                    <PopoverTrigger asChild>
                      <button
                        className="hover:bg-black/10 dark:hover:bg-white/10 rounded p-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        onMouseEnter={() => setOpenPopover(type)}
                        onFocus={() => setOpenPopover(type)}
                        aria-label={`View ${info.label} information`}
                      >
                        <Info className="h-3.5 w-3.5" />
                      </button>
                    </PopoverTrigger>
                  <PopoverContent
                    side="right"
                    align="start"
                    alignOffset={-15}
                    sideOffset={8}
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    collisionPadding={10}
                    className={cn(
                      "w-80 max-sm:w-[calc(100vw-2rem)] overflow-visible",
                      "before:absolute before:-left-[17px] before:top-[15px] before:border-[8px] before:border-transparent before:border-r-border before:drop-shadow-md before:-z-10",
                      "after:absolute after:-left-[14px] after:top-[16px] after:border-[7px] after:border-transparent after:border-r-popover after:z-10"
                    )}
                  >
                    {/* Mobile close button */}
                    <button
                      onClick={() => setOpenPopover(null)}
                      className="sm:hidden absolute top-3 right-3 p-1 rounded-md hover:bg-muted transition-colors"
                      aria-label="Close"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        {info.icon}
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-muted-foreground font-medium">Trustworthiness: </span>
                          <span className={cn(
                            "font-semibold",
                            info.trustworthiness === 'Highest' && "text-green-600 dark:text-green-400",
                            info.trustworthiness === 'High' && "text-blue-600 dark:text-blue-400",
                            info.trustworthiness === 'Moderate' && "text-orange-600 dark:text-orange-400",
                            info.trustworthiness === 'Varies' && "text-gray-600 dark:text-gray-400"
                          )}>
                            {info.trustworthiness}
                          </span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {info.description}
                        </p>

                        <div>
                          <span className="text-muted-foreground font-medium text-xs">Examples: </span>
                          <span className="text-muted-foreground text-xs italic">{info.examples}</span>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                  </Popover>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Note */}
        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            All sources are evaluated for credibility and relevance. We prioritize peer-reviewed research
            and government agency reports for factual claims.
          </p>
        </div>
      </div>
    </aside>
  );
}
