import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertCircle, ArrowRight, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

export default function WaterQualityPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Restoring Water Quality and Springs
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed">
              A free-flowing river can help restore natural water filtration, improve spring flows, and support a
              healthier ecosystem for all of Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Overview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">The Water Quality Challenge</h2>
            <div className="mt-8 space-y-6 text-pretty leading-relaxed text-foreground">
              <p>
                Florida's waters are facing unprecedented challenges. Algae blooms are worsening in the St. Johns River
                and Indian River Lagoon. Spring flows are declining. Nutrient pollution from stormwater, agriculture,
                and wastewater continues to degrade our most precious water resources.
              </p>
              <p>
                Both supporters and opponents of Rodman Dam agree that water quality is declining. The question is
                whether maintaining an artificial reservoir helps or hinders long-term ecosystem health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Myth vs Fact - Water Quality */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Water Quality: Myth vs. Fact
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Examining claims about the reservoir's impact on water quality
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {/* Myth 1 */}
            <Card className="overflow-hidden border-destructive/20 bg-card">
              <div className="flex flex-col gap-6 p-6 lg:flex-row lg:gap-8">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                    <XCircle className="h-6 w-6 text-destructive" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">
                    Myth: "Rodman filters water and improves clarity"
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    While reservoirs can have a settling basin effect, this is not the same as solving systemic nutrient
                    pollution. The root problems are watershed-wide inputs from stormwater, wastewater, and agriculture.
                    A reservoir doesn't eliminate nutrients—it temporarily stores them.
                  </p>
                  <div className="mt-4 flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <p className="text-sm text-foreground">
                      <strong>Fact:</strong> Natural river systems with healthy riparian zones and wetlands provide
                      superior long-term filtration. A restored Ocklawaha would support natural nutrient processing
                      without requiring ongoing management interventions.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Myth 2 */}
            <Card className="overflow-hidden border-destructive/20 bg-card">
              <div className="flex flex-col gap-6 p-6 lg:flex-row lg:gap-8">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                    <XCircle className="h-6 w-6 text-destructive" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">
                    Myth: "Removing the dam will cause decades of nutrient pollution and algae blooms"
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    This claim assumes unmanaged, instantaneous removal. In reality, restoration would be phased with
                    careful monitoring. Water already moves from Rodman into the St. Johns through drawdowns and
                    releases—the flow isn't new. Short-term pulses can be managed with adaptive strategies.
                  </p>
                  <div className="mt-4 flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <p className="text-sm text-foreground">
                      <strong>Fact:</strong> The real question is short-term vs. long-term impacts. While transitions
                      require careful management, a self-maintaining river system is ultimately more resilient than an
                      aging reservoir requiring constant intervention.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Myth 3 */}
            <Card className="overflow-hidden border-destructive/20 bg-card">
              <div className="flex flex-col gap-6 p-6 lg:flex-row lg:gap-8">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                    <XCircle className="h-6 w-6 text-destructive" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">
                    Myth: "The dam is the only thing recharging the aquifer"
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    This claim lacks evidence. Even if a reservoir could contribute to aquifer recharge, the compacted
                    muck and sediment layer on the pool floor likely reduces infiltration. Recharge would be uneven and
                    concentrated at channels, karst formations, and spring vents—not uniformly across the pool.
                  </p>
                  <div className="mt-4 flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <p className="text-sm text-foreground">
                      <strong>Fact:</strong> Florida's aquifer is recharged through rainfall and natural percolation
                      across the entire watershed—not by artificial reservoirs. Restoring natural hydrology supports
                      more consistent, widespread recharge.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Springs Restoration Section */}
      <section id="springs" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Restoring Florida's Springs</h2>
              <div className="mt-8 space-y-6 text-pretty leading-relaxed text-foreground">
                <p>
                  Florida's springs are legendary—crystal-clear waters that once attracted visitors from around the
                  world. But spring flows have been declining for decades, and many once-pristine springs are now choked
                  with algae and vegetation.
                </p>
                <p>
                  Silver Springs, once one of Florida's crown jewels, is a shadow of its former self. The connection
                  between the Ocklawaha River and Silver Springs complex has been disrupted by the dam.
                </p>
                <p>
                  While opponents claim that "spring flows won't increase," evidence from drawdown periods shows that
                  lowering the reservoir pool can increase spring discharge due to hydraulic gradient effects. The goal
                  isn't overnight transformation—it's long-term restoration of natural spring function.
                </p>
              </div>
            </div>

            <Card className="h-fit border-secondary bg-secondary/5 p-6">
              <h3 className="text-xl font-bold text-foreground">How Springs Work</h3>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Springs occur where the aquifer intersects the land surface, allowing groundwater to discharge
                  naturally. Spring flow depends on the hydraulic gradient—the difference in water pressure between the
                  aquifer and surface water.
                </p>
                <p>
                  When a reservoir artificially raises surface water levels, it can reduce the hydraulic gradient and
                  suppress spring discharge. Removing the dam would restore natural gradients and allow springs to flow
                  more freely.
                </p>
                <div className="mt-6 rounded-lg bg-secondary/10 p-4">
                  <AlertCircle className="mb-2 h-5 w-5 text-secondary" />
                  <p className="text-xs">
                    <strong>Note:</strong> Short-term fluctuations can occur during transitions, but the focus should be
                    on long-term restoration of natural spring function, not quarterly variations.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* The Real Solution */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Natural Systems Are More Resilient</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground">
              The debate isn't about whether we can instantly solve all water quality problems by removing one dam. It's
              about choosing between a managed, artificial system that requires constant intervention versus a natural,
              self-maintaining river ecosystem that can adapt and recover over time.
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground">
              A restored Ocklawaha River would reconnect the St. Johns to the Silver River system, improve spring flows,
              support natural filtration, and create a more resilient watershed for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Support River Restoration</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed">
              Cleaner water and healthier springs start with restoring natural river systems. Add your voice to the call
              for Rodman Dam removal.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/take-action">
                  Take Action
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
