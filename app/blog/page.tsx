import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { BlogFooter } from "@/components/blog-footer"
import { getPublishedPosts, getBlogCategories, getSupabaseImageUrl } from "@/lib/blog"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import { format } from "date-fns"

export const metadata = {
  title: "Blog | Blow The Dam",
  description:
    "Latest updates, research, and advocacy news about Rodman Dam removal and Ocklawaha River restoration. Evidence-based arguments for restoring Florida's most degraded river system.",
  openGraph: {
    title: "Blog | Blow The Dam",
    description: "Latest updates and research about Rodman Dam removal and Ocklawaha River restoration.",
    type: "website",
  },
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPublishedPosts(), getBlogCategories()])

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-muted/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Updates, research, and advocacy news about Rodman Dam removal and Ocklawaha River restoration.
          </p>
        </div>
      </div>

      {/* Categories */}
      {categories.length > 0 && (
        <div className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-2">
              <Link href="/blog">
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary hover:text-secondary-foreground">
                  All Posts
                </Badge>
              </Link>
              {categories.map((category) => (
                <Link key={category.id} href={`/blog/category/${category.slug}`}>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-secondary hover:text-secondary-foreground"
                  >
                    {category.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Posts Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
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
                    <div className="flex items-center gap-2 mb-3">
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

      <BlogFooter />
    </>
  )
}
