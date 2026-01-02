import { createServerClient } from './supabase';
import type {
  BlogPost,
  BlogPostWithCategory,
  BlogCategory,
} from '@/types/database-helpers';

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
