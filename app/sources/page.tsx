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
                    href="https://myfwc.com/media/7274/manatee_rodman.pdf"
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
                    href="https://ecos.fws.gov/docs/recovery_plan/011030.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Recovery Plan (PDF)
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">Save the Manatee Club — Statement on Rodman Dam</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Policy and advocacy discussion explicitly referencing breaching the dam and restoring access.
                  </p>
                  <a
                    href="https://savethemanatee.org/protecting-manatees-with-policy-and-purpose/"
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
                    Defenders of Wildlife — Great Florida Riverway: Great Potential for Manatees
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Analysis of manatee habitat potential and benefits of dam removal.
                  </p>
                  <a
                    href="https://defenders.org/blog/2020/11/great-florida-riverway-great-potential-manatees"
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
                    Marine Mammal Commission (2006) — Taylor Report on Springs Accessibility
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Research on Florida springs accessibility and "thermal network" for manatees.
                  </p>
                  <a
                    href="https://www.mmc.gov/wp-content/uploads/taylorFLspringsreport.pdf"
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
                    href="https://aws.sjrwmd.com/SJRWMD/publications/SJ2017-FS2.pdf"
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
                    href="https://blogs.ifas.ufl.edu/caip/2021/08/16/drawdowns-a-brief-look-at-rodman-reservoir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Read Article
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">Florida State Parks — Rodman Reservoir Info</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Official information including drawdown schedule details and reasons.
                  </p>
                  <a
                    href="https://www.floridastateparks.org/parks-and-trails/rodman-reservoir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Park Info
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">FWC — Rodman Reservoir Page</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Notes on drawdown timing and details for aquatic plant control and habitat.
                  </p>
                  <a
                    href="https://myfwc.com/fishing/freshwater/sites-forecasts/ne/rodman-reservoir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View FWC Page
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">Florida State Parks — Rodman Reservoir Drawdown FAQ</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Official information including drawdown schedule details and reasons.
                  </p>
                  <a
                    href="https://www.floridastateparks.org/learn/rodman-reservoir-drawdown-faq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View FAQ
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
                    href="https://stjohnsriverkeeper.org/algae-blooms-what-you-need-to-know/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Learn About Algae Blooms
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">SJRWMD — Water Quality Information</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Official water management district information on algae blooms and nutrient dynamics.
                  </p>
                  <a
                    href="https://www.sjrwmd.com/education/algae/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Water Quality Info
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">St. Johns Riverkeeper — SAV and Eelgrass Information</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Submerged aquatic vegetation decline post-Irma with light limitation and eelgrass habitat details.
                  </p>
                  <a
                    href="https://stjohnsriverkeeper.org/about-us/our-issues/submerged-aquatic-vegetation-sav/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View SAV & Eelgrass Info
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    Journal of Aquatic Plant Management (APMS) — Research Archive
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Peer-reviewed research on SAV patterns, tannins, and light dynamics.
                  </p>
                  <a
                    href="https://www.apms.org/publications/journal-of-aquatic-plant-management/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Journal Archive
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    Journal of Aquatic Plant Management (APMS, 2020) — SAV patterns + tannins/light discussion
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Peer-reviewed research on SAV patterns, tannins, and light dynamics.
                  </p>
                  <a
                    href="https://apms.org/wp-content/uploads/japm-58-02-135-full.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View PDF
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    SJRWMD Streamlines — Tracking Aquatic Vegetation in the Lower St. Johns River
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Hurricane Irma's impact: tannins/dark water → light limitation → SAV stress.
                  </p>
                  <a
                    href="https://www.sjrwmd.com/streamlines/beneath-the-surface-tracking-aquatic-vegetation-in-the-lower-st-johns-river/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Read Streamlines Article
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
                    href="https://www.wuft.org/on-both-sides-of-the-dam"
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
                    Defenders of Wildlife — Rodman Flooded Wetlands & Springs
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Information on flooding impacts, river miles, and Cross Florida Barge Canal legacy.
                  </p>
                  <a
                    href="https://defenders.org/newsroom/ocklawaha-river-named-among-americas-most-endangered-rivers-of-2020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Information
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
                    href="https://www.audubon.org/magazine/has-one-florida-dams-day-finally-come"
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
                  <h4 className="font-bold text-foreground">SJRWMD — Marion County Lands & Moss Bluff Info</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Moss Bluff Lock & Dam purpose and history: "reconstructed in 1968" for navigation purposes.
                  </p>
                  <a
                    href="https://www.sjrwmd.com/lands/recreation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Recreation Lands
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">Ocklawaha.org — Dam Comparison & Purpose</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Detailed distinction between Moss Bluff (navigation lock) and Rodman (canal dam with no purpose).
                  </p>
                  <a
                    href="https://ocklawaha.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Visit Ocklawaha.org
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>
              </div>
            </div>

            {/* Additional Context & Resources */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
                <Database className="h-6 w-6 text-secondary" />
                Additional Context & Resources
              </h3>
              <div className="space-y-3">
                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    Florida Department of Health — Harmful Algal Bloom (HAB) Guidebook
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Official guidance on health impacts and management of harmful algal blooms.
                  </p>
                  <a
                    href="https://www.floridahealth.gov/environmental-health/aquatic-toxins/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View HAB Guidebook
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    Florida Springs Institute — Springs Restoration & Research
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Scientific research and advocacy for Florida springs restoration and protection.
                  </p>
                  <a
                    href="https://www.floridaspringsinstitute.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Visit Florida Springs Institute
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    Marjorie Harris Carr Cross Florida Greenway — State Park & History
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    State park encompassing the Cross Florida Barge Canal corridor and Rodman Dam.
                  </p>
                  <a
                    href="https://www.floridastateparks.org/parks-and-trails/marjorie-harris-carr-cross-florida-greenway"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View State Park Info
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">St. Johns Riverkeeper — Ocklawaha River Restoration</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Advocacy organization focused on river protection and restoration advocacy.
                  </p>
                  <a
                    href="https://stjohnsriverkeeper.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    Visit St. Johns Riverkeeper
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-foreground">
                    American Rivers — National Dam Removal Database & Benefits
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    National tracking and case studies on successful dam removal projects across the U.S.
                  </p>
                  <a
                    href="https://www.americanrivers.org/rivers/dam-removal-database/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                  >
                    View Dam Removal Database
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
