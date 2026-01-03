"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { Citation } from "./citation"

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        // Detect citation links and render as Citation component
        a: ({ href, children, ...props }) => {
          if (href?.startsWith("/sources#")) {
            const slug = href.replace("/sources#", "")
            return <Citation sourceSlug={slug}>{children}</Citation>
          }
          return (
            <a
              href={href}
              {...props}
              className="text-secondary underline hover:text-secondary/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          )
        },
        h2: ({ children }) => <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">{children}</h2>,
        h3: ({ children }) => <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">{children}</h3>,
        p: ({ children }) => <p className="mb-4 leading-relaxed text-foreground">{children}</p>,
        ul: ({ children }) => <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>,
        ol: ({ children }) => <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>,
        blockquote: ({ children }) => (
          <blockquote className="my-4 border-l-4 border-secondary pl-4 italic text-muted-foreground">
            {children}
          </blockquote>
        ),
        code: ({ children, className }) => {
          const isInline = !className
          if (isInline) {
            return <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">{children}</code>
          }
          return <code className="block rounded bg-muted p-4 font-mono text-sm overflow-x-auto">{children}</code>
        },
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
