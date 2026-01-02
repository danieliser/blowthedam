import { createServerClient } from './supabase';
import type {
  Source,
  SourceCategory,
  SourceWithCategory,
  SourceWithPassages,
  SourcesByCategory,
  CitationData,
} from '@/types/database-helpers';

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
