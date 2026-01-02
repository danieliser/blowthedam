import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertCircle, ArrowRight, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

export default function ManateesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/manatee-swimming-in-clear-spring-water.jpg"
            alt="Manatee in clear spring water"
            className="h-full w-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Manatees Need Natural Habitat
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed">
              Hundreds of manatees have died in recent years due to habitat loss. Removing Rodman Dam would restore
              critical warm-water refuges and natural food sources in a connected river-spring system.
            </p>
          </div>
        </div>
      </section>

      {/* The Reality Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">The Manatee Crisis</h2>
              <div className="mt-8 space-y-6 text-pretty leading-relaxed text-foreground">
                <p>
                  Florida's manatees are facing unprecedented challenges. Over 1,000 manatees died in 2021 alone, with
                  hundreds more in subsequent years. The primary cause: loss of seagrass beds and warm-water refuges
                  that manatees depend on for survival.
                </p>
                <p>
                  Manatees need two critical elements to thrive: <strong>warm-water refuges</strong> during winter
                  months and <strong>abundant food sources</strong> like seagrass throughout the year. The Ocklawaha
                  River basin, with its connection to Silver Springs and other natural springs, historically provided
                  both.
                </p>
                <p>
                  The question isn't whether Rodman Reservoir can support some manatees—it's whether we should force
                  them to rely on an artificial, managed impoundment when we could restore an entire connected
                  river-spring ecosystem.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/manatee-swimming-in-clear-spring-water.jpg"
                alt="Manatee swimming in crystal clear spring water"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Myth vs Fact Section */}
      <section className="border-t-4 border-secondary bg-gradient-to-b from-muted/50 to-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Myth vs. Fact</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Separating claims from evidence about manatees and Rodman Dam
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
                    Myth: "Manatees never used the Ocklawaha before 1960"
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    This claim lacks credible, published evidence. The absence of manatee mentions in early travel
                    writings is not proof they weren't present. Historical documentation focused on navigation and
                    commerce, not wildlife surveys.
                  </p>
                  <div className="mt-4 flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <p className="text-sm text-foreground">
                      <strong>Fact:</strong> Manatees follow warm water refuges and food sources. The Ocklawaha
                      historically connected to Silver Springs—one of Florida's largest springs and a natural warm-water
                      refuge.
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
                    Myth: "Rodman is an essential manatee sanctuary with abundant food"
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    While some manatees do use Rodman Reservoir, large lake surface area doesn't equal quality manatee
                    habitat. The reservoir requires active management including water-level drawdowns, vegetation
                    control, and herbicide applications.
                  </p>
                  <div className="mt-4 flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <p className="text-sm text-foreground">
                      <strong>Fact:</strong> Manatees thrive in <em>connected habitat systems</em> with reliable
                      warm-water refuges (springs) and natural food sources. A free-flowing Ocklawaha would provide safe
                      passage between the St. Johns River, Silver River, and Silver Springs complex.
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
                    Myth: "Lock and dam systems are safe for manatees"
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    Relying on a lock and dam infrastructure as a "manatee sanctuary" raises serious safety concerns.
                    Lock operations and dam structures pose risks to wildlife, and the system requires constant human
                    management.
                  </p>
                  <div className="mt-4 flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <p className="text-sm text-foreground">
                      <strong>Fact:</strong> Natural river systems allow manatees to move freely without navigating
                      dangerous infrastructure. Why force them into a managed pseudo-haven when we can restore an entire
                      connected ecosystem?
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              A Connected System, Not an Isolated Lake
            </h2>
            <div className="mt-8 space-y-6 text-pretty leading-relaxed text-foreground">
              <p>
                The key to manatee recovery isn't managing an artificial reservoir—it's restoring natural connectivity.
                The Ocklawaha River historically linked the St. Johns River to the Silver River and Silver Springs
                complex, creating a resilient network of warm-water refuges and feeding grounds.
              </p>
              <p>
                Removing Rodman Dam would restore this connection, allowing manatees to move naturally between habitats
                based on water temperature, food availability, and seasonal needs. This is how healthy manatee
                populations survive—not by depending on a single managed impoundment.
              </p>
            </div>

            <Card className="mt-12 border-secondary bg-secondary/5 p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="font-bold text-foreground">What About Short-Term Impacts?</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    Restoration is a phased process with monitoring and adaptive management. While transitions can be
                    challenging, the long-term benefits of a self-maintaining river-spring ecosystem far outweigh the
                    risks of depending on an aging, artificial infrastructure that requires constant intervention.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Help Save Florida's Manatees</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed">
              Natural habitat restoration is the best path forward for manatee recovery. Join us in calling for the
              removal of Rodman Dam and restoration of the Ocklawaha River.
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
                <Link href="/water-quality">Learn About Water Quality</Link>
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
