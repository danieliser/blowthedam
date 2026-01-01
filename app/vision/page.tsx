import { Navigation } from "@/components/navigation"
import Image from "next/image"
import { X, Check } from "lucide-react"

export default function VisionPage() {
  const comparisons = [
    {
      category: "Manatee Habitat",
      current: {
        title: "Artificial Reservoir System",
        points: [
          "Manatees blocked from natural warm-water springs upstream",
          "Forced into managed reservoir with lock/dam risks",
          "Reliant on single artificial habitat zone",
          "Limited connectivity to St. Johns-Silver Springs corridor",
        ],
      },
      restored: {
        title: "Connected Natural System",
        points: [
          "Free access to Silver Springs and natural warm-water refuges",
          "Safe migration corridors without dam infrastructure",
          "Extensive connected habitat throughout river-spring system",
          "Natural movement between feeding areas and refuges",
        ],
      },
    },
    {
      category: "Water Quality",
      current: {
        title: "Stagnant Reservoir Conditions",
        points: [
          "Warm, static water promotes toxic algae blooms",
          "Nutrient accumulation in sediments",
          "Requires herbicide treatments for vegetation control",
          "Stratification and oxygen depletion in hot weather",
        ],
      },
      restored: {
        title: "Flowing River System",
        points: [
          "Flowing water reduces algae bloom conditions",
          "Natural nutrient processing through wetlands",
          "Self-regulating vegetation without chemical intervention",
          "Consistent oxygen levels from river flow",
        ],
      },
    },
    {
      category: "Springs Flow",
      current: {
        title: "Suppressed Discharge",
        points: [
          "High reservoir pool reduces hydraulic gradient",
          "Springs smothered or flow at reduced capacity",
          "Sediment accumulation around spring vents",
          "Loss of historic spring-fed habitats",
        ],
      },
      restored: {
        title: "Revitalized Springs",
        points: [
          "Lower water surface increases spring discharge",
          "Clear, flowing springs reconnected to river",
          "Natural sediment balance around spring systems",
          "Restoration of spring-run ecosystems",
        ],
      },
    },
    {
      category: "Recreation",
      current: {
        title: "Reservoir-Based Activities",
        points: [
          "Bass fishing in artificial lake environment",
          "Motorboat access focused on reservoir",
          "Limited paddling opportunities",
          "Seasonal drawdowns disrupt recreation",
        ],
      },
      restored: {
        title: "Diverse River Recreation",
        points: [
          "World-class paddling through scenic river corridor",
          "Enhanced sport fishing in natural river habitats",
          "Ecotourism connecting to Silver Springs",
          "Year-round access to flowing water experiences",
        ],
      },
    },
    {
      category: "Ecosystem Health",
      current: {
        title: "Managed Artificial System",
        points: [
          "Requires constant intervention (herbicides, drawdowns)",
          "Invasive vegetation dominates without control",
          "Disrupted natural river-floodplain processes",
          "Fragmented habitat blocks wildlife movement",
        ],
      },
      restored: {
        title: "Self-Sustaining Natural System",
        points: [
          "Native vegetation establishes naturally",
          "Natural flood cycles maintain wetland health",
          "Connected habitat supports diverse wildlife",
          "Resilient ecosystem adapts to environmental changes",
        ],
      },
    },
    {
      category: "Economics",
      current: {
        title: "Perpetual Maintenance Costs",
        points: [
          "Annual spending on herbicides and vegetation removal",
          "Dam and lock operations and repairs",
          "Aging infrastructure requiring expensive upgrades",
          "No return on taxpayer investment",
        ],
      },
      restored: {
        title: "One-Time Investment, Long-Term Returns",
        points: [
          "Elimination of annual maintenance costs",
          "Increased property values along restored river",
          "Tourism revenue from nature-based recreation",
          "Free ecosystem services worth millions annually",
        ],
      },
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Envisioning a Restored Ocklawaha
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Compare the managed reservoir system to a naturally flowing river-spring ecosystem
          </p>
        </div>
      </section>

      {/* Visual Before/After */}
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-4 py-2 rounded-md font-bold text-sm">
                Current: Reservoir System
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden border-4 border-red-500/30">
                <Image
                  src="/pristine-florida-spring-with-lush-vegetation.jpg"
                  alt="Current reservoir conditions"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                  <p className="text-sm text-muted-foreground">
                    Static water, managed vegetation, blocked connectivity
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-4 left-4 z-10 bg-green-500 text-white px-4 py-2 rounded-md font-bold text-sm">
                Vision: Restored River
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden border-4 border-green-500/30">
                <Image
                  src="/crystal-clear-florida-spring-water-flowing.jpg"
                  alt="Restored river vision"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                  <p className="text-sm text-foreground font-semibold">
                    Flowing water, natural springs, connected ecosystem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparisons */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Detailed Comparison</h2>

          <div className="space-y-12">
            {comparisons.map((comparison, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <div className="bg-muted/50 px-6 py-4 border-b border-border">
                  <h3 className="text-xl font-bold text-foreground">{comparison.category}</h3>
                </div>

                <div className="grid md:grid-cols-2">
                  {/* Current State */}
                  <div className="p-6 border-r border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                        <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <h4 className="font-semibold text-foreground">{comparison.current.title}</h4>
                    </div>
                    <ul className="space-y-3">
                      {comparison.current.points.map((point, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                          <span className="text-sm text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Restored State */}
                  <div className="p-6 bg-green-500/5">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <h4 className="font-semibold text-foreground">{comparison.restored.title}</h4>
                    </div>
                    <ul className="space-y-3">
                      {comparison.restored.points.map((point, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                          <span className="text-sm text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Examples */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">This Vision Is Achievable</h2>
          <p className="text-center text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto">
            River restoration isn't theoretical—it's proven. These successful projects show what's possible when we
            prioritize natural ecosystems over obsolete infrastructure.
          </p>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Elwha River, Washington (2014)</h3>
              <p className="text-sm text-muted-foreground mb-3">
                After removing two dams, salmon returned within months. Today the river supports thriving fisheries,
                restored habitat, and increased tourism.
              </p>
              <p className="text-sm text-primary font-semibold">Timeline: Rapid ecosystem recovery within 2-5 years</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Kennebec River, Maine (1999)</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Dam removal restored access for migratory fish. The river now generates millions in recreation revenue
                and supports revitalized waterfront communities.
              </p>
              <p className="text-sm text-primary font-semibold">
                Timeline: Fish returned immediately; full recovery within 10 years
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Ocklawaha Drawdowns, Florida (1990s)</h3>
              <p className="text-sm text-muted-foreground mb-3">
                During experimental drawdowns, native river vegetation and fish communities quickly re-established,
                demonstrating the Ocklawaha's natural resilience.
              </p>
              <p className="text-sm text-primary font-semibold">Timeline: Native species returned within months</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Path Forward */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">The Path Forward</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                1
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Phased Planning & Environmental Review</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive planning with sediment management, water quality monitoring, and stakeholder engagement.
                  Learn from successful dam removals nationwide.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                2
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Staged Drawdown & Removal</h3>
                <p className="text-sm text-muted-foreground">
                  Gradual water level reduction prevents sudden sediment pulses. Sediment stabilization and native
                  plantings accelerate recovery.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                3
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Adaptive Restoration & Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous monitoring allows adjustments during recovery. Native species return naturally with minimal
                  intervention needed after initial restoration.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                4
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Long-Term Ecosystem Recovery</h3>
                <p className="text-sm text-muted-foreground">
                  Within 5-10 years, a self-sustaining river-spring ecosystem eliminates the need for ongoing
                  management, saving taxpayers millions while supporting thriving natural habitats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Make This Vision a Reality</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            The Ocklawaha River doesn't have to remain trapped behind an obsolete dam. Together, we can restore one of
            Florida's most important river systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/take-action"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Join the Movement
            </a>
            <a
              href="/economic-impact"
              className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground hover:bg-secondary/90 transition-colors"
            >
              See Economic Benefits
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
