# BlowTheDam.com - Technical Specification

## Document Info

| Field | Value |
|-------|-------|
| **Project** | BlowTheDam.com |
| **Feature** | Sources Management & Blog System |
| **Version** | 1.0 |
| **Date** | 2025-01-02 |
| **Related PRD** | [PRD-sources-blog-system.md](./PRD-sources-blog-system.md) |

---

## 1. Database Schema

### 1.1 Complete Migration SQL

**File:** `supabase/migrations/001_sources_and_blog.sql`

```sql
-- ============================================
-- BlowTheDam.com Database Schema
-- Sources, Citations, Blog, and Media
-- ============================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- ENUM TYPES
-- ============================================

-- Source classification for credibility context
CREATE TYPE source_type AS ENUM (
  'peer_reviewed',  -- Academic journals, published research
  'agency',         -- Government/official agency reports  
  'advocacy',       -- Think tanks, advocacy organizations
  'news',           -- News articles, journalism
  'legal',          -- Court documents, legislation
  'other'
);

-- Blog post workflow status
CREATE TYPE post_status AS ENUM (
  'draft',
  'published',
  'archived'
);

-- ============================================
-- SOURCE CATEGORIES
-- ============================================

CREATE TABLE source_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for ordering
CREATE INDEX idx_source_categories_sort ON source_categories(sort_order);

COMMENT ON TABLE source_categories IS 'Topic groupings for sources (manatees, water quality, etc.)';

-- ============================================
-- SOURCES
-- ============================================

CREATE TABLE sources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT NOT NULL UNIQUE,
  
  -- Core metadata
  title TEXT NOT NULL,
  short_title TEXT,  -- For compact citation display
  author TEXT,
  publication TEXT,  -- Journal, agency, publisher name
  year INTEGER,
  
  -- Classification
  source_type source_type DEFAULT 'other',
  category_id UUID REFERENCES source_categories(id) ON DELETE SET NULL,
  
  -- URLs
  url TEXT,          -- Primary link (web page)
  pdf_url TEXT,      -- Direct PDF link if available
  doi TEXT,          -- Digital Object Identifier
  
  -- Content
  description TEXT,  -- Brief summary for display
  full_citation TEXT, -- Complete formatted citation
  
  -- Display control
  is_featured BOOLEAN DEFAULT FALSE,
  sort_order INTEGER DEFAULT 0,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_sources_category ON sources(category_id);
CREATE INDEX idx_sources_slug ON sources(slug);
CREATE INDEX idx_sources_type ON sources(source_type);
CREATE INDEX idx_sources_featured ON sources(is_featured) WHERE is_featured = TRUE;
CREATE INDEX idx_sources_sort ON sources(category_id, sort_order);

COMMENT ON TABLE sources IS 'Primary source/reference storage with full metadata';

-- ============================================
-- SOURCE PASSAGES
-- ============================================

CREATE TABLE source_passages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  source_id UUID NOT NULL REFERENCES sources(id) ON DELETE CASCADE,
  
  -- The quoted content
  quote_text TEXT NOT NULL,
  context TEXT,  -- Brief explanation of what this quote establishes
  
  -- Direct link to the text (Google Text Fragment)
  fragment_url TEXT,  -- Full URL with #:~:text= fragment
  
  -- Location within source
  page_number TEXT,  -- Can be "5" or "5-7" or "Section 3.2"
  section TEXT,      -- Named section/chapter
  
  -- Usage guidance
  usage_hint TEXT,   -- When to use this passage
  
  -- Display control
  sort_order INTEGER DEFAULT 0,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_passages_source ON source_passages(source_id);

COMMENT ON TABLE source_passages IS 'Specific quoted passages from sources with direct link fragments';

-- ============================================
-- BLOG CATEGORIES
-- ============================================

CREATE TABLE blog_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_blog_categories_sort ON blog_categories(sort_order);

COMMENT ON TABLE blog_categories IS 'Blog post categorization';

-- ============================================
-- BLOG POSTS
-- ============================================

CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT NOT NULL UNIQUE,
  
  -- Content
  title TEXT NOT NULL,
  excerpt TEXT,           -- Short summary for listings
  content TEXT NOT NULL,  -- Full post content (markdown/HTML)
  
  -- SEO metadata
  meta_title TEXT,        -- Override page title
  meta_description TEXT,  -- Meta description tag
  og_image_url TEXT,      -- Open Graph image
  canonical_url TEXT,     -- Canonical URL if cross-posted
  
  -- Categorization
  category_id UUID REFERENCES blog_categories(id) ON DELETE SET NULL,
  tags TEXT[] DEFAULT '{}',
  
  -- Featured image
  featured_image_url TEXT,
  featured_image_alt TEXT,
  
  -- Publishing workflow
  status post_status DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  
  -- Author (simple string for now)
  author_name TEXT DEFAULT 'BlowTheDam Team',
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_published ON blog_posts(published_at DESC) 
  WHERE status = 'published';
CREATE INDEX idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX idx_blog_posts_tags ON blog_posts USING GIN(tags);

COMMENT ON TABLE blog_posts IS 'Blog posts with full SEO and publishing support';

-- ============================================
-- MEDIA LIBRARY
-- ============================================

CREATE TABLE media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Supabase Storage reference
  storage_path TEXT NOT NULL,  -- Path within bucket
  bucket TEXT NOT NULL DEFAULT 'media',
  
  -- File metadata
  filename TEXT NOT NULL,
  mime_type TEXT,
  file_size INTEGER,  -- Bytes
  
  -- Image dimensions (if applicable)
  width INTEGER,
  height INTEGER,
  
  -- Display metadata
  alt_text TEXT,
  caption TEXT,
  
  -- Computed public URL
  public_url TEXT,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_media_bucket ON media(bucket);
CREATE INDEX idx_media_mime ON media(mime_type);

COMMENT ON TABLE media IS 'Tracks files uploaded to Supabase Storage';

-- ============================================
-- AUTO-UPDATE TRIGGERS
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER sources_updated_at
  BEFORE UPDATE ON sources
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER source_categories_updated_at
  BEFORE UPDATE ON source_categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER source_passages_updated_at
  BEFORE UPDATE ON source_passages
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER blog_categories_updated_at
  BEFORE UPDATE ON blog_categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================
-- HELPER VIEWS
-- ============================================

-- Sources with their category info joined
CREATE VIEW sources_with_category AS
SELECT 
  s.*,
  sc.slug AS category_slug,
  sc.name AS category_name,
  sc.sort_order AS category_sort_order
FROM sources s
LEFT JOIN source_categories sc ON s.category_id = sc.id
ORDER BY sc.sort_order, s.sort_order;

-- Published blog posts only
CREATE VIEW published_blog_posts AS
SELECT 
  bp.*,
  bc.slug AS category_slug,
  bc.name AS category_name
FROM blog_posts bp
LEFT JOIN blog_categories bc ON bp.category_id = bc.id
WHERE bp.status = 'published' 
  AND bp.published_at <= NOW()
ORDER BY bp.published_at DESC;

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================

ALTER TABLE source_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE source_passages ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;

-- Public read access for all tables
CREATE POLICY "Public read source_categories" ON source_categories
  FOR SELECT USING (true);

CREATE POLICY "Public read sources" ON sources
  FOR SELECT USING (true);

CREATE POLICY "Public read source_passages" ON source_passages
  FOR SELECT USING (true);

CREATE POLICY "Public read blog_categories" ON blog_categories
  FOR SELECT USING (true);

-- Blog posts: only published posts are public
CREATE POLICY "Public read published blog_posts" ON blog_posts
  FOR SELECT USING (status = 'published' AND published_at <= NOW());

CREATE POLICY "Public read media" ON media
  FOR SELECT USING (true);

-- ============================================
-- SEED DATA: Categories
-- ============================================

INSERT INTO source_categories (slug, name, description, sort_order) VALUES
  ('manatees-habitat', 'Manatees, Habitat, & Connectivity', 'Research on manatee populations, habitat requirements, and ecosystem connectivity', 1),
  ('drawdowns-hydrology', 'Drawdowns, Hydrology, & Springs', 'Information on reservoir management, water flow, and spring systems', 2),
  ('water-quality', 'Water Quality, Algae, & SAV', 'Water quality data, algae blooms, and submerged aquatic vegetation', 3),
  ('dam-history', 'Dam History & Context', 'Historical background on Rodman Dam and the Cross Florida Barge Canal', 4),
  ('economics-fishing', 'Economics & Fishing', 'Economic impact studies and fishery management research', 5),
  ('additional-resources', 'Additional Context & Resources', 'Supplementary sources and background information', 6);

INSERT INTO blog_categories (slug, name, description, sort_order) VALUES
  ('news', 'News & Updates', 'Latest developments in the restoration effort', 1),
  ('research', 'Research & Science', 'Deep dives into scientific studies and data', 2),
  ('action', 'Take Action', 'How you can help the restoration effort', 3),
  ('stories', 'Stories & Perspectives', 'Personal stories and community perspectives', 4);
```

