import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { BlogFooter } from "@/components/blog-footer"
import { MarkdownContent } from "@/components/markdown-content"
import { getPostBySlug, getAllPostSlugs, getSupabaseImageUrl, getAdjacentPosts } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react"
import { format } from "date-fns"

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  const title = post.meta_title || `${post.title} | Blow The Dam`
  const description = post.meta_description || post.excerpt || post.title
  const ogImage = getSupabaseImageUrl(post.og_image) || getSupabaseImageUrl(post.featured_image) || undefined
  const canonical = post.canonical_url || undefined

  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.published_at || undefined,
      authors: post.author_name ? [post.author_name] : undefined,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  const [post, { previous, next }] = await Promise.all([getPostBySlug(slug), getAdjacentPosts(slug)])

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />

      {/* Hero Section with Featured Image */}
      <div className="relative">
        {post.featured_image && (
          <div className="relative h-[400px] w-full">
            <Image
              src={
                getSupabaseImageUrl(post.featured_image, { width: 1200, height: 600 || "/placeholder.svg" }) ||
                "/placeholder.svg"
              }
              alt={post.featured_image_alt || post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
        )}

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Post Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {post.category && (
              <Link href={`/blog/category/${post.category.slug}`}>
                <Badge variant="secondary" className="hover:bg-secondary/80">
                  {post.category.name}
                </Badge>
              </Link>
            )}
            {post.author_name && <span className="text-sm text-muted-foreground">By {post.author_name}</span>}
            {post.published_at && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={16} />
                {format(new Date(post.published_at), "MMMM d, yyyy")}
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-4">{post.title}</h1>

          {post.excerpt && <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{post.excerpt}</p>}

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Link key={tag.id} href={`/blog/tag/${tag.slug}`}>
                  <Badge variant="outline" className="hover:bg-secondary">
                    {tag.name}
                  </Badge>
                </Link>
              ))}
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <MarkdownContent content={post.content} />
          </div>

          {/* Next/Previous Post Navigation */}
          {(previous || next) && (
            <div className="mt-16 pt-8 border-t border-border">
              <div className="grid gap-8 md:grid-cols-2">
                {previous && (
                  <Link
                    href={`/blog/${previous.slug}`}
                    className="group block p-6 border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                      <ArrowLeft size={16} />
                      Previous Post
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {previous.title}
                    </h3>
                  </Link>
                )}
                {next && (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group block p-6 border border-border rounded-lg hover:border-primary transition-colors md:text-right"
                  >
                    <div className="text-sm text-muted-foreground mb-2 flex items-center justify-end gap-2">
                      Next Post
                      <ArrowRight size={16} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {next.title}
                    </h3>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <BlogFooter />
    </>
  )
}
