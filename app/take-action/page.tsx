"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, FileText, Share2, Users, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function TakeActionPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    zipCode: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the data to a backend
    alert("Thank you for your support! Your message has been recorded.")
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary py-24 text-secondary-foreground sm:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/rodman-dam-explosion.jpg"
            alt="Rodman Dam removal visualization"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-secondary" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight drop-shadow-lg sm:text-5xl">
              Take Action Today
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed drop-shadow-md">
              Your voice matters. Join thousands of Floridians calling for the restoration of the Ocklawaha River and
              removal of Rodman Dam.
            </p>
          </div>
        </div>
      </section>

      {/* Action Steps */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Ways to Make a Difference</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Every action counts toward restoring Florida's natural river systems
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Sign Petition */}
            <Card className="group border-border bg-card p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Sign the Petition</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Add your name to the growing list of Floridians supporting dam removal and river restoration.
              </p>
              <Button className="mt-6 w-full bg-transparent" variant="outline">
                Sign Now
              </Button>
            </Card>

            {/* Contact Officials */}
            <Card className="group border-border bg-card p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Contact Officials</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Let your elected representatives know you support Ocklawaha River restoration.
              </p>
              <Button className="mt-6 w-full bg-transparent" variant="outline">
                Find Your Reps
              </Button>
            </Card>

            {/* Spread Awareness */}
            <Card className="group border-border bg-card p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Spread Awareness</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Share this site and information about river restoration with friends and family.
              </p>
              <Button className="mt-6 w-full bg-transparent" variant="outline">
                Share This Site
              </Button>
            </Card>

            {/* Join Organizations */}
            <Card className="group border-border bg-card p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Join Organizations</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Connect with environmental groups actively working on Ocklawaha restoration.
              </p>
              <Button className="mt-6 w-full bg-transparent" variant="outline">
                Learn More
              </Button>
            </Card>

            {/* Attend Meetings */}
            <Card className="group border-border bg-card p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Attend Meetings</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Participate in public meetings and hearings about water management decisions.
              </p>
              <Button className="mt-6 w-full bg-transparent" variant="outline">
                Find Events
              </Button>
            </Card>

            {/* Donate */}
            <Card className="group border-border bg-card p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Support the Cause</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Financial support helps fund research, advocacy, and legal efforts for restoration.
              </p>
              <Button className="mt-6 w-full bg-secondary hover:bg-secondary/90">Donate</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Send a Message</h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Share your thoughts and join the movement for river restoration
              </p>
            </div>

            <Card className="mt-12 border-border bg-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="mt-2"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="mt-2"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-foreground">
                    ZIP Code
                  </label>
                  <Input
                    id="zipCode"
                    type="text"
                    required
                    className="mt-2"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    placeholder="32601"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    className="mt-2"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Why do you support Ocklawaha River restoration?"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                  Send Message
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  By submitting, you agree to receive updates about river restoration efforts.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Officials Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Contact Key Decision Makers</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              These officials have influence over water management and environmental policy in Florida
            </p>

            <div className="mt-12 space-y-6">
              <Card className="border-border bg-card p-6">
                <h3 className="font-bold text-foreground">Florida Governor's Office</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The Governor appoints members to the St. Johns River Water Management District Governing Board
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <Button size="sm" variant="outline">
                    Email Governor
                  </Button>
                  <Button size="sm" variant="outline">
                    Call Office
                  </Button>
                </div>
              </Card>

              <Card className="border-border bg-card p-6">
                <h3 className="font-bold text-foreground">St. Johns River Water Management District</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  SJRWMD manages water resources in the region and has authority over Rodman Dam decisions
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <Button size="sm" variant="outline">
                    Contact SJRWMD
                  </Button>
                  <Button size="sm" variant="outline">
                    Attend Meeting
                  </Button>
                </div>
              </Card>

              <Card className="border-border bg-card p-6">
                <h3 className="font-bold text-foreground">Florida Department of Environmental Protection</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  DEP oversees environmental regulations and restoration projects statewide
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <Button size="sm" variant="outline">
                    Contact DEP
                  </Button>
                  <Button size="sm" variant="outline">
                    View Projects
                  </Button>
                </div>
              </Card>

              <Card className="border-border bg-card p-6">
                <h3 className="font-bold text-foreground">Your State Representatives</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Local legislators can advocate for restoration funding and environmental policy changes
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <Button size="sm" variant="outline">
                    Find Your Senator
                  </Button>
                  <Button size="sm" variant="outline">
                    Find Your Representative
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Together We Can Restore the Ocklawaha</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed">
              Every voice, every signature, every call makes a difference. Join the movement to bring back one of
              Florida's most important river systems.
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Send Your Message
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
