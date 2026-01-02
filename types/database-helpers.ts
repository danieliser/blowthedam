// ============================================
// Database Helper Types for BlowTheDam.com
// Convenience aliases and joined types
// ============================================

import type { Database } from './database';

// ============================================
// Table Row Aliases
// ============================================

export type SourceCategory = Database['public']['Tables']['source_categories']['Row'];
export type SourceCategoryInsert = Database['public']['Tables']['source_categories']['Insert'];
export type SourceCategoryUpdate = Database['public']['Tables']['source_categories']['Update'];

export type Source = Database['public']['Tables']['sources']['Row'];
export type SourceInsert = Database['public']['Tables']['sources']['Insert'];
export type SourceUpdate = Database['public']['Tables']['sources']['Update'];

export type SourcePassage = Database['public']['Tables']['source_passages']['Row'];
export type SourcePassageInsert = Database['public']['Tables']['source_passages']['Insert'];
export type SourcePassageUpdate = Database['public']['Tables']['source_passages']['Update'];

export type BlogCategory = Database['public']['Tables']['blog_categories']['Row'];
export type BlogCategoryInsert = Database['public']['Tables']['blog_categories']['Insert'];
export type BlogCategoryUpdate = Database['public']['Tables']['blog_categories']['Update'];

export type BlogPost = Database['public']['Tables']['blog_posts']['Row'];
export type BlogPostInsert = Database['public']['Tables']['blog_posts']['Insert'];
export type BlogPostUpdate = Database['public']['Tables']['blog_posts']['Update'];

export type Media = Database['public']['Tables']['media']['Row'];
export type MediaInsert = Database['public']['Tables']['media']['Insert'];
export type MediaUpdate = Database['public']['Tables']['media']['Update'];

// ============================================
// Enum Types
// ============================================

export type SourceType = Database['public']['Enums']['source_type'];
export type PostStatus = Database['public']['Enums']['post_status'];

// ============================================
// Joined Types for Queries
// ============================================

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

export interface BlogPostWithCategory extends BlogPost {
  category: BlogCategory | null;
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
