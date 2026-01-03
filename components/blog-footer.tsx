import Link from "next/link"

export function BlogFooter() {
  return (
    <footer className="border-t border-border bg-muted py-12 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Blow The Dam</p>
          <p className="mt-2">Advocating for the removal of Rodman Dam and restoration of Florida's Ocklawaha River</p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/manatees" className="hover:text-foreground transition-colors">
              Manatees
            </Link>
            <Link href="/springs" className="hover:text-foreground transition-colors">
              Springs
            </Link>
            <Link href="/water-quality" className="hover:text-foreground transition-colors">
              Water Quality
            </Link>
            <Link href="/take-action" className="hover:text-foreground transition-colors">
              Take Action
            </Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
          </div>
          <p className="mt-4">Based on research and advocacy for manatee habitat restoration</p>
        </div>
      </div>
    </footer>
  )
}
