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
                    Kent Smith (1997), FDEP — The Effects of Proposed Restoration on Manatees and Manatee Habitat
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Analysis of Rodman/Ocklawaha manatee use and restoration implications.
                  </p>
                  <a
                    href="https://myfwc.com/media/1581/manateehabitatreport.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Document (PDF)
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    U.S. Fish & Wildlife Service (2001) — Florida Manatee Recovery Plan (Third Revision)
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Comprehensive recovery plan addressing warm-water refuges and habitat connectivity.
                  </p>
                  <a
                    href="https://www.regions.noaa.gov/southeast/wp-content/uploads/sites/6/2015/08/manatee_recovery_plan.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Recovery Plan (PDF)
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">Save the Manatee Club (2025) — Statement on Rodman Dam</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Policy and advocacy discussion explicitly referencing breaching the dam and restoring access.
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
                  <h4 className="font-bold text-foreground">
                    Defenders of Wildlife (2020) — Great Florida Riverway: Great Potential for Manatees
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Analysis of manatee habitat potential and benefits of dam removal.
                  </p>
                  <a
                    href="https://defenders.org/blog/2020/02/great-florida-riverway-great-potential-manatees"
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
                    Defenders of Wildlife (2020) — Endangered Rivers Release
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Details on Rodman flooding impacts with river miles and springs figures.
                  </p>
                  <a
                    href="https://defenders.org/newsroom/great-florida-riverway-would-help-endangered-species-and-boost-economy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Read Release
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    Marine Mammal Commission (2006) — Taylor Report on Springs Accessibility
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Research on Florida springs accessibility and "thermal network" for manatees.
                  </p>
                  <a
                    href="https://www.mmc.gov/wp-content/uploads/taylor.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Report (PDF)
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
                    SJRWMD — Technical Fact Sheet: Rodman Reservoir Drawdown (2015–2016)
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Official data summary on drawdown mechanics, frequency, and water quality impacts.
                  </p>
                  <a
                    href="https://www.sjrwmd.com/static/dataandmaps/factsheets/sj2017-fs2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Fact Sheet (PDF)
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    UF/IFAS CAIP — Drawdowns "Every Three to Four Years" Explainer
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Educational overview of drawdown frequency, duration, and mechanics.
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
                  <h4 className="font-bold text-foreground">Florida State Parks — Rodman Reservoir Drawdown FAQ</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Official FAQ including current schedule details and reasons for drawdowns.
                  </p>
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
                    Notes on drawdown timing and details for aquatic plant control and habitat.
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
                  <h4 className="font-bold text-foreground">St. Johns Riverkeeper — Algae Blooms Explainer</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    How nutrients (N & P) fuel blooms and sources of nutrient pollution.
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
                  <h4 className="font-bold text-foreground">SJRWMD — Algae and Nutrients Overview</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Official water management district information on algae blooms and nutrient dynamics.
                  </p>
                  <a
                    href="https://www.sjrwmd.com/waterquality/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Water Quality Info
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    SJRWMD Streamlines — Irma/Tannins/Dark Water & SAV Stress
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Hurricane Irma turning point: tannins and dark water led to light limitation and SAV stress.
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
                  <h4 className="font-bold text-foreground">St. Johns Riverkeeper — SAV Status & Light Limitation</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Submerged aquatic vegetation decline post-Irma with light limitation summary.
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
                  <h4 className="font-bold text-foreground">St. Johns Riverkeeper — Eelgrass Brief</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Detailed brief on eelgrass habitat and its importance to river ecosystem health.
                  </p>
                  <a
                    href="https://www.stjohnsriverkeeper.org/assets/pdf/eelgrass_brief.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Read Brief (PDF)
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    Journal of Aquatic Plant Management (APMS, 2020) — SAV Patterns Study
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Peer-reviewed research on SAV patterns, tannins, and light dynamics.
                  </p>
                  <a
                    href="https://www.apms.org/wp-content/uploads/JAPM-58-01-21.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Study (PDF)
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>
              </div>
            </div>

            {/* Dam History */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <BookOpen className="h-6 w-6 text-secondary" />
                Dam History & "Why It Exists"
              </h3>
              <div className="space-y-3">
                <Card className="p-6">
                  <h4 className="font-bold text-foreground">WUFT — On Both Sides of the Dam</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Comprehensive narrative with key figures: 7,500 acres flooded, 20 springs submerged.
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
                  <h4 className="font-bold text-foreground">
                    Audubon Magazine — Has One Florida Dam's Day Finally Come?
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Overview and argument that Rodman is a vestigial canal-era dam without modern purpose.
                  </p>
                  <a
                    href="https://www.audubon.org/magazine/march-april-2018/has-one-florida-dams-day-finally-come"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Read Article
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>
              </div>
            </div>

            {/* "All Dams" Talking Point */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <FileText className="h-6 w-6 text-secondary" />
                "All Dams / Upstream First" Context (Moss Bluff)
              </h3>
              <div className="space-y-3">
                <Card className="p-6">
                  <h4 className="font-bold text-foreground">SJRWMD — Marion County Page with Moss Bluff Lock & Dam</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Moss Bluff Lock & Dam purpose and history: "reconstructed in 1968" for navigation purposes.
                  </p>
                  <a
                    href="https://www.sjrwmd.com/lands/recreation/areas/marion/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Learn About Moss Bluff
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>
              </div>
            </div>

            {/* Mercury / Fish Consumption Risk */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <FileText className="h-6 w-6 text-secondary" />
                Mercury / Fish-Consumption Risk Context
              </h3>
              <div className="space-y-3">
                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    Florida Dept. of Health — Fish Consumption Advisories Landing Page
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Official landing page for current fish consumption advisories across Florida waters.
                  </p>
                  <a
                    href="https://www.floridahealth.gov/environmental-health/aquatic-toxins/fish-consumption-advisories.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Advisories
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    Florida Dept. of Health (2025) — Florida Fish Consumption Advisories Guidebook
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Comprehensive guidebook with specific advisory information including Ocklawaha River sections.
                  </p>
                  <a
                    href="https://www.floridahealth.gov/environmental-health/aquatic-toxins/_documents/fish-consumption-advisory-booklet.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Guidebook (PDF)
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>
              </div>
            </div>

            {/* Restoration Studies */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <FileText className="h-6 w-6 text-secondary" />
                Restoration "Studies Required / Short-Term vs Long-Term Impacts"
              </h3>
              <div className="space-y-3">
                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    Florida Springs Institute — Ocklawaha River and Springs Environmental Analysis / Synoptic Study
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Comprehensive environmental analysis including timeline, water quality studies needed, and
                    conclusion that long-term benefits outweigh short-term impacts.
                  </p>
                  <a
                    href="https://www.floridaspringsinstitute.org/resources/ocklawaha-synoptic-study"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Environmental Analysis
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