---

## 2. TypeScript Types

**File:** `types/database.ts`

```typescript
// ============================================
// Database Types for BlowTheDam.com
// Generated from Supabase schema
// ============================================

// Enum types
export type SourceType = 
  | 'peer_reviewed'
  | 'agency'
  | 'advocacy'
  | 'news'
  | 'legal'
  | 'other';

export type PostStatus = 'draft' | 'published' | 'archived';

// ============================================
// Source Types
// ============================================

export interface SourceCategory {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Source {
  id: string;
  slug: string;
  title: string;
  short_title: string | null;
  author: string | null;
  publication: string | null;
  year: number | null;
  source_type: SourceType;
  category_id: string | null;
  url: string | null;
  pdf_url: string | null;
  doi: string | null;
  description: string | null;
  full_citation: string | null;
  is_featured: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface SourcePassage {
  id: string;
  source_id: string;
  quote_text: string;
  context: string | null;
  fragment_url: string | null;
  page_number: string | null;
  section: string | null;
  usage_hint: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

// Joined types for queries
export interface SourceWithCategory extends Source {
  category: SourceCategory | null;
}

export interface SourceWithPassages extends Source {
  passages: SourcePassage[];
}

export interface SourceFull extends Source {
  category: SourceCategory | null;
  passages: SourcePassage[];
}

// ============================================
// Blog Types
// ============================================

export interface BlogCategory {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  meta_title: string | null;
  meta_description: string | null;
  og_image_url: string | null;
  canonical_url: string | null;
  category_id: string | null;
  tags: string[];
  featured_image_url: string | null;
  featured_image_alt: string | null;
  status: PostStatus;
  published_at: string | null;
  author_name: string;
  created_at: string;
  updated_at: string;
}

export interface BlogPostWithCategory extends BlogPost {
  category: BlogCategory | null;
}

// ============================================
// Media Types
// ============================================

export interface Media {
  id: string;
  storage_path: string;
  bucket: string;
  filename: string;
  mime_type: string | null;
  file_size: number | null;
  width: number | null;
  height: number | null;
  alt_text: string | null;
  caption: string | null;
  public_url: string | null;
  created_at: string;
}

// ============================================
// API Response Types
// ============================================

export interface SourcesByCategory {
  [categorySlug: string]: {
    category: SourceCategory;
    sources: Source[];
  };
}

export interface CitationData {
  slug: string;
  title: string;
  short_title: string | null;
  author: string | null;
  year: number | null;
  source_type: SourceType;
  url: string | null;
  description: string | null;
}

// ============================================
// Component Props Types
// ============================================

export interface CitationProps {
  sourceSlug: string;
  passageId?: string;
  children: React.ReactNode;
  className?: string;
  showPopover?: boolean;
}

export interface SourceCardProps {
  source: Source;
  showCategory?: boolean;
}

export interface SourceCategorySectionProps {
  category: SourceCategory;
  sources: Source[];
}
```

