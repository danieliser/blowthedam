import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertCircle, ArrowRight, CheckCircle, XCircle, Droplets } from "lucide-react"
import Link from "next/link"

export default function SpringsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/pristine-florida-spring-with-lush-vegetation.jpg"
            alt="Pristine Florida spring"
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Restoring Florida's Springs</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed">
              Crystal-clear springs are essential warm-water refuges for manatees and crown jewels of Florida's natural
              heritage. The Rodman Dam disrupts their natural function.
            </p>
          </div>
        </div>
      </section>

      {/* Springs Crisis Overview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">The Springs Crisis</h2>
              <div className="mt-8 space-y-6 text-pretty leading-relaxed text-foreground">
                <p>
                  Florida's springs were once world-famous—crystal-clear waters so pure you could see straight to the
                  bottom, teeming with fish and visited by hundreds of manatees seeking warmth in winter. Today, many
                  springs are shadows of their former selves.
                </p>
                <p>
                  <strong>Silver Springs</strong>, once one of Florida's crown jewels and a major tourist destination,
                  has experienced dramatic flow declines. The connection between the Ocklawaha River and the Silver
                  River/Silver Springs complex has been disrupted by Rodman Dam.
                </p>
                <p>
                  Spring flows are declining across Florida due to over-pumping, development, and disrupted hydrology.
                  Rodman Dam compounds the problem by artificially raising surface water levels, which can suppress
                  spring discharge by reducing the hydraulic gradient.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="/crystal-clear-florida-spring-water-flowing.jpg"
                  alt="Crystal clear spring water"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Card className="border-l-4 border-l-secondary bg-gradient-to-br from-secondary/10 to-background p-6 shadow-md">
              <div className="flex items-start gap-3">
                <Droplets className="mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="text-lg font-bold text-foreground">Why Springs Matter for Manatees</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Springs provide year-round warm water (72°F) that manatees depend on for winter survival. Without
                    access to warm-water refuges, manatees can die from cold stress. Connecting the Ocklawaha to the
                    Silver Springs system would expand critical manatee habitat.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How Springs Work */}
      <section className="border-t-4 border-primary bg-gradient-to-b from-background to-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
              Understanding Spring Hydrology
            </h2>
            <p className="mt-4 text-center text-pretty text-lg text-muted-foreground">
              How the dam suppresses springs and what restoration can achieve
            </p>

            <div className="mt-12 space-y-8">
              <Card className="overflow-hidden border-secondary bg-card p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground">The Hydraulic Gradient</h3>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    Springs occur where groundwater from the Floridan Aquifer discharges naturally to the surface. The
                    flow rate depends on the <strong>hydraulic gradient</strong>—the difference in water pressure
                    between the aquifer and the surface water.
                  </p>
                  <p>
                    <strong>Higher surface water = Lower gradient = Reduced spring flow</strong>
                  </p>
                  <p>
                    When Rodman Dam artificially raises the Ocklawaha River's surface elevation, it reduces the pressure
                    difference that drives spring discharge. This can suppress or even reverse spring flows in some
                    locations.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden border-secondary bg-card p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground">Evidence from Drawdowns</h3>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    During drawdown periods (when the reservoir is lowered for vegetation management), spring discharge
                    increases. This demonstrates that removing the dam's influence on surface water elevation can
                    restore more natural spring function.
                  </p>
                  <p>
                    While opponents claim "spring flows won't increase," the evidence from drawdowns contradicts this.
                    The goal isn't instant transformation—it's long-term restoration of natural hydraulic gradients.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden border-secondary bg-card p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground">Silver Springs Connection</h3>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    The Silver River connects Silver Springs to the Ocklawaha River. Before the dam, this was a
                    free-flowing corridor where manatees could travel between warm-water refuges and the St. Johns River
                    system.
                  </p>
                  <p>
                    Restoring the Ocklawaha would reconnect this critical pathway, expand manatee habitat, and support
                    the recovery of one of Florida's most iconic spring systems.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Myth vs Fact */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Springs: Myth vs. Fact</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Addressing common misconceptions about springs restoration
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
                  <h3 className="text-xl font-bold text-foreground">Myth: "Springs don't matter"</h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    Some opponents dismiss springs as irrelevant to the dam debate. This ignores the fundamental role
                    springs play as warm-water refuges for manatees and as ecological anchors for river health.
                  </p>
                  <div className="mt-4 flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <p className="text-sm text-foreground">
                      <strong>Fact:</strong> Florida's springs are essential manatee habitat. On January 1, 2026, Blue
                      Spring State Park counted 697 manatees—demonstrating how critical accessible warm-water refuges
                      are for survival. Restoring Ocklawaha connectivity would expand this vital network.
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
                    Myth: "The dam is needed to recharge the aquifer and support springs"
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    This claim reverses cause and effect. Florida's aquifer is recharged by rainfall across the entire
                    watershed. A reservoir with compacted sediment on its floor may actually reduce infiltration
                    compared to a natural river with permeable channels and karst features.
                  </p>
                  <div className="mt-4 flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <p className="text-sm text-foreground">
                      <strong>Fact:</strong> Natural rivers support aquifer recharge through distributed percolation.
                      The dam artificially elevates surface water, which can suppress spring discharge—the opposite of
                      helping springs.
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
                    Myth: "Spring flows won't increase if the dam is removed"
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    This claim ignores evidence from drawdown periods when lowering the reservoir increases spring
                    discharge. While restoration won't produce instant results, the long-term trajectory favors natural
                    spring function over managed suppression.
                  </p>
                  <div className="mt-4 flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <p className="text-sm text-foreground">
                      <strong>Fact:</strong> Restoration is about long-term recovery, not quarterly metrics. Allowing
                      natural hydrology to reassert itself gives springs the best chance for sustained recovery.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Story: Silver Springs Potential */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
              Silver Springs: A Recovery Opportunity
            </h2>
            <p className="mt-4 text-center text-pretty text-lg text-muted-foreground">
              Restoring connectivity could help reverse decades of decline
            </p>

            <div className="mt-12">
              <Card className="overflow-hidden border-l-4 border-l-secondary bg-card p-8 shadow-lg">
                <div className="space-y-6 text-pretty leading-relaxed">
                  <p className="text-foreground">
                    Silver Springs was once Florida's premier natural attraction—a crystal-clear window into the aquifer
                    with flows that supported glass-bottom boat tours and attracted visitors worldwide. Today, flow has
                    declined significantly, algae blooms are common, and the spring's ecological health has diminished.
                  </p>
                  <p className="text-muted-foreground">
                    The Silver River connects this spring system to the Ocklawaha. Before Rodman Dam, manatees could
                    travel freely between the St. Johns River and Silver Springs, using the warm water as a critical
                    winter refuge. The dam broke that connection.
                  </p>
                  <p className="text-muted-foreground">
                    Restoring the Ocklawaha would not solve all of Silver Springs' problems—water quality and
                    over-pumping also need attention—but it would remove one major barrier to recovery and reconnect an
                    essential piece of Florida's natural heritage.
                  </p>
                  <div className="mt-6 rounded-lg bg-secondary/10 p-4">
                    <AlertCircle className="mb-2 h-5 w-5 text-secondary" />
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Spring restoration is a long-term process requiring watershed-scale
                      solutions. Dam removal is one critical step in a larger conservation strategy.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Restore Our Springs</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed">
              Florida's springs are irreplaceable. Help restore connectivity and give these natural treasures a chance
              to recover.
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
