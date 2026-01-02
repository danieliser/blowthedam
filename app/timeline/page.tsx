import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function TimelinePage() {
  const timelineEvents = [
    {
      year: "1930s-1960s",
      title: "The Cross Florida Barge Canal Project",
      description:
        "The U.S. Army Corps of Engineers begins planning a commercial shipping canal to cut across Florida, connecting the Atlantic Ocean to the Gulf of Mexico. Construction starts in 1964.",
      impact: "negative",
    },
    {
      year: "1968",
      title: "Rodman Dam Completed",
      description:
        "The Rodman Dam (originally named Kirkpatrick Dam) is built as part of the Cross Florida Barge Canal project, flooding the Ocklawaha River valley and creating a 9,500-acre reservoir.",
      impact: "negative",
    },
    {
      year: "1971",
      title: "Canal Project Halted",
      description:
        'President Richard Nixon halts the Cross Florida Barge Canal project, calling it "environmentally unsound." The canal is never completed, leaving Rodman Dam as an obsolete remnant.',
      impact: "positive",
    },
    {
      year: "1990",
      title: "Canal Project Officially Deauthorized",
      description:
        "Congress officially deauthorizes the Cross Florida Barge Canal project, recognizing it will never be completed. The dam no longer serves its original purpose.",
      impact: "positive",
    },
    {
      year: "1993-1995",
      title: "Experimental Drawdowns Begin",
      description:
        "The state conducts experimental reservoir drawdowns to study potential restoration impacts. Results show rapid recovery of native river vegetation and fish communities, demonstrating the river's resilience.",
      impact: "positive",
    },
    {
      year: "1997",
      title: "Kent Smith Report Documents Manatee Deaths",
      description:
        "FDEP report by Kent Smith documents manatee mortality at the Buckman Lock/Rodman Dam system, with carcass damage consistent with trauma from water-control structures. This becomes key evidence for restoration advocacy.",
      impact: "negative",
      source: (
        <a
          href="/sources#smith-1997"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-secondary underline hover:text-secondary/80"
          title="Kent Smith (1997) - FDEP Report"
        >
          View source
        </a>
      ),
    },
    {
      year: "1998",
      title: "Jeb Bush Reverses Restoration Plans",
      description:
        "Despite positive scientific findings from drawdowns, Governor Jeb Bush reverses restoration plans and orders the reservoir refilled, citing recreational fishing interests.",
      impact: "negative",
    },
    {
      year: "2000s",
      title: "Ongoing Management Costs",
      description:
        "The reservoir requires continuous herbicide treatments for invasive aquatic vegetation, mechanical removal operations, and dam maintenance—costing taxpayers millions annually.",
      impact: "negative",
    },
    {
      year: "2010-Present",
      title: "Springs Crisis Intensifies",
      description:
        "Florida's springs face unprecedented decline due to aquifer depletion and nutrient pollution. The reservoir's suppression of spring discharge along the Ocklawaha becomes increasingly problematic.",
      impact: "negative",
    },
    {
      year: "2015-Present",
      title: "Algae Bloom Epidemic",
      description:
        "Toxic algae blooms plague the St. Johns River and other Florida waterways. Static reservoirs like Rodman create ideal conditions for harmful blooms in hot, nutrient-rich water.",
      impact: "negative",
    },
    {
      year: "2019",
      title: "Manatee Crisis Declared",
      description:
        "Record manatee deaths in the Indian River Lagoon due to seagrass loss highlight the critical need for connected habitat systems and natural warm-water refuges—not artificial reservoirs.",
      impact: "negative",
    },
    {
      year: "2020s",
      title: "Renewed Restoration Momentum",
      description:
        "Growing public awareness of Florida's water crisis, combined with successful dam removal projects nationwide (Elwha River, Kennebec River), renews calls for Ocklawaha restoration.",
      impact: "positive",
    },
    {
      year: "Today",
      title: "A Decision Point",
      description:
        "Florida faces a choice: continue spending taxpayer money to maintain an obsolete, ecologically damaging dam—or restore the Ocklawaha River and reconnect a vital river-spring ecosystem for future generations.",
      impact: "neutral",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/ocklawaha-river-flowing.jpg"
            alt="Historic Ocklawaha River"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/70 to-background/60" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">50+ Years of Controversy</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            The long history of the Cross Florida Barge Canal and the fight to restore the Ocklawaha River
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              The Rodman Dam represents one of Florida's longest-running environmental controversies. Built for a canal
              that was never completed and officially abandoned, it remains in place today—a monument to outdated
              thinking about rivers, ecosystems, and Florida's water future. This timeline shows how we got here and why
              restoration is long overdue.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gradient-to-b from-background via-muted/20 to-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-border to-primary/50"
              aria-hidden="true"
            />

            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full border-4 border-background flex items-center justify-center text-xs font-bold shadow-md ${
                        event.impact === "positive"
                          ? "bg-green-500/20 text-green-700 dark:text-green-400"
                          : event.impact === "negative"
                            ? "bg-red-500/20 text-red-700 dark:text-red-400"
                            : "bg-blue-500/20 text-blue-700 dark:text-blue-400"
                      }`}
                    >
                      {event.year.split("-")[0]}
                    </div>
                  </div>

                  {/* Event content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-card border border-border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="mb-2">
                        <span className="text-sm font-semibold text-primary">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                      {event.source && <div className="mt-2">{event.source}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="border-t-4 border-secondary bg-gradient-to-b from-muted/50 to-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Key Takeaways</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-3">The Dam Has No Purpose</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built for a canal that was abandoned over 50 years ago, Rodman Dam serves no flood control, hydropower,
                or water supply function. It exists solely because removing it requires political will.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-3">Science Supports Restoration</h3>
              <p className="text-muted-foreground leading-relaxed">
                The 1990s drawdown experiments demonstrated that the river ecosystem can recover rapidly. Native fish
                and vegetation returned within months, proving restoration is viable.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-3">Costs Keep Rising</h3>
              <p className="text-muted-foreground leading-relaxed">
                Maintaining the artificial reservoir costs millions in herbicide treatments, mechanical vegetation
                control, and infrastructure repairs—ongoing expenses that never end.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-3">The Crisis Is Getting Worse</h3>
              <p className="text-muted-foreground leading-relaxed">
                Springs are declining, manatees are dying, and toxic algae blooms are epidemic. Florida's water crisis
                demands solutions—not preserving failed infrastructure from the 1960s.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Image Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image src="/ocklawaha-river-flowing.jpg" alt="Historic Ocklawaha River" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
              <div className="p-8">
                <p className="text-foreground font-semibold text-lg text-balance">
                  The Ocklawaha River once flowed freely through cypress forests and connected manatees to Silver
                  Springs. Restoration can bring this back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5 border-t-2 border-primary/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Don't Let This Continue Another 50 Years</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            The science is clear. The history is settled. The dam serves no purpose. It's time to restore the Ocklawaha
            River.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/take-action"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Take Action Now
            </a>
            <a
              href="/sources"
              className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground hover:bg-secondary/90 transition-colors"
            >
              Read the Research
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