---

## 3. Supabase Client Setup

**File:** `lib/supabase.ts`

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client for browser/client components
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server client factory for Server Components
export function createServerClient() {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  });
}
```

---

## 4. Data Fetching Functions

**File:** `lib/sources.ts`

```typescript
import { createServerClient } from './supabase';
import type { 
  Source, 
  SourceCategory, 
  SourceWithCategory,
  SourceWithPassages,
  SourcesByCategory,
  CitationData 
} from '@/types/database';

// ============================================
// Category Functions
// ============================================

export async function getSourceCategories(): Promise<SourceCategory[]> {
  const supabase = createServerClient();
  
  const { data, error } = await supabase
    .from('source_categories')
    .select('*')
    .order('sort_order', { ascending: true });
  
  if (error) {
    console.error('Error fetching source categories:', error);
    return [];
  }
  
  return data || [];
}

// ============================================
// Source Functions
// ============================================

export async function getAllSources(): Promise<SourceWithCategory[]> {
  const supabase = createServerClient();
  
  const { data, error } = await supabase
    .from('sources')
    .select(`
      *,
      category:source_categories(*)
    `)
    .order('sort_order', { ascending: true });
  
  if (error) {
    console.error('Error fetching sources:', error);
    return [];
  }
  
  return data || [];
}

