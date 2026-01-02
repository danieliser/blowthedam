import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Droplets, Fish, Waves } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Restore Florida's Ocklawaha River
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed sm:text-xl">
              The Rodman Dam has blocked one of Florida's most beautiful rivers for over 50 years. It's time to restore
              critical manatee habitat, improve water quality, and bring back a thriving ecosystem for future
              generations.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/take-action">
                  Take Action Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/manatees">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Issues Grid */}
      <section className="bg-gradient-to-b from-background via-background to-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Remove the Dam?</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Three critical reasons why restoring the Ocklawaha River is essential for Florida's future
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Manatees Card */}
            <Card className="group overflow-hidden border-border bg-card transition-all hover:shadow-lg">
              <Link href="/manatees" className="block">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img
                    src="/manatee-swimming-in-clear-spring-water.jpg"
                    alt="Manatee habitat"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-primary">
                    <Fish className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Manatee Survival</h3>
                  </div>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    Hundreds of manatees died in recent years due to habitat loss. Removing the dam would restore
                    critical warm-water refuge and food sources in the Ocklawaha River basin.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                    Learn about manatees
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Card>

            {/* Water Quality Card */}
            <Card className="group overflow-hidden border-border bg-card transition-all hover:shadow-lg">
              <Link href="/water-quality" className="block">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img
                    src="/crystal-clear-florida-spring-water-flowing.jpg"
                    alt="Water quality"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-primary">
                    <Droplets className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Cleaner Water</h3>
                  </div>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    The reservoir degrades water quality, harming springs and downstream ecosystems. A free-flowing
                    river would restore natural filtration and support aquatic life.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                    Explore water quality
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Card>

            {/* Springs Card */}
            <Card className="group overflow-hidden border-border bg-card transition-all hover:shadow-lg sm:col-span-2 lg:col-span-1">
              <Link href="/sources" className="block">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img
                    src="/pristine-florida-spring-with-lush-vegetation.jpg"
                    alt="Florida springs"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-primary">
                    <Waves className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Evidence-Based</h3>
                  </div>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    Our advocacy is backed by peer-reviewed research, government reports, and scientific studies.
                    Explore the sources behind the restoration movement.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                    View our sources
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Blow the Dam Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/30 via-background to-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-card shadow-2xl">
            <div className="relative aspect-[16/9] sm:aspect-[21/9]">
              <img
                src="/rodman-dam-explosion.jpg"
                alt="Rodman Dam Explosion - Opening the gateways to Silver Springs & the St. Johns"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-12">
                <div className="text-center">
                  <h2 className="text-balance text-3xl font-bold text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
                    It's Time to Blow the Dam
                  </h2>
                  <p className="mt-4 text-pretty text-lg text-white/95 drop-shadow-md sm:text-xl lg:text-2xl">
                    Opening the gateways to Silver Springs & the St. Johns River
                  </p>
                  <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" variant="secondary" asChild>
                      <Link href="/take-action">
                        Join the Movement
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                      asChild
                    >
                      <Link href="/manatees">Learn Why</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-secondary py-16 text-secondary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Voice Matters</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed">
              Join thousands of Floridians calling for the removal of Rodman Dam. Together, we can restore one of our
              state's most important river systems and protect wildlife for generations to come.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
                asChild
              >
                <Link href="/take-action">Sign the Petition</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
                asChild
              >
                <Link href="/take-action#contact">Contact Officials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Restore the Ocklawaha</p>
            <p className="mt-2">
              Advocating for the removal of Rodman Dam and restoration of Florida's Ocklawaha River
            </p>
            <p className="mt-4">Based on research and advocacy for manatee habitat restoration</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
