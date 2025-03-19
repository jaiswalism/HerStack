import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, BookOpen, CheckCircle, Clock, CreditCard, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-xl font-bold">EmpowerFund</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Empowering Women Entrepreneurs Through Financial Inclusion
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Access loans, mentorship, and resources designed specifically for women-led businesses. Join our
                  community and turn your vision into reality.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register?role=entrepreneur">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Apply for Funding
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/register?role=investor">
                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                      Become an Investor
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="Women entrepreneurs collaborating"
                  width={800}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform connects women entrepreneurs with the resources they need to succeed
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Access Capital</h3>
                <p className="text-center text-muted-foreground">
                  Apply for loans tailored to women entrepreneurs with flexible terms and competitive rates.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Get Mentorship</h3>
                <p className="text-center text-muted-foreground">
                  Connect with experienced mentors who provide guidance and support for your business journey.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary p-3 text-primary-foreground">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Learn & Grow</h3>
                <p className="text-center text-muted-foreground">
                  Access educational resources and tools designed to help your business thrive and scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how women entrepreneurs have transformed their businesses with our platform
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Sarah Johnson"
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <CardTitle>Sarah Johnson</CardTitle>
                      <CardDescription>Tech Startup Founder</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "EmpowerFund helped me secure the funding I needed to scale my tech startup. The mentorship program
                    was invaluable for navigating challenges."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Maria Rodriguez"
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <CardTitle>Maria Rodriguez</CardTitle>
                      <CardDescription>Retail Business Owner</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The loan I received allowed me to open a second location. The business courses helped me improve my
                    financial management skills."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Aisha Patel"
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <CardTitle>Aisha Patel</CardTitle>
                      <CardDescription>Healthcare Innovator</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Beyond funding, the network of women entrepreneurs I connected with through EmpowerFund has been
                    crucial to my company's growth."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Impact</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Making a difference in women's entrepreneurship
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-4">
              <div className="flex flex-col items-center space-y-2">
                <BarChart3 className="h-10 w-10 text-primary" />
                <h3 className="text-3xl font-bold">$5M+</h3>
                <p className="text-center text-sm text-muted-foreground">Funding Distributed</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-center text-sm text-muted-foreground">Women Entrepreneurs Supported</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Clock className="h-10 w-10 text-primary" />
                <h3 className="text-3xl font-bold">2,000+</h3>
                <p className="text-center text-sm text-muted-foreground">Mentorship Hours</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <CheckCircle className="h-10 w-10 text-primary" />
                <h3 className="text-3xl font-bold">92%</h3>
                <p className="text-center text-sm text-muted-foreground">Business Success Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our platform
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Who can apply for funding?</AccordionTrigger>
                  <AccordionContent>
                    Our platform is designed for women entrepreneurs at all stages of business. Whether you're starting
                    a new venture or looking to scale an existing business, you can apply for funding through our
                    platform.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What types of funding are available?</AccordionTrigger>
                  <AccordionContent>
                    We offer various funding options including microloans, growth capital, and equity investments. The
                    type of funding available to you will depend on your business stage, needs, and qualifications.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How does the mentorship program work?</AccordionTrigger>
                  <AccordionContent>
                    Our mentorship program connects you with experienced business professionals who provide guidance
                    tailored to your specific needs. You can schedule one-on-one sessions, join group mentoring, or
                    access recorded mentorship content.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What resources are available in the learning center?</AccordionTrigger>
                  <AccordionContent>
                    Our learning center includes courses on business planning, financial management, marketing,
                    leadership, and more. You'll have access to video lessons, downloadable resources, interactive
                    worksheets, and assessments.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How can I become an investor or mentor?</AccordionTrigger>
                  <AccordionContent>
                    If you're interested in becoming an investor or mentor, you can register on our platform and select
                    the appropriate role. You'll need to complete a profile detailing your expertise and investment
                    interests, and our team will review your application.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter for the latest updates, resources, and opportunities
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button type="submit" className="w-full sm:w-auto">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 EmpowerFund. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

