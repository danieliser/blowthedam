import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, AlertCircle, ArrowRight, Scale } from "lucide-react"
import Link from "next/link"
import { Citation } from "@/components/citation"

export default function EvidencePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/ocklawaha-river-flowing.jpg"
            alt="Ocklawaha River"
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center">
              <Scale className="h-16 w-16" />
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Weighing the Evidence</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed">
              An honest assessment of the documented evidence for keeping vs. breaching Rodman Dam, based on
              peer-reviewed research and agency reports.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Approach to Evidence</h2>
            <div className="mt-8 space-y-6 text-pretty leading-relaxed text-foreground">
              <p>
                This page presents a balanced review of the documented evidence on both sides of the Rodman Dam debate.
                We cite peer-reviewed research, agency reports, and technical studies—not opinions or assumptions.
              </p>
              <p>
                <strong>Important context:</strong> Both "keep" and "breach" positions have some legitimate evidence.
                The question isn't whether one side has zero merit—it's which approach is better supported by the weight
                of documented research, particularly regarding manatee conservation and ecosystem function.
              </p>
            </div>

            <Card className="mt-8 border-l-4 border-l-secondary bg-gradient-to-br from-secondary/10 to-background p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="font-bold text-foreground">What We Mean by "Stronger Evidence"</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Stronger evidence = peer-reviewed publications, agency technical reports with methods and data, or
                    well-documented observations. Weaker evidence = general claims without specific citations,
                    advocacy-only statements, or assumptions not backed by published research.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Side-by-Side Evidence Comparison */}
      <section className="border-t-4 border-primary bg-gradient-to-b from-muted/50 to-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Evidence for Breaching vs. Keeping
          </h2>
          <p className="mt-4 text-center text-pretty text-lg text-muted-foreground">
            What the documented research actually says on both sides
          </p>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Evidence FOR Breaching/Restoration */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <CheckCircle className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Evidence FOR Breaching</h3>
              </div>

              <Card className="border-l-4 border-l-secondary bg-card p-6 shadow-md">
                <h4 className="font-bold text-foreground">1. Documented Manatee Harm at Dam/Lock System</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Multiple verified and undetermined manatee mortalities documented at Buckman Lock/Rodman area, with
                  carcass damage consistent with structural trauma.{" "}
                  <Citation slug="marine-mammal">
                    Marine Mammal Commission report
                  </Citation>{" "}
                  explicitly states removal would eliminate the only known source of water-control-structure mortality
                  in the St. Johns River system.
                </p>
                <p className="mt-2 text-xs italic text-muted-foreground">
                  Source: Marine Mammal Commission, UF-hosted technical reports
                </p>
              </Card>

              <Card className="border-l-4 border-l-secondary bg-card p-6 shadow-md">
                <h4 className="font-bold text-foreground">
                  2. Restoration Expands Safer Access + Eliminates Mortality Source
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Technical literature frames restoration as restoring access to the Ocklawaha/Silver River system and
                  inundated springs while removing structural hazards. This isn't speculation—it's the documented
                  restoration rationale from agency planning processes.
                </p>
                <p className="mt-2 text-xs italic text-muted-foreground">
                  Source: Marine Mammal Commission, Florida Springs Institute synthesis
                </p>
              </Card>

              <Card className="border-l-4 border-l-secondary bg-card p-6 shadow-md">
                <h4 className="font-bold text-foreground">3. Rodman Is Not a "Leave It Alone" Ecosystem</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  FWC and other agencies document recurring drawdowns every 3–4 years for vegetation management. The
                  reservoir's current condition depends on ongoing human intervention, not natural stability.
                </p>
                <p className="mt-2 text-xs italic text-muted-foreground">Source: FWC, UF/IFAS extension publications</p>
              </Card>

              <Card className="border-l-4 border-l-secondary bg-card p-6 shadow-md">
                <h4 className="font-bold text-foreground">4. Water-Quality Tradeoffs Were Studied</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <Citation slug="fl-springs-institute">
                    Florida Springs Institute
                  </Citation>{" "}
                  documents that additional water-quality studies were required and completed during restoration
                  planning, with findings that restoration benefits outweighed short-term water-quality impacts. This
                  shows the concern was addressed, not ignored.
                </p>
                <p className="mt-2 text-xs italic text-muted-foreground">
                  Source: Florida Springs Institute synthesis of planning history
                </p>
              </Card>
            </div>

            {/* Evidence FOR Keeping */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted-foreground">
                  <CheckCircle className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Evidence FOR Keeping</h3>
              </div>

              <Card className="border-l-4 border-l-muted-foreground bg-card p-6 shadow-md">
                <h4 className="font-bold text-foreground">1. Rodman Is a Major Fishery/Recreation Asset</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <Citation slug="fwc-rodman">
                    FWC
                  </Citation>{" "}
                  promotes Rodman as a significant reservoir fishing destination. Peer-reviewed research shows drawdowns can create strong largemouth bass recruitment under managed conditions.
                </p>
                <p className="mt-2 text-xs italic text-muted-foreground">
                  Source: FWC management pages, Nagid et al. 2015 (North American Journal of Fisheries Management)
                </p>
              </Card>

              <Card className="border-l-4 border-l-muted-foreground bg-card p-6 shadow-md">
                <h4 className="font-bold text-foreground">2. Rodman Can Retain Phosphorus</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <a
                    href="/sources#sfwmd-phosphorus"
                    className="text-secondary underline hover:text-secondary/80"
                    title="SFWMD - Water Quality Impacts Report"
                  >
                    South Florida Water Management District contractor report
                  </a>{" "}
                  calculated Rodman's phosphorus balance and shows net phosphorus retention across years (Table 9-5).
                  This is real—reservoirs can trap some nutrients under certain conditions.
                </p>
                <p className="mt-2 text-xs italic text-muted-foreground">
                  Source: SFWMD "Water Quality Impacts of Reservoirs" report
                </p>
              </Card>

              <Card className="bg-card border-l-4 border-l-muted-foreground p-6 shadow-md">
                <h4 className="font-bold text-foreground">3. Local Economic Value</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Florida TaxWatch argues Rodman provides local economic value and that removal produces negative net
                  benefits under their assumptions. Note: This is policy analysis from a think tank, not peer-reviewed
                  academic research.
                </p>
                <p className="mt-2 text-xs italic text-muted-foreground">
                  Source: Florida TaxWatch (2022) - advocacy/policy document
                </p>
              </Card>

              <Card className="border-l-4 border-l-muted-foreground bg-muted/30 p-6 shadow-md">
                <h4 className="font-bold text-foreground">Important Caveat</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  These benefits are real but narrow: "retains some phosphorus" ≠ "solves algae blooms," and a managed
                  fishery doesn't negate manatee mortality concerns or ecosystem connectivity issues. The evidence for
                  keeping is strongest on recreation/fishing, weaker on broader ecosystem claims.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">The Bottom Line</h2>
            <div className="mt-8 space-y-6 text-pretty leading-relaxed text-foreground">
              <p>
                <strong>
                  If your decision metric is manatee conservation + restoring a connected river-spring corridor while
                  removing documented structure-related risk
                </strong>
                , the evidence we pulled is stronger for breaching/partial restoration. The Marine Mammal Commission
                report, documented mortality data, and restoration planning studies support this approach.
              </p>
              <p>
                <strong>
                  If your metric is maintaining a managed reservoir fishery and you view nutrient retention as the
                  overriding benefit
                </strong>
                , there's credible support for that narrower case—but it's not as strong on the manatee/habitat
                fundamentals.
              </p>
            </div>

            <Card className="mt-12 border-secondary bg-gradient-to-br from-secondary/10 to-background p-8">
              <div className="flex items-start gap-4">
                <Scale className="mt-1 h-8 w-8 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">How We Made This Assessment</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    We searched for peer-reviewed research, agency technical reports, and documented studies. We
                    deliberately included evidence from both sides. The "stronger evidence" conclusion is based on
                    source quality, specificity of claims, and alignment with conservation goals—not cherry-picking only
                    pro-restoration sources.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    You can verify every claim on this page by visiting our{" "}
                    <Link href="/sources" className="font-medium text-secondary underline">
                      Sources & References
                    </Link>{" "}
                    page, which provides direct links to all cited research and reports.
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The Evidence Supports Restoration</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed">
              Based on the documented research, breaching Rodman Dam to restore the Ocklawaha River offers the best path
              forward for manatee conservation and ecosystem health.
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
                <Link href="/sources">View All Sources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
