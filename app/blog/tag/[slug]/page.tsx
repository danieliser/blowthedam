import { Suspense } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { BlogFooter } from "@/components/blog-footer"
import { getPostsByTag, getTagBySlug, getSupabaseImageUrl } from "@/lib/blog"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Tag } from "lucide-react"
import { format } from "date-fns"

interface TagPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const tags = await getTagBySlug()
  return tags.map((tag) => ({ slug: tag.slug }))
}

export async function generateMetadata({ params }: TagPageProps) {
  const { slug } = await params
  const tag = await getTagBySlug(slug)

  if (!tag) {
    return { title: "Tag Not Found" }
  }

  return {
    title: `${tag.name} | Blog | Blow The Dam`,
    description: `Posts tagged with ${tag.name}`,
    openGraph: {
      title: `${tag.name} | Blog`,
      description: `Posts tagged with ${tag.name}`,
      type: "website",
    },
  }
}

async function TagContent({ slug }: { slug: string }) {
  const [posts, tag] = await Promise.all([getPostsByTag(slug), getTagBySlug(slug)])

  if (!tag) {
    notFound()
  }

  return (
    <>
      <div className="bg-gradient-to-b from-background to-muted/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Tag className="text-secondary" size={32} />
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl">{tag.name}</h1>
          </div>
          <p className="text-lg text-muted-foreground">Posts tagged with "{tag.name}"</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts with this tag yet.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col">
                  {post.featured_image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={
                          getSupabaseImageUrl(post.featured_image, { width: 600, height: 400 || "/placeholder.svg" }) ||
                          "/placeholder.svg"
                        }
                        alt={post.featured_image_alt || post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      {post.category && <Badge variant="secondary">{post.category.name}</Badge>}
                      {post.published_at && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar size={14} />
                          {format(new Date(post.published_at), "MMM d, yyyy")}
                        </div>
                      )}
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-foreground">{post.title}</h2>
                    {post.excerpt && (
                      <p className="text-muted-foreground text-sm line-clamp-3 flex-1">{post.excerpt}</p>
                    )}
                    <div className="mt-4 space-y-2">
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {post.tags.map((tag) => (
                            <Badge key={tag.id} variant="outline" className="text-xs">
                              {tag.name}
                            </Badge>
                          ))}
                        </div>
                      )}
                      {post.author_name && <p className="text-xs text-muted-foreground">By {post.author_name}</p>}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params

  return (
    <>
      <Navigation />
      <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
        <TagContent slug={slug} />
      </Suspense>
      <BlogFooter />
    </>
  )
}