export async function getSourcesByCategory(): Promise<SourcesByCategory> {
  const supabase = createServerClient();
  
  // Get categories first
  const { data: categories, error: catError } = await supabase
    .from('source_categories')
    .select('*')
    .order('sort_order', { ascending: true });
  
  if (catError || !categories) {
    console.error('Error fetching categories:', catError);
    return {};
  }
  
  // Get all sources
  const { data: sources, error: srcError } = await supabase
    .from('sources')
    .select('*')
    .order('sort_order', { ascending: true });
  
  if (srcError || !sources) {
    console.error('Error fetching sources:', srcError);
    return {};
  }
  
  // Group sources by category
  const result: SourcesByCategory = {};
  
  for (const category of categories) {
    const categorySources = sources.filter(s => s.category_id === category.id);
    if (categorySources.length > 0) {
      result[category.slug] = {
        category,
        sources: categorySources,
      };
    }
  }
  
  return result;
}

export async function getSourceBySlug(slug: string): Promise<Source | null> {
  const supabase = createServerClient();
  
  const { data, error } = await supabase
    .from('sources')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error) {
    console.error(`Error fetching source ${slug}:`, error);
    return null;
  }
  
  return data;
}

export async function getSourceWithPassages(slug: string): Promise<SourceWithPassages | null> {
  const supabase = createServerClient();
  
  const { data, error } = await supabase
    .from('sources')
    .select(`
      *,
      passages:source_passages(*)
    `)
    .eq('slug', slug)
    .single();
  
  if (error) {
    console.error(`Error fetching source with passages ${slug}:`, error);
    return null;
  }
  
  return data;
}

// Lightweight fetch for citation popovers
export async function getCitationData(slug: string): Promise<CitationData | null> {
  const supabase = createServerClient();
  
  const { data, error } = await supabase
    .from('sources')
    .select(`
      slug,
      title,
      short_title,
      author,
      year,
      source_type,
      url,
      description
    `)
    .eq('slug', slug)
    .single();
  
  if (error) {
    console.error(`Error fetching citation data ${slug}:`, error);
    return null;
  }
  
  return data;
}

