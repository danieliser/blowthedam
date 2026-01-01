import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { ExternalLink, BookOpen, FileText, Database, Droplets } from "lucide-react"

export default function SourcesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Sources & References</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed">
              Our advocacy is grounded in scientific research, government reports, and expert analysis. All sources are
              linked and verifiable.
            </p>
          </div>
        </div>
      </section>

      {/* Note About Sources */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="border-accent bg-accent/5 p-8">
            <div className="flex items-start gap-4">
              <BookOpen className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
              <div>
                <h2 className="text-xl font-bold text-foreground">Our Approach to Evidence</h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  This website presents advocacy positions based on peer-reviewed research, government studies, and
                  expert analysis. We prioritize official government reports and published scientific research over
                  anecdotal claims. Every claim can be traced to the sources listed below.
                </p>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  We encourage visitors to examine primary sources directly and draw their own conclusions.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Grouped Sources */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">Verifiable Sources</h2>

          <div className="space-y-8">
            {/* Manatees, Habitat, Connectivity */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <Database className="h-6 w-6 text-secondary" />
                Manatees, Habitat, & Connectivity
              </h3>
              <div className="space-y-3">
                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    FDEP (Kent Smith), 1997 — Effects of Proposed Restoration on Manatees
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Rodman/Ocklawaha manatee use and restoration implications.
                  </p>
                  <a
                    href="https://ufdc.ufl.edu/AA00004616/00001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Document
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    U.S. Fish & Wildlife Service, 2001 — Florida Manatee Recovery Plan
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Warm-water refuge requirements and threats to manatee survival.
                  </p>
                  <a
                    href="https://www.fws.gov/library/collections/florida-manatee-recovery-plan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Recovery Plan
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">Save the Manatee Club — Policy Statement on Rodman Dam</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Advocacy statement on breaching the obsolete dam and reconnecting habitat.
                  </p>
                  <a
                    href="https://www.savethemanatee.org/news/statement-on-the-rodman-reservoir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Read Statement
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">Defenders of Wildlife — Great Florida Riverway</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Manatee access obstructed by Rodman/Kirkpatrick Dam.
                  </p>
                  <a
                    href="https://defenders.org/newsroom/report-floridas-great-riverway-would-benefit-endangered-species-and-boost-economy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Report
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    Taylor (2006) — Florida Springs Accessibility for Manatees
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">Report on springs and refuge network background.</p>
                  <a
                    href="https://www.mmc.gov/wp-content/uploads/taylor.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Marine Mammal Commission Report
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>
              </div>
            </div>

            {/* Drawdowns, Hydrology, Springs */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <Droplets className="h-6 w-6 text-secondary" />
                Drawdowns, Hydrology, & Springs
              </h3>
              <div className="space-y-3">
                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    SJRWMD — Rodman Reservoir Drawdown Data Summary (2015–2016)
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Official data on drawdown mechanics, frequency, and duration.
                  </p>
                  <a
                    href="https://www.sjrwmd.com/data/rodman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Data Summary
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    UF/IFAS Center for Aquatic & Invasive Plants — Drawdown Information
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Drawdowns every 3–4 years: duration and mechanics explained.
                  </p>
                  <a
                    href="https://blogs.ifas.ufl.edu/news/2015/09/01/whats-happening-around-florida-rodman-reservoir-drawdown/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Read Article
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">Florida State Parks — Rodman Drawdown FAQ</h4>
                  <p className="mt-2 text-sm text-muted-foreground">Why and how often drawdowns occur.</p>
                  <a
                    href="https://www.floridastateparks.org/parks-and-trails/rodman-reservoir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View FAQ
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">FWC — Rodman Reservoir Page</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Notes drawdowns for aquatic plant control and habitat enhancement.
                  </p>
                  <a
                    href="https://myfwc.com/fishing/freshwater/sites-forecast/nw/rodman-res/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View FWC Page
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>
              </div>
            </div>

            {/* Water Quality, Algae Blooms, SAV */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <FileText className="h-6 w-6 text-secondary" />
                Water Quality, Algae Blooms, & SAV/Eelgrass
              </h3>
              <div className="space-y-3">
                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    St. Johns Riverkeeper — Nutrient Pollution & Algae Blooms
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Nitrogen and phosphorus fuel blooms; sources of nutrient pollution explained.
                  </p>
                  <a
                    href="https://www.stjohnsriverkeeper.org/algae-blooms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Learn About Algae Blooms
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">SJRWMD Streamlines — Hurricane Irma Turning Point</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Tannins/dark water → less light → SAV stress and decline.
                  </p>
                  <a
                    href="https://www.sjrwmd.com/water-supply-management/streamlines/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Read Streamlines
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">St. Johns Riverkeeper — SAV Decline Post-Irma</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Submerged aquatic vegetation decline; light limitation; eelgrass context.
                  </p>
                  <a
                    href="https://www.stjohnsriverkeeper.org/sav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View SAV Information
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    Aquatic Plant Management Society (2020) — Light/Tannins/SAV Patterns
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Peer-reviewed technical discussion of water quality and vegetation patterns.
                  </p>
                  <a
                    href="https://www.apms.org/japm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Visit APMS Journal
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>
              </div>
            </div>

            {/* Dam History */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <BookOpen className="h-6 w-6 text-secondary" />
                Dam History & Context
              </h3>
              <div className="space-y-3">
                <Card className="p-6">
                  <h4 className="font-bold text-foreground">WUFT — On Both Sides of the Dam</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Narrative with key figures: 7,500 acres flooded, 20 springs submerged, Cross Florida Barge Canal
                    legacy.
                  </p>
                  <a
                    href="https://www.wuft.org/news/2018/01/08/on-both-sides-of-the-dam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Read Full Story
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">Defenders of Wildlife (2020) — Rodman Dam Impact Report</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Flooded wetlands, springs, and river miles; harms documented; Cross Florida Barge Canal legacy.
                  </p>
                  <a
                    href="https://defenders.org/newsroom/floridas-rodman-dam-ecological-and-economic-disaster"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Report
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">Audubon Magazine — Vestigial Canal-Era Dam</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Overview and argument that Rodman is an obsolete relic of the Cross Florida Barge Canal project.
                  </p>
                  <a
                    href="https://www.audubon.org/magazine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Visit Audubon
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>
              </div>
            </div>

            {/* Additional Context */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <FileText className="h-6 w-6 text-secondary" />
                Additional Context
              </h3>
              <div className="space-y-3">
                <Card className="p-6">
                  <h4 className="font-bold text-foreground">SJRWMD — Moss Bluff Lock & Dam</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Reconstructed in 1968; purpose and operations context for "all dams / upstream first" talking
                    points.
                  </p>
                  <a
                    href="https://www.sjrwmd.com/lands/recreation/moss-bluff/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Learn About Moss Bluff
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">Florida Dept. of Health — Fish Consumption Advisory</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Current fish consumption advisory guide including Ocklawaha River sections (mercury context).
                  </p>
                  <a
                    href="https://www.floridahealth.gov/environmental-health/aquatic-toxins/fish-consumption-advisories.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Advisory Guide
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">FWC — Mercury Testing & Advisory Context</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fish consumption risk context related to mercury in Florida waters.
                  </p>
                  <a
                    href="https://myfwc.com/research/health/fish-wildlife-health/mercury/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Mercury Information
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    Florida Springs Institute — Synoptic Study & Environmental Analysis
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Timeline; additional water quality studies needed; completed; benefits outweighed short-term
                    impacts.
                  </p>
                  <a
                    href="https://floridaspringsinstitute.org/synoptic-study/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Study
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Principles */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">How to Evaluate Claims</h2>
            <div className="mt-8 space-y-6 text-pretty leading-relaxed text-foreground">
              <p>
                Environmental debates are complex, and claims should be evaluated critically. Here are principles we
                follow and encourage others to use:
              </p>
              <ul className="list-inside list-disc space-y-3 pl-4">
                <li>
                  <strong>Demand sources:</strong> Claims without citations or references should be treated skeptically.
                </li>
                <li>
                  <strong>Absence of evidence is not evidence of absence:</strong> Just because something wasn't
                  documented doesn't mean it didn't exist.
                </li>
                <li>
                  <strong>Consider time horizons:</strong> Short-term impacts differ from long-term outcomes. Phased
                  restoration with monitoring is key.
                </li>
                <li>
                  <strong>Understand natural systems:</strong> Self-maintaining ecosystems are generally more resilient
                  than artificially managed systems.
                </li>
                <li>
                  <strong>Question oversimplifications:</strong> "Big lake = good habitat" or "dam removal = instant
                  disaster" are both oversimplifications.
                </li>
                <li>
                  <strong>Look for peer review:</strong> Published, peer-reviewed research carries more weight than
                  anecdotal claims.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
