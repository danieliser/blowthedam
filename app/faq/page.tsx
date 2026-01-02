import { Navigation } from "@/components/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="absolute inset-0 bg-[url('/ocklawaha-river-flowing.jpg')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Addressing common concerns about Rodman Dam removal and Ocklawaha River restoration
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* Recreation & Fishing */}
            <AccordionItem value="recreation" className="border rounded-lg px-6 bg-card shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Won't restoration hurt recreation and fishing?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                <p className="mb-3">
                  Restoration will change the type of recreation, not eliminate it. A flowing river system supports:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>World-class paddling and kayaking opportunities through a scenic river corridor</li>
                  <li>
                    Enhanced sport fishing for river species like bass, which thrive in flowing water with structure
                  </li>
                  <li>
                    Ecotourism centered on crystal-clear springs and natural Florida ecosystems (similar to the
                    successful Rainbow River and Ichetucknee River models)
                  </li>
                </ul>
                <p className="mt-3">
                  While reservoir fishing will transition to river fishing, studies of other dam removals show that
                  river-based recreation often provides greater long-term economic benefits through diverse tourism.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Jobs & Economy */}
            <AccordionItem value="jobs" className="border rounded-lg px-6 bg-card shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                What about jobs and the local economy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                <p className="mb-3">
                  Economic studies of dam removals consistently show net positive impacts. Restoration creates jobs
                  through:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Construction and restoration work (immediate employment)</li>
                  <li>Ecotourism businesses (paddling outfitters, guides, lodging)</li>
                  <li>Property value increases near restored waterways</li>
                  <li>Enhanced fisheries supporting guide services and tackle shops</li>
                </ul>
                <p className="mt-3">
                  Examples: The Elwha River restoration in Washington created hundreds of jobs and boosted local tourism
                  revenue. Silver Springs, Florida generates over $40 million annually in tourism—imagine connecting
                  that to a pristine Ocklawaha River system.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Manatees Usage */}
            <AccordionItem value="manatees-history" className="border rounded-lg px-6 bg-card shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Did manatees historically use the Ocklawaha River before the dam was built?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                <p className="mb-3">
                  This claim is not supported by credible scientific evidence. The absence of historical mentions
                  doesn't prove manatees weren't present—early river accounts focused on navigation and commerce, not
                  wildlife documentation.
                </p>
                <p className="mb-3">What we do know:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Manatees naturally move between the St. Johns River and warm-water spring refuges like Silver
                    Springs
                  </li>
                  <li>The Ocklawaha River was the natural corridor connecting these critical habitats</li>
                  <li>
                    Modern manatees use Rodman not because it's ideal, but because the dam blocks access to natural
                    spring refuges upstream
                  </li>
                </ul>
                <p className="mt-3">
                  Restoration reconnects this natural corridor, allowing manatees to access warm springs rather than
                  forcing them into an artificial, actively managed reservoir.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Manatee Sanctuary */}
            <AccordionItem value="manatees-sanctuary" className="border rounded-lg px-6 bg-card shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Isn't Rodman Reservoir an essential manatee sanctuary?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                <p className="mb-3">
                  Rodman is not a natural sanctuary—it's an artificial lake requiring constant management. Manatees need
                  two critical things:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <strong>Warm-water refuges</strong> during cold weather (natural springs provide this)
                  </li>
                  <li>
                    <strong>Connected habitat</strong> to move between feeding areas and warm refuges
                  </li>
                </ol>
                <p className="mt-3">
                  A static reservoir doesn't provide optimal habitat compared to a connected river-spring system. The
                  dam actually blocks manatees from accessing natural warm-water springs in Silver Springs and upstream
                  areas. Restoration removes this barrier and provides miles of connected natural habitat rather than
                  concentrating animals in a managed impoundment.
                </p>
                <p className="mt-3">
                  Additionally, lock and dam infrastructure poses safety risks to manatees—incidents of injury and
                  mortality at similar structures are well-documented.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Water Quality */}
            <AccordionItem value="water-quality" className="border rounded-lg px-6 bg-card shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Won't removing the dam make water quality worse?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                <p className="mb-3">
                  This concern confuses short-term transition with long-term outcomes. Here's the reality:
                </p>
                <p className="mb-3">
                  <strong>Short-term:</strong> Phased restoration with sediment management prevents massive downstream
                  nutrient pulses. Modern restoration projects use staged drawdowns, sediment stabilization, and
                  monitoring to prevent water quality problems.
                </p>
                <p className="mb-3">
                  <strong>Long-term:</strong> A flowing river system is naturally more resilient than a static
                  reservoir:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Natural river flow prevents stratification and oxygen depletion that plague reservoirs in hot
                    weather
                  </li>
                  <li>Restored wetlands and floodplains filter nutrients naturally</li>
                  <li>Spring discharge and river flow dilute nutrient concentrations</li>
                  <li>Eliminating the warm, stagnant reservoir reduces conditions that favor toxic algae blooms</li>
                </ul>
                <p className="mt-3">
                  The real water quality problem is watershed-wide nutrient pollution (stormwater, wastewater,
                  agriculture)—which requires systemic solutions. A reservoir doesn't solve this; it just masks it with
                  a settling effect while concentrating nutrients in sediments.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Springs */}
            <AccordionItem value="springs" className="border rounded-lg px-6 bg-card shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Will removing the dam actually help springs flow?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                <p className="mb-3">
                  Yes. The hydraulic gradient—the pressure difference between groundwater and surface water—directly
                  affects spring discharge. When the reservoir pool is high, it reduces the gradient and suppresses
                  spring flow. Lowering the pool increases the gradient and allows springs to flow more freely.
                </p>
                <p className="mb-3">
                  This isn't speculation—data from reservoir drawdowns show spring discharge increases when water levels
                  drop. While the magnitude varies by spring and aquifer conditions, the relationship is
                  well-established in hydrogeology.
                </p>
                <p className="mt-3">
                  Restoration doesn't instantly "fix" springs affected by aquifer depletion and over-pumping, but it
                  removes one more barrier to natural spring function and creates conditions for long-term recovery.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Aquifer Recharge */}
            <AccordionItem value="recharge" className="border rounded-lg px-6 bg-card shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Doesn't the dam hold water to recharge the aquifer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                <p className="mb-3">
                  This claim oversimplifies complex hydrogeology. The Floridan Aquifer is primarily recharged by
                  rainfall infiltrating through the landscape—not by holding water in reservoirs.
                </p>
                <p className="mb-3">
                  Even if a reservoir could contribute to recharge (which is debatable), Rodman's compacted sediment and
                  muck layer would reduce infiltration rates. Water would likely leak through preferential pathways
                  (fractures, karst features, spring vents) rather than uniformly recharging the aquifer.
                </p>
                <p className="mt-3">
                  In reality, restoring natural river-floodplain connections and watershed permeability does more for
                  aquifer recharge than impounding water behind a dam. Healthy wetlands and floodplains act as natural
                  recharge zones.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Ecosystem Destruction */}
            <AccordionItem value="ecosystem" className="border rounded-lg px-6 bg-card shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Won't removing the dam destroy the established ecosystem?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                <p className="mb-3">
                  Rodman does support an ecosystem—but it's an artificial, actively managed system requiring herbicide
                  treatments, mechanical vegetation control, and water level manipulation. It's not a self-sustaining
                  natural ecosystem.
                </p>
                <p className="mb-3">
                  Restoration transitions the system toward a more resilient, naturally functioning river-spring
                  ecosystem. This doesn't happen instantly, but recovery timelines from other dam removals are
                  encouraging:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kennebec River (Maine): Fish returned within months; ecosystem recovery within 5-10 years</li>
                  <li>Elwha River (Washington): Salmon returned within a year; sediment stabilized in 2-3 years</li>
                  <li>
                    Ocklawaha drawdowns (past): Native river vegetation and fish communities quickly re-established
                  </li>
                </ul>
                <p className="mt-3">
                  Natural river systems are generally more resilient to environmental changes (drought, floods, climate
                  shifts) than managed reservoirs dependent on human intervention.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Cost */}
            <AccordionItem value="cost" className="border rounded-lg px-6 bg-card shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Isn't restoration too expensive?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                <p className="mb-3">We need to compare the full costs honestly. Maintaining Rodman Dam requires:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ongoing herbicide treatments for aquatic vegetation</li>
                  <li>Mechanical vegetation control</li>
                  <li>Lock and dam operations and maintenance</li>
                  <li>Infrastructure repairs and eventual replacement</li>
                  <li>Water level management during droughts and floods</li>
                </ul>
                <p className="mt-3">
                  These costs continue forever. Restoration is a one-time investment that eliminates long-term
                  maintenance costs. Additionally, natural ecosystems provide free services: water filtration, flood
                  mitigation, habitat support, and recreation—worth millions annually.
                </p>
                <p className="mt-3">
                  When dam removal projects are properly planned and funded, they generate net economic benefits through
                  increased property values, tourism revenue, and ecosystem services.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* All Dams */}
            <AccordionItem value="all-dams" className="border rounded-lg px-6 bg-card shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                If we remove Rodman, do we have to remove all dams?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                <p className="mb-3">
                  No. This is a false choice fallacy. Dam decisions should be made case-by-case based on:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The dam's original purpose and whether it's still serving that function</li>
                  <li>Ecological costs vs. economic and safety benefits</li>
                  <li>Whether alternatives exist for the dam's services (flood control, water supply, etc.)</li>
                  <li>Condition of the infrastructure and maintenance costs</li>
                </ul>
                <p className="mt-3">
                  Rodman Dam is unique: it was built for a barge canal that was never completed and was declared a
                  national disgrace. It serves no original purpose. Many other dams provide flood control, hydropower,
                  or water supply—Rodman does none of these.
                </p>
                <p className="mt-3">
                  Advocating for Rodman's removal doesn't mean opposing all dams—it means recognizing that this
                  particular dam is an obsolete remnant of a failed project with disproportionate ecological costs.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Flood Control */}
            <AccordionItem value="flooding" className="border rounded-lg px-6 bg-card shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                What about flood control?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                <p className="mb-3">
                  Rodman Dam was not designed or operated primarily for flood control. Its limited storage capacity and
                  operational constraints mean it provides minimal flood protection compared to dams specifically
                  designed for that purpose.
                </p>
                <p className="mb-3">Natural river-floodplain systems actually provide superior flood management:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Wetlands and floodplains absorb and slowly release floodwaters</li>
                  <li>Natural river channels and meanders dissipate flood energy</li>
                  <li>
                    Restored systems are resilient to extreme weather events (which are increasing with climate change)
                  </li>
                </ul>
                <p className="mt-3">
                  Maintaining development patterns that depend on a failing dam is a poor long-term strategy. Natural
                  floodplain restoration provides sustainable flood resilience without ongoing engineering
                  interventions.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Call to Action */}
          <div className="mt-16 rounded-lg bg-primary/5 border-2 border-primary/20 p-8 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
              We encourage critical thinking and evidence-based discussion. Check our Sources page for scientific
              reports, or reach out to learn more about Ocklawaha River restoration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/sources"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View Sources & Research
              </a>
              <a
                href="/take-action"
                className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground hover:bg-secondary/90 transition-colors"
              >
                Take Action
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