export async function getFeaturedSources(): Promise<Source[]> {
  const supabase = createServerClient();
  
  const { data, error } = await supabase
    .from('sources')
    .select('*')
    .eq('is_featured', true)
    .order('sort_order', { ascending: true });
  
  if (error) {
    console.error('Error fetching featured sources:', error);
    return [];
  }
  
  return data || [];
}
```

**File:** `lib/blog.ts`

```typescript
import { createServerClient } from './supabase';
import type { 
  BlogPost, 
  BlogPostWithCategory, 
  BlogCategory 
} from '@/types/database';

// ============================================
// Blog Category Functions
// ============================================

export async function getBlogCategories(): Promise<BlogCategory[]> {
  const supabase = createServerClient();
  
  const { data, error } = await supabase
    .from('blog_categories')
    .select('*')
    .order('sort_order', { ascending: true });
  
  if (error) {
    console.error('Error fetching blog categories:', error);
    return [];
  }
  
  return data || [];
}

// ============================================
// Blog Post Functions
// ============================================

export async function getPublishedPosts(
  limit?: number
): Promise<BlogPostWithCategory[]> {
  const supabase = createServerClient();
  
  let query = supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(*)
    `)
    .eq('status', 'published')
    .lte('published_at', new Date().toISOString())
    .order('published_at', { ascending: false });
  
  if (limit) {
    query = query.limit(limit);
  }
  
  const { data, error } = await query;
  
  if (error) {
    console.error('Error fetching published posts:', error);
    return [];
  }
  
  return data || [];
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPostWithCategory | null> {
  const supabase = createServerClient();
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(*)
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .lte('published_at', new Date().toISOString())
    .single();
  
  if (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return null;
  }
  
  return data;
}

export async function getPostsByCategory(
  categorySlug: string
): Promise<BlogPostWithCategory[]> {
  const supabase = createServerClient();
  
  // First get category ID
  const { data: category } = await supabase
    .from('blog_categories')
    .select('id')
    .eq('slug', categorySlug)
    .single();
  
  if (!category) return [];
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(*)
    `)
    .eq('category_id', category.id)
    .eq('status', 'published')
    .lte('published_at', new Date().toISOString())
    .order('published_at', { ascending: false });
  
  if (error) {
    console.error(`Error fetching posts for category ${categorySlug}:`, error);
    return [];
  }
  
  return data || [];
}

