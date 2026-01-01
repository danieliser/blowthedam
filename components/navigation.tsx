"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navGroups = [
    { href: "/", label: "Home", type: "link" as const },
    {
      label: "The Issues",
      type: "dropdown" as const,
      items: [
        { href: "/manatees", label: "Manatees" },
        { href: "/water-quality", label: "Water Quality & Springs" },
      ],
    },
    {
      label: "Learn More",
      type: "dropdown" as const,
      items: [
        { href: "/vision", label: "Vision for Restoration" },
        { href: "/economic-impact", label: "Economic Impact" },
        { href: "/timeline", label: "History & Timeline" },
        { href: "/faq", label: "FAQ" },
      ],
    },
    { href: "/sources", label: "Sources", type: "link" as const },
    { href: "/take-action", label: "Take Action", type: "link" as const },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-xl font-bold text-primary">Restore the Ocklawaha</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {navGroups.map((item) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )
              } else {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary">
                      {item.label}
                      <ChevronDown size={16} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute left-0 top-full pt-2 w-56">
                        <div className="rounded-md border border-border bg-background shadow-lg">
                          <div className="py-1">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
            })}
            <Button size="sm" className="bg-secondary hover:bg-secondary/90">
              Support Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden rounded-md p-2 text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navGroups.map((item) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              } else {
                return (
                  <div key={item.label}>
                    <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">{item.label}</div>
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block rounded-md px-6 py-2 text-base font-medium text-foreground hover:bg-muted"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )
              }
            })}
            <div className="pt-2">
              <Button size="sm" className="w-full bg-secondary hover:bg-secondary/90">
                Support Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
