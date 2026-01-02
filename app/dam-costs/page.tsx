import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, AlertTriangle, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"

export default function DamCostsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-destructive via-destructive/90 to-destructive/80 text-destructive-foreground">
        <div className="absolute inset-0 bg-[url('/healthy-river-restoration.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The Dam Costs Too Much
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed sm:text-xl">
              The Rodman Dam is an obsolete structure with no original purpose. It requires constant maintenance, faces
              inevitable failure, and costs taxpayers millions while blocking a thriving river ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">An Obsolete Structure</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              <a
                href="/sources#wuft-dam-history"
                className="text-secondary underline decoration-secondary/30 hover:decoration-secondary"
                title="Source: WUFT - On Both Sides of the Dam"
              >
                The Rodman Dam was built as part of the Cross Florida Barge Canal, a project abandoned in 1971
              </a>
              . The dam has no navigation purpose, serves no flood control function, and was explicitly built as a
              temporary structure. Yet it remains, requiring perpetual maintenance at taxpayer expense.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
            <Card className="border-l-4 border-l-destructive bg-card p-6 shadow-md">
              <div className="mb-4 flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-destructive" />
                <h3 className="text-2xl font-bold text-foreground">Purpose-Built for a Canceled Project</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <a
                    href="/sources#audubon-magazine"
                    className="text-secondary underline decoration-secondary/30 hover:decoration-secondary"
                    title="Source: Audubon Magazine - Has One Florida Dam's Day Finally Come?"
                  >
                    The Cross Florida Barge Canal was halted by President Nixon in 1971 after environmental concerns
                  </a>
                  . The Rodman Dam lost its reason to exist before completion.
                </p>
                <p className="leading-relaxed">
                  Unlike functional infrastructure with ongoing utility, this is a relic of an abandoned project kept
                  for decades despite its original purpose being obsolete.
                </p>
              </div>
            </Card>

            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/florida-river-ecosystem.jpg"
                alt="Healthy river ecosystem"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Cost of Keeping an Obsolete Dam
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Perpetual maintenance drains resources that could restore a thriving ecosystem
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-t-4 border-t-primary bg-card p-6 shadow-md hover:shadow-lg transition-shadow">
              <DollarSign className="mb-4 h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Ongoing Maintenance Costs</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                <a
                  href="/sources#ufifas-caip"
                  className="text-secondary underline decoration-secondary/30 hover:decoration-secondary"
                  title="Source: UF/IFAS CAIP - Drawdowns Every 3-4 Years"
                >
                  The dam requires recurring drawdowns every 3-4 years
                </a>
                , gate repairs, sediment management, and structure inspections. These costs compound indefinitely.
              </p>
            </Card>

            <Card className="border-t-4 border-t-destructive bg-card p-6 shadow-md hover:shadow-lg transition-shadow">
              <AlertTriangle className="mb-4 h-10 w-10 text-destructive" />
              <h3 className="text-xl font-bold text-foreground">Major Repair Estimates</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                <a
                  href="/sources#audubon-magazine"
                  className="text-secondary underline decoration-secondary/30 hover:decoration-secondary"
                  title="Source: Audubon Magazine - Dam Cost Analysis"
                >
                  Policy analyses estimate repair costs in the millions. The Florida TaxWatch report (2022) projects
                  substantial capital expenses just to keep the aging structure operational
                </a>
                .
              </p>
            </Card>

            <Card className="border-t-4 border-t-secondary bg-card p-6 shadow-md hover:shadow-lg transition-shadow">
              <Calendar className="mb-4 h-10 w-10 text-secondary" />
              <h3 className="text-xl font-bold text-foreground">50+ Years of Limbo</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Since the canal project ended in 1971, the dam has cost taxpayers for half a century with no clear
                long-term plan beyond "maintain it indefinitely."
              </p>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="border-l-4 border-l-primary bg-gradient-to-r from-card to-muted/50 p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <TrendingUp className="mt-1 h-8 w-8 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">One-Time Investment vs. Perpetual Drain</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Restoration is a one-time project with defined costs and completion. Keeping the dam means paying
                    maintenance costs forever, with major repairs looming as the structure ages. The economic case for
                    restoration becomes stronger every year.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Inevitable Failure */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                All Infrastructure Eventually Fails
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  No dam lasts forever. The Rodman structure is aging, built as a temporary component of an abandoned
                  project. Gate mechanisms corrode. Concrete degrades. Sediment accumulates.
                </p>
                <p className="leading-relaxed">
                  The question is not if it will require massive repairs or eventual removal, but when. Delaying the
                  decision costs more money and extends ecological damage.
                </p>
                <p className="leading-relaxed">
                  Planned restoration now avoids crisis-driven emergency action later, allows for careful environmental
                  management, and stops the meter on perpetual maintenance costs.
                </p>
              </div>
            </div>

            <Card className="border-l-4 border-l-destructive bg-card p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-foreground">What Maintenance Buys</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-destructive" />
                  <span className="text-muted-foreground">
                    Recurring drawdowns disrupt the reservoir ecosystem every few years
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-destructive" />
                  <span className="text-muted-foreground">
                    Degraded water quality and blocked spring flow continue indefinitely
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-destructive" />
                  <span className="text-muted-foreground">
                    Manatees remain cut off from historic warm-water refuge and forage habitat
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-destructive" />
                  <span className="text-muted-foreground">
                    The problem is deferred, not solved—future generations inherit the same decision
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Compare: Keep vs. Restore */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Financial & Ecological Comparison
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              What do taxpayers and Florida's environment get for their investment?
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Card className="border-t-4 border-t-destructive bg-card p-8 shadow-md">
              <h3 className="mb-6 text-2xl font-bold text-destructive">Keep the Dam</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-xl">❌</span>
                  <span>Perpetual maintenance costs with no end date</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">❌</span>
                  <span>Major repair bills as the structure ages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">❌</span>
                  <span>Continues ecological damage to springs and manatee habitat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">❌</span>
                  <span>Same decision deferred to future generations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">❌</span>
                  <span>No clear long-term vision or purpose</span>
                </li>
              </ul>
            </Card>

            <Card className="border-t-4 border-t-primary bg-card p-8 shadow-md">
              <h3 className="mb-6 text-2xl font-bold text-primary">Restore the River</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-xl">✅</span>
                  <span>One-time investment with defined completion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">✅</span>
                  <span>Stops perpetual maintenance costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">✅</span>
                  <span>Restores manatee habitat and spring flow</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">✅</span>
                  <span>Creates long-term economic opportunity through ecotourism</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">✅</span>
                  <span>Returns Florida's most beautiful river to its natural state</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Stop Throwing Money at a Dead Project</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed">
              The Rodman Dam has cost taxpayers for over 50 years with no clear purpose. It's time to invest in
              restoration, not perpetual maintenance of an obsolete structure.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/take-action">Demand Restoration Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/evidence">See the Evidence</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
