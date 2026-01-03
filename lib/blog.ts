import { createServerClient } from "./supabase"
import type { BlogPostWithCategory, BlogCategory, Tag } from "@/types/database-helpers"

// ============================================
// Blog Category Functions
// ============================================

export async function getBlogCategories(): Promise<BlogCategory[]> {
  const supabase = createServerClient()

  const { data, error } = await supabase.from("blog_categories").select("*").order("sort_order", { ascending: true })

  if (error) {
    console.error("Error fetching blog categories:", error)
    return []
  }

  return data || []
}

// ============================================
// Blog Post Functions
// ============================================

export async function getPublishedPosts(limit?: number): Promise<BlogPostWithCategory[]> {
  const supabase = createServerClient()

  let query = supabase
    .from("blog_posts")
    .select(`
      *,
      category:blog_categories(*),
      blog_post_tags(tag:tags(*))
    `)
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false, nullsFirst: false })

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  if (error) {
    console.error("Error fetching published posts:", error)
    return []
  }

  // Transform the junction table data into a flat tags array
  return (data || []).map((post: any) => ({
    ...post,
    tags: post.blog_post_tags?.map((junction: any) => junction.tag).filter(Boolean) || [],
  }))
}

export async function getPostBySlug(slug: string): Promise<BlogPostWithCategory | null> {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from("blog_posts")
    .select(`
      *,
      category:blog_categories(*),
      blog_post_tags(tag:tags(*))
    `)
    .eq("slug", slug)
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .single()

  if (error) {
    console.error(`Error fetching post ${slug}:`, error)
    return null
  }

  // Transform the junction table data
  const post: any = data
  return {
    ...post,
    tags: post.blog_post_tags?.map((junction: any) => junction.tag).filter(Boolean) || [],
  }
}

export async function getPostsByCategory(categorySlug: string): Promise<BlogPostWithCategory[]> {
  const supabase = createServerClient()

  const { data: category } = await supabase.from("blog_categories").select("id").eq("slug", categorySlug).single()

  if (!category) return []

  const { data, error } = await supabase
    .from("blog_posts")
    .select(`
      *,
      category:blog_categories(*),
      blog_post_tags(tag:tags(*))
    `)
    .eq("category_id", category.id)
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false, nullsFirst: false })

  if (error) {
    console.error(`Error fetching posts for category ${categorySlug}:`, error)
    return []
  }

  return (data || []).map((post: any) => ({
    ...post,
    tags: post.blog_post_tags?.map((junction: any) => junction.tag).filter(Boolean) || [],
  }))
}

export async function getPostsByTag(tagSlug: string): Promise<BlogPostWithCategory[]> {
  const supabase = createServerClient()

  const { data: tag } = await supabase.from("tags").select("id").eq("slug", tagSlug).single()

  if (!tag) return []

  const { data: junctionData } = await supabase.from("blog_post_tags").select("post_id").eq("tag_id", tag.id)

  if (!junctionData || junctionData.length === 0) return []

  const postIds = junctionData.map((j) => j.post_id)

  const { data, error } = await supabase
    .from("blog_posts")
    .select(`
      *,
      category:blog_categories(*),
      blog_post_tags(tag:tags(*))
    `)
    .in("id", postIds)
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false, nullsFirst: false })

  if (error) {
    console.error(`Error fetching posts with tag ${tagSlug}:`, error)
    return []
  }

  return (data || []).map((post: any) => ({
    ...post,
    tags: post.blog_post_tags?.map((junction: any) => junction.tag).filter(Boolean) || [],
  }))
}

// For sitemap generation
export async function getAllPostSlugs(): Promise<string[]> {
  const supabase = createServerClient()

  const { data, error } = await supabase.from("blog_posts").select("slug").eq("status", "published")

  if (error) {
    console.error("Error fetching post slugs:", error)
    return []
  }

  return (data || []).map((p) => p.slug)
}

// ============================================
// Tag Functions
// ============================================

export async function getAllTags(): Promise<Tag[]> {
  const supabase = createServerClient()

  const { data, error } = await supabase.from("tags").select("*").order("name")

  if (error) {
    console.error("Error fetching tags:", error)
    return []
  }

  return data || []
}

export async function getTagBySlug(tagSlug: string) {
  const supabase = createServerClient()
  const { data, error } = await supabase.from("tags").select("*").eq("slug", tagSlug).single()
  if (error) return null
  return data
}

export async function getCategoryBySlug(categorySlug: string) {
  const supabase = createServerClient()
  const { data, error } = await supabase.from("blog_categories").select("*").eq("slug", categorySlug).single()
  if (error) return null
  return data
}

// ============================================
// Helper Functions
// ============================================

export function getSupabaseImageUrl(path: string | null, options?: { width?: number; height?: number }): string | null {
  if (!path) return null
  // If already a full URL, return as-is
  if (path.startsWith("http://") || path.startsWith("https://")) return path
  // Convert relative path to full Supabase storage URL
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const baseUrl = `${supabaseUrl}/storage/v1/object/public/${path}`

  // Add transformation parameters if provided
  if (options?.width || options?.height) {
    const params = new URLSearchParams()
    if (options.width) params.set("width", options.width.toString())
    if (options.height) params.set("height", options.height.toString())
    return `${baseUrl}?${params.toString()}`
  }

  return baseUrl
}

export async function getAdjacentPosts(currentPostSlug: string): Promise<{
  previous: BlogPostWithCategory | null
  next: BlogPostWithCategory | null
}> {
  const supabase = createServerClient()

  // Get current post's published_at date
  const { data: currentPost } = await supabase
    .from("blog_posts")
    .select("published_at")
    .eq("slug", currentPostSlug)
    .single()

  if (!currentPost) {
    return { previous: null, next: null }
  }

  // Get previous post (older)
  const { data: previousPost } = await supabase
    .from("blog_posts")
    .select(`
      *,
      category:blog_categories(*),
      blog_post_tags(tag:tags(*))
    `)
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .lt("published_at", currentPost.published_at)
    .order("published_at", { ascending: false })
    .limit(1)
    .maybeSingle()

  // Get next post (newer)
  const { data: nextPost } = await supabase
    .from("blog_posts")
    .select(`
      *,
      category:blog_categories(*),
      blog_post_tags(tag:tags(*))
    `)
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .gt("published_at", currentPost.published_at)
    .order("published_at", { ascending: true })
    .limit(1)
    .maybeSingle()

  return {
    previous: previousPost
      ? {
          ...previousPost,
          tags: previousPost.blog_post_tags?.map((junction: any) => junction.tag).filter(Boolean) || [],
        }
      : null,
    next: nextPost
      ? {
          ...nextPost,
          tags: nextPost.blog_post_tags?.map((junction: any) => junction.tag).filter(Boolean) || [],
        }
      : null,
  }
}
