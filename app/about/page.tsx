import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header/>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-pink-gradient text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Our Mission & Vision
              </h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                Empowering women entrepreneurs to build successful businesses through financial inclusion, mentorship,
                and community support.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
                <p className="text-muted-foreground md:text-lg">
                  EmpowerFund is dedicated to closing the gender gap in entrepreneurship by providing women with the
                  financial resources, knowledge, and support network they need to start and grow successful businesses.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  We believe that when women entrepreneurs thrive, communities prosper, economies grow, and societies
                  become more equitable. Our platform connects women business owners with the capital, mentorship, and
                  educational resources they need to overcome barriers and achieve their full potential.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Vision</h2>
                <p className="text-muted-foreground md:text-lg">
                  We envision a world where women entrepreneurs have equal access to opportunities and resources,
                  enabling them to build thriving businesses that drive innovation, create jobs, and transform
                  communities.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  By 2030, we aim to support 100,000 women entrepreneurs globally, helping them secure $1 billion in
                  funding, create 500,000 jobs, and build a powerful network of mentors and peers who lift each other
                  up.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Passionate professionals dedicated to supporting women entrepreneurs
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Team Member 1 */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Sarah Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                  <p className="mt-2 text-sm">
                    Former investment banker with 15 years of experience. Passionate about financial inclusion and
                    women's economic empowerment.
                  </p>
                </CardContent>
              </Card>

              {/* Team Member 2 */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Maria Rodriguez"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Maria Rodriguez</h3>
                  <p className="text-sm text-muted-foreground">Chief Operating Officer</p>
                  <p className="mt-2 text-sm">
                    Serial entrepreneur with expertise in scaling startups. Dedicated to creating systems that help
                    women entrepreneurs succeed.
                  </p>
                </CardContent>
              </Card>

              {/* Team Member 3 */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src="/placeholder.svg?height=300&width=300" alt="David Chen" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">David Chen</h3>
                  <p className="text-sm text-muted-foreground">Chief Technology Officer</p>
                  <p className="mt-2 text-sm">
                    Tech leader with experience at major financial platforms. Committed to building inclusive financial
                    technology.
                  </p>
                </CardContent>
              </Card>

              {/* Team Member 4 */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src="/placeholder.svg?height=300&width=300" alt="Aisha Patel" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Aisha Patel</h3>
                  <p className="text-sm text-muted-foreground">Head of Mentorship</p>
                  <p className="mt-2 text-sm">
                    Business coach with expertise in helping women-led businesses scale. Passionate about knowledge
                    sharing and community building.
                  </p>
                </CardContent>
              </Card>

              {/* Team Member 5 */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src="/placeholder.svg?height=300&width=300" alt="James Wilson" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">James Wilson</h3>
                  <p className="text-sm text-muted-foreground">Chief Financial Officer</p>
                  <p className="mt-2 text-sm">
                    Financial expert with background in microfinance and impact investing. Committed to creating
                    sustainable funding models.
                  </p>
                </CardContent>
              </Card>

              {/* Team Member 6 */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Lisa Thompson"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Lisa Thompson</h3>
                  <p className="text-sm text-muted-foreground">Head of Education</p>
                  <p className="mt-2 text-sm">
                    Former business school professor specializing in entrepreneurship. Focused on creating accessible,
                    practical business education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Advisors & Partners */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Advisors & Partners</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Industry leaders and organizations supporting our mission
              </p>
            </div>

            {/* Advisors */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Advisory Board</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src={`/placeholder.svg?height=96&width=96`}
                        alt={`Advisor ${i}`}
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-medium">Advisor Name</h4>
                    <p className="text-sm text-muted-foreground">Position, Company</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partners */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Our Partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="flex items-center justify-center p-4">
                    <Image
                      src={`/placeholder-logo.svg`}
                      alt={`Partner ${i}`}
                      width={120}
                      height={60}
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* History & Milestones */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Journey</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Key milestones in our mission to empower women entrepreneurs
              </p>
            </div>

            <div className="relative mt-12 pl-8 border-l-2 border-primary/30 space-y-12">
              {/* Milestone 1 */}
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold">2018: The Beginning</h3>
                <p className="text-muted-foreground mt-2">
                  EmpowerFund was founded with a mission to address the funding gap for women entrepreneurs. Started
                  with a pilot program supporting 10 women-led businesses.
                </p>
              </div>

              {/* Milestone 2 */}
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold">2019: Expanding Our Impact</h3>
                <p className="text-muted-foreground mt-2">
                  Launched our mentorship program, connecting 50 women entrepreneurs with experienced business leaders.
                  Secured our first major institutional funding.
                </p>
              </div>

              {/* Milestone 3 */}
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold">2020: Digital Transformation</h3>
                <p className="text-muted-foreground mt-2">
                  Developed our digital platform to reach more entrepreneurs and provide online learning resources.
                  Adapted to support businesses during the pandemic.
                </p>
              </div>

              {/* Milestone 4 */}
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold">2021: Growing Our Community</h3>
                <p className="text-muted-foreground mt-2">
                  Reached 200 women entrepreneurs across 15 countries. Launched our investor network to connect
                  businesses with growth capital.
                </p>
              </div>

              {/* Milestone 5 */}
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold">2022: Scaling Our Impact</h3>
                <p className="text-muted-foreground mt-2">
                  Distributed over $5 million in funding. Expanded our educational resources with industry-specific
                  courses and workshops.
                </p>
              </div>

              {/* Milestone 6 */}
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full bg-secondary"></div>
                <h3 className="text-xl font-bold">2023: Looking Forward</h3>
                <p className="text-muted-foreground mt-2">
                  Launching new initiatives to support women entrepreneurs in emerging markets. Setting ambitious goals
                  to reach 1,000 businesses by 2025.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-purple-pink-gradient text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Mission</h2>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                Whether you're an entrepreneur seeking support or an investor looking to make an impact, there's a place
                for you in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register?role=entrepreneur">
                  <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
                    Apply as Entrepreneur
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/register?role=investor">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Join as Investor/Mentor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

