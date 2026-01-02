import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertCircle, ArrowRight, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import { Citation } from "@/components/citation"

export default function WaterQualityPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/florida-river-ecosystem.jpg"
            alt="Healthy Florida river ecosystem"
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Water Quality & Ecosystem Health
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed">
              Natural rivers filter water, support biodiversity, and adapt to change. Artificial reservoirs require
              constant management and can exacerbate pollution problems.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Overview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-1">
              <img
                src="/healthy-river-restoration.jpg"
                alt="Healthy restored river ecosystem"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">The Water Quality Challenge</h2>
              <div className="mt-8 space-y-6 text-pretty leading-relaxed text-foreground">
                <p>
                  <Citation slug="riverkeeper-algae">
                    Florida's waters face unprecedented challenges. Algae blooms are worsening in the St. Johns River
                    and Indian River Lagoon
                  </Citation>
                  .{" "}
                  <Citation slug="riverkeeper-sav">
                    Submerged aquatic vegetation (SAV) is declining
                  </Citation>
                  . Nutrient pollution from stormwater, agriculture, and wastewater continues to degrade our waterways.
                </p>
                <p>
                  Both supporters and opponents of Rodman Dam agree that water quality is declining. The question is
                  whether maintaining an artificial reservoir helps or hinders long-term ecosystem health.
                </p>
                <p>
                  The evidence suggests that while reservoirs can temporarily store some nutrients, they don't solve the
                  root causes of pollution. Natural rivers with healthy wetlands and riparian zones provide superior
                  long-term filtration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth vs Fact - Water Quality */}
      <section className="border-t-4 border-primary bg-gradient-to-b from-muted/50 to-background py-16 sm:py-24">
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
            <Card className="overflow-hidden border-l-4 border-l-destructive border-destructive/20 bg-card shadow-md">
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
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <p className="text-sm text-foreground">
                      <strong>Fact:</strong> Research shows that phosphorus can be retained in some reservoirs under
                      specific conditions. However, this doesn't address watershed-wide pollution sources or provide
                      long-term ecosystem resilience. Natural river systems with healthy riparian zones and wetlands
                      provide superior filtration without requiring constant management.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Myth 2 */}
            <Card className="overflow-hidden border-l-4 border-l-destructive border-destructive/20 bg-card shadow-md">
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
                    careful monitoring. Short-term pulses are a legitimate concern—which is why studies, monitoring, and
                    adaptive management are essential parts of any restoration plan.
                  </p>
                  <div className="mt-4 flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <p className="text-sm text-foreground">
                      <strong>Fact:</strong> Water already moves from Rodman into the St. Johns through drawdowns and
                      releases. The key question is short-term management vs. long-term ecosystem health. A
                      self-maintaining natural river is ultimately more resilient than an aging reservoir requiring
                      perpetual intervention.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Myth 3 */}
            <Card className="overflow-hidden border-l-4 border-l-destructive border-destructive/20 bg-card shadow-md">
              <div className="flex flex-col gap-6 p-6 lg:flex-row lg:gap-8">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                    <XCircle className="h-6 w-6 text-destructive" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">
                    Myth: "Algae blooms are caused by removal, not the reservoir"
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    Algae blooms are driven by watershed-wide nutrient inputs combined with warm water, low light
                    penetration, and slow-moving conditions—all of which can be exacerbated in reservoirs. The St. Johns
                    River already experiences blooms; attributing them solely to potential restoration ignores systemic
                    pollution sources.
                  </p>
                  <div className="mt-4 flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <p className="text-sm text-foreground">
                      <strong>Fact:</strong> Natural rivers with adequate flow can help reduce bloom severity by
                      preventing stagnation, supporting SAV that filters water, and maintaining healthier dissolved
                      oxygen levels. The focus should be on watershed-wide nutrient reduction, not preserving artificial
                      impoundments.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SAV & Light Limitation */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Submerged Aquatic Vegetation (SAV)</h2>
              <div className="mt-8 space-y-6 text-pretty leading-relaxed text-foreground">
                <p>
                  <Citation slug="riverkeeper-sav">
                    SAV—underwater grasses like eelgrass and tape grass—are critical for ecosystem health. They provide
                    food for manatees, habitat for fish, and natural filtration by absorbing nutrients and stabilizing
                    sediment
                  </Citation>
                  .
                </p>
                <p>
                  However, SAV requires sunlight to grow. When water is dark from tannins (naturally-occurring organic
                  compounds from vegetation decay) or turbid from sediment and algae, light can't penetrate deep enough
                  to support healthy SAV beds.
                </p>
                <p>
                  Both reservoir and river systems face SAV challenges. The question is which system—natural or
                  managed—provides better conditions for long-term SAV recovery. Evidence suggests that flowing rivers
                  with healthy riparian buffers support more resilient ecosystems.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-secondary bg-gradient-to-br from-secondary/10 to-background p-6 shadow-md">
                <h3 className="text-lg font-bold text-foreground">Tannins vs. Algae</h3>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    <Citation slug="apms-journal">
                      Tannins are natural—they come from decaying leaves and organic matter and give Florida's rivers
                      their characteristic tea-colored appearance. Tannins limit light but aren't a pollution problem
                    </Citation>
                    .
                  </p>
                  <p>
                    <Citation slug="riverkeeper-algae">
                      Algae blooms, however, are driven by excess nutrients (nitrogen and phosphorus) and indicate
                      ecosystem imbalance
                    </Citation>
                    . Dense algae blocks light, depletes oxygen, and harms water quality far more than natural tannins.
                  </p>
                  <p>
                    Natural rivers balance tannins with flow and seasonal variation. Stagnant reservoirs can amplify
                    both tannin accumulation and algae growth, creating compounding light limitation problems.
                  </p>
                </div>
              </Card>

              <Card className="border-l-4 border-l-secondary bg-gradient-to-br from-secondary/10 to-background p-6 shadow-md">
                <h3 className="text-lg font-bold text-foreground">Hurricane Irma's Impact</h3>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    <Citation slug="sjrwmd-sav">
                      After Hurricane Irma in 2017, massive inputs of vegetation and organic matter from flooding
                      significantly increased tannin levels and darkened the water throughout the St. Johns system. This
                      stressed SAV by reducing light penetration
                    </Citation>
                    .
                  </p>
                  <p>
                    This demonstrates how major disturbances affect both reservoir and river systems. The question is
                    recovery trajectory: Does a natural system rebound better than a managed one?
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Solution */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Natural Systems Are More Resilient</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground">
              The debate isn't about whether we can instantly solve all water quality problems by removing one dam. It's
              about choosing between a managed, artificial system that requires constant intervention versus a natural,
              self-maintaining river ecosystem that can adapt and recover over time.
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground">
              A restored Ocklawaha River would support natural filtration through wetlands and riparian zones, reduce
              stagnation that fuels algae blooms, and create a more resilient watershed for future generations.
            </p>
            <div className="mt-10 rounded-lg border-l-4 border-l-secondary bg-secondary/5 p-6 text-left">
              <AlertCircle className="mb-4 h-6 w-6 text-secondary" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong>Important context:</strong> Water quality challenges exist throughout Florida. No single action
                will solve systemic pollution. But choosing restoration over perpetual reservoir management gives the
                ecosystem the best chance for long-term health. Short-term transitions require monitoring and adaptive
                strategies—which is why careful planning and phased implementation matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Support Natural Water Quality</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed">
              Healthier ecosystems start with natural river systems. Add your voice to the call for Rodman Dam removal.
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
            <p className="mt-8 text-sm text-primary-foreground/80">
              Want to verify these claims?{" "}
              <Link href="/sources" className="underline hover:text-primary-foreground">
                View our sources and references
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
