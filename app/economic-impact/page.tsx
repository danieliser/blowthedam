import { Navigation } from "@/components/navigation"
import { DollarSign, TrendingUp, Users, Briefcase, BookOpen } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function EconomicImpactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            The Economic Case for Restoration
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Why investing in restoration makes more financial sense than maintaining an obsolete dam
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              The economic argument for Ocklawaha River restoration isn't just about environmental benefits—it's about
              smart fiscal policy. Peer-reviewed research comparing recreation economics at free-flowing river sites vs.
              reservoir sites shows that restoration can shift recreation patterns while generating economic
              contributions. Meanwhile, maintaining Rodman Dam requires perpetual taxpayer spending with no return on
              investment.
            </p>
          </div>
        </div>
      </section>

      {/* Peer-Reviewed Research Section */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Peer-Reviewed Research</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">What Academic Studies Actually Show</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The most rigorous economic comparison comes from university researchers
            </p>
          </div>

          <Card className="border-2 border-secondary bg-gradient-to-br from-secondary/10 to-background p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/20">
                <BookOpen className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Borisova et al. (2019): Economic Value of Free-Flowing vs. Impounded River Portions
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Published in <em>Review of Regional Studies</em> (peer-reviewed academic journal)
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">What the Study Found:</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-secondary">•</span>
                    <span>
                      <strong>Free-flowing river sites generate greater economic contributions</strong> from recreation
                      compared to reservoir sites when measuring visitor spending and economic value
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary">•</span>
                    <span>
                      Restoration would likely <strong>increase some recreation activities</strong> (paddling, nature
                      tourism, spring access) while potentially reducing others (reservoir-style fishing)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary">•</span>
                    <span>
                      The study models <strong>how visitation might change</strong> under different restoration
                      scenarios with various uncertainty ranges—showing economists take these tradeoffs seriously
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary">•</span>
                    <span>
                      Researchers recommend steps to <strong>preserve fishing opportunities</strong> during transitions,
                      acknowledging that changes would occur but need not eliminate all fishing
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border-l-4 border-l-secondary bg-secondary/5 p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Why this matters:</strong> This is the most rigorous "apples-to-apples" recreation economics
                  comparison available. Unlike advocacy documents or general claims, it uses established economic
                  methods to estimate visitor spending patterns under different scenarios. It doesn't claim restoration
                  has zero costs—but it shows the economic story is about <em>shifting</em> recreation types, not simple
                  loss.
                </p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  <strong>Full citation:</strong> Bi, X., Borisova, T., & Hodges, A. W. (2019). Economic value of
                  visitation to free-flowing and impounded portions of the Ocklawaha River in Florida: Implications for
                  management of river flow. <em>Review of Regional Studies</em>, 49(2), 244–268.{" "}
                  <Link href="/sources" className="text-secondary underline hover:text-secondary/80">
                    View source
                  </Link>
                </p>
              </div>
            </div>
          </Card>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card className="border border-border bg-card p-6 shadow-sm">
              <h4 className="font-semibold text-foreground mb-3">Peer-Reviewed Fishing Research</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Nagid et al. (2015) in the <em>North American Journal of Fisheries Management</em> shows drawdowns can
                create strong largemouth bass year-classes—evidence that the "keep" side uses to support reservoir
                management.
              </p>
              <p className="text-xs text-muted-foreground">
                This is legitimate research showing the reservoir <em>can</em> produce quality fishing under active
                management. The economic question is whether this benefit outweighs restoration's broader economic gains
                from river-based recreation.
              </p>
            </Card>

            <Card className="border border-border bg-card p-6 shadow-sm">
              <h4 className="font-semibold text-foreground mb-3">Policy Analysis vs. Academic Research</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Florida TaxWatch (2022) presents economic scenarios favoring retention. This is useful for understanding
                policy arguments but is not peer-reviewed academic research—it's advocacy analysis with specific
                assumptions.
              </p>
              <p className="text-xs text-muted-foreground">
                When weighing economic evidence, peer-reviewed studies carry more weight than think-tank reports because
                they undergo rigorous independent review.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="border-t-4 border-primary py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">The Real Costs</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Maintaining Status Quo */}
            <div className="bg-red-500/5 border-2 border-red-500/20 rounded-lg p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Maintaining the Dam</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Annual Operating Costs</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Herbicide treatments for invasive vegetation</li>
                    <li>• Mechanical vegetation removal operations</li>
                    <li>• Dam and lock maintenance and operations</li>
                    <li>• Water level management infrastructure</li>
                    <li>• Staff and monitoring costs</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-2">Long-Term Liabilities</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Aging infrastructure requiring major repairs</li>
                    <li>• Environmental compliance costs</li>
                    <li>• Climate change adaptation expenses</li>
                    <li>• Continued algae bloom management</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <p className="text-sm font-bold text-red-600 dark:text-red-400">
                    These costs continue indefinitely with no end in sight
                  </p>
                </div>
              </div>
            </div>

            {/* Restoration Investment */}
            <div className="bg-green-500/5 border-2 border-green-500/20 rounded-lg p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Restoration Investment</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">One-Time Investment</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Phased dam removal and sediment management</li>
                    <li>• Habitat restoration and native plantings</li>
                    <li>• Monitoring and adaptive management (5-10 years)</li>
                    <li>• Recreation infrastructure (boat launches, trails)</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-2">Ongoing Economic Returns</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Elimination of annual maintenance costs</li>
                    <li>• Ecotourism revenue generation</li>
                    <li>• Increased property values</li>
                    <li>• Natural ecosystem services (filtration, flood control)</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <p className="text-sm font-bold text-green-600 dark:text-green-400">
                    Investment pays for itself through long-term savings and revenue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Benefits */}
      <section className="border-t-4 border-secondary bg-gradient-to-b from-muted/50 to-background py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Economic Benefits of Restoration</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Job Creation</h3>
              <p className="text-sm text-muted-foreground">
                Restoration work, ecotourism businesses, guide services, and hospitality create diverse employment
                opportunities
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Property Values</h3>
              <p className="text-sm text-muted-foreground">
                Studies show waterfront property values increase 10-30% after river restoration projects
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Tourism Revenue</h3>
              <p className="text-sm text-muted-foreground">
                Nature-based tourism generates sustainable, long-term economic activity for local communities
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Cost Savings</h3>
              <p className="text-sm text-muted-foreground">
                Elimination of perpetual maintenance costs saves taxpayers millions over the long term
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Success Stories from Other States</h2>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-3">Elwha River, Washington</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Project Details</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Two dams removed (2011-2014) to restore salmon runs and river ecosystem on the Olympic Peninsula.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Economic Impact</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Created 1,100+ jobs during restoration</li>
                    <li>• Tourism increased 25% in surrounding communities</li>
                    <li>• Salmon returned within months, boosting fishing economy</li>
                    <li>• Property values rose along the restored river corridor</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-3">Kennebec River, Maine</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Project Details</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Edwards Dam removed in 1999 to restore access for migratory fish like striped bass, Atlantic salmon,
                    and sturgeon.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Economic Impact</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Striped bass fishery now worth $1M+ annually</li>
                    <li>• Waterfront revitalization spurred downtown development</li>
                    <li>• Recreation economy grew 30% in first decade</li>
                    <li>• Became a model for successful dam removal nationwide</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border-2 border-secondary rounded-lg p-8 bg-secondary/5 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Silver Springs, Florida (Our Own Success Story)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Current Status</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Florida's largest artesian spring generates massive tourism revenue through glass-bottom boat tours,
                    kayaking, and wildlife viewing.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Economic Impact</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Generates $40M+ in annual tourism revenue</li>
                    <li>• Supports hundreds of local jobs</li>
                    <li>• Draws visitors from around the world</li>
                    <li>• Imagine connecting this to a pristine Ocklawaha River—the economic potential is enormous</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Services */}
      <section className="border-t-4 border-secondary bg-gradient-to-b from-muted/50 to-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Free Services from Natural Ecosystems</h2>
          <p className="text-center text-muted-foreground mb-12 text-pretty">
            Restored river systems provide valuable services that would cost millions if we had to engineer them
            artificially
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-3">Natural Water Filtration</h3>
              <p className="text-sm text-muted-foreground">
                Wetlands and floodplains filter nutrients and pollutants naturally—replacing the need for expensive
                engineered treatment systems
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-3">Flood Mitigation</h3>
              <p className="text-sm text-muted-foreground">
                Natural floodplains absorb and slowly release floodwaters, reducing downstream flood risk without costly
                infrastructure
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-3">Habitat Support</h3>
              <p className="text-sm text-muted-foreground">
                Healthy rivers support fisheries, wildlife, and manatee populations that drive tourism and recreation
                economies
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-3">Climate Resilience</h3>
              <p className="text-sm text-muted-foreground">
                Natural systems adapt to changing conditions better than static infrastructure, reducing long-term risk
                and costs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 border-t-2 border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Invest in Florida's Water Future</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Restoration isn't just environmentally responsible—it's economically smart. Peer-reviewed research shows
            free-flowing river recreation generates greater economic value, and every dollar invested in natural
            ecosystems returns multiple times over through tourism, property values, and ecosystem services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/take-action"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Support Restoration
            </a>
            <a
              href="/sources"
              className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground hover:bg-secondary/90 transition-colors"
            >
              Read Economic Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