export async function getPostsByTag(tag: string): Promise<BlogPostWithCategory[]> {
  const supabase = createServerClient();
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(*)
    `)
    .contains('tags', [tag])
    .eq('status', 'published')
    .lte('published_at', new Date().toISOString())
    .order('published_at', { ascending: false });
  
  if (error) {
    console.error(`Error fetching posts with tag ${tag}:`, error);
    return [];
  }
  
  return data || [];
}

// For sitemap generation
export async function getAllPostSlugs(): Promise<string[]> {
  const supabase = createServerClient();
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('status', 'published')
    .lte('published_at', new Date().toISOString());
  
  if (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
  
  return (data || []).map(p => p.slug);
}
```

---

## 5. React Components

### 5.1 Citation Component

**File:** `components/citation.tsx`

```typescript
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ExternalLink, FileText, Building2, BookOpen, Newspaper, Scale } from 'lucide-react';
import type { CitationData, SourceType } from '@/types/database';
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

  const citationLink = (
    <Link
      href={linkHref}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn(
        'text-secondary underline decoration-secondary/30 hover:decoration-secondary',
        'transition-colors duration-150',
        className
      )}
      onMouseEnter={showPopover ? loadCitation : undefined}
      onFocus={showPopover ? loadCitation : undefined}
    >
      {children}
    </Link>
  );

  if (!showPopover) {
    return citationLink;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        {citationLink}
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
```

### 5.2 Citation API Route

**File:** `app/api/citations/[slug]/route.ts`

```typescript
import { NextResponse } from 'next/server';
import { getCitationData } from '@/lib/sources';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const citation = await getCitationData(params.slug);
  
  if (!citation) {
    return NextResponse.json(
      { error: 'Source not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(citation, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
```

### 5.3 Source Card Component

**File:** `components/source-card.tsx`

```typescript
import Link from 'next/link';
import { ExternalLink, FileText, Building2, BookOpen, Newspaper, Scale } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Source, SourceType } from '@/types/database';
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
```

### 5.4 Source Category Section

**File:** `components/source-category-section.tsx`

```typescript
import type { Source, SourceCategory } from '@/types/database';
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
```

---

## 6. Updated Sources Page

**File:** `app/sources/page.tsx`

```typescript
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
```

---

## 7. Environment Variables

**File:** `.env.local.example`

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Optional: Service role key for admin operations
# SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

---

## 8. Installation Steps

```bash
# 1. Install Supabase client
pnpm add @supabase/supabase-js

# 2. Create types directory
mkdir -p types

# 3. Copy environment template
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials

# 4. Run migration in Supabase Dashboard
# Copy contents of supabase/migrations/001_sources_and_blog.sql
# Paste into SQL Editor and execute

# 5. Verify setup
pnpm dev
# Visit /sources to see if it loads (will be empty until seeded)
```

---

## 9. Seed Data Script

**File:** `scripts/seed-sources.ts`

```typescript
// Run with: npx tsx scripts/seed-sources.ts

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Need service role for inserts
);

const sources = [
  // Manatees, Habitat, & Connectivity
  {
    slug: 'smith-1997',
    title: 'The Effects of Proposed Restoration on Manatees and Manatee Habitat',
    author: 'Kent Smith',
    publication: 'Florida DEP',
    year: 1997,
    source_type: 'agency',
    category_slug: 'manatees-habitat',
    url: 'https://ufdcimages.uflib.ufl.edu/IR/00/01/17/90/00001/4358SenrProjFinalRptMatthews.pdf',
    description: 'Analysis of Rodman/Ocklawaha manatee use and restoration implications.',
    sort_order: 1,
  },
  {
    slug: 'usfws-recovery-2001',
    title: 'Florida Manatee Recovery Plan (Third Revision)',
    author: 'U.S. Fish & Wildlife Service',
    publication: 'USFWS',
    year: 2001,
    source_type: 'agency',
    category_slug: 'manatees-habitat',
    url: 'https://ecos.fws.gov/docs/recovery_plan/011030.pdf',
    description: 'Comprehensive recovery plan addressing warm-water refuges and habitat connectivity.',
    sort_order: 2,
  },
  // ... continue with all sources from current page
];

async function seed() {
  // Get category IDs
  const { data: categories } = await supabase
    .from('source_categories')
    .select('id, slug');
  
  const categoryMap = new Map(categories?.map(c => [c.slug, c.id]));

  for (const source of sources) {
    const { category_slug, ...sourceData } = source;
    const category_id = categoryMap.get(category_slug);
    
    const { error } = await supabase
      .from('sources')
      .upsert({
        ...sourceData,
        category_id,
      }, { onConflict: 'slug' });
    
    if (error) {
      console.error(`Error inserting ${source.slug}:`, error);
    } else {
      console.log(`✓ ${source.slug}`);
    }
  }
  
  console.log('Done!');
}

seed();
```

---

## 10. Testing Checklist

### Pre-deployment
- [ ] Migration runs without errors
- [ ] Seed data populates correctly
- [ ] Sources page renders from database
- [ ] All anchor links work (`/sources#slug`)
- [ ] Citation popover loads on hover
- [ ] Citation click navigates correctly
- [ ] Mobile responsive
- [ ] Type checking passes (`pnpm tsc --noEmit`)

### Post-deployment
- [ ] Lighthouse performance score > 90
- [ ] All external links valid (no 404s)
- [ ] SupaMode can CRUD sources
- [ ] Blog post creation works
- [ ] SEO meta tags render correctly

---

## Appendix: Full Source Migration Data

*See separate file: `scripts/source-data.json`*
