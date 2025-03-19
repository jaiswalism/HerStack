"use client"

import Link from "next/link"
import Image from "next/image"
import { BarChart3, ChevronRight, CreditCard, DollarSign, LineChart, PieChart, TrendingUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function InvestorDashboardPage() {
  return (
    <DashboardLayout activePath="/dashboard/investor" userRole="investor">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Investor Dashboard</h1>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/investor/opportunities">
            <Button>
              <DollarSign className="mr-2 h-4 w-4" />
              Explore Opportunities
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹25,00,000</div>
            <p className="text-xs text-muted-foreground">+₹5,00,000 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Investments</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Across 8 businesses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Return</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14.2%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Entrepreneurs Supported</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">+3 from last quarter</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="portfolio" className="mt-6 space-y-4">
        <TabsList>
          <TabsTrigger value="portfolio">Portfolio Overview</TabsTrigger>
          <TabsTrigger value="opportunities">New Opportunities</TabsTrigger>
          <TabsTrigger value="impact">Impact Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Investment Portfolio</CardTitle>
              <CardDescription>Your active investments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Investment 1 */}
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="EcoStyle Fashion"
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">EcoStyle Fashion</h3>
                        <p className="text-sm text-muted-foreground">Sustainable Clothing Brand</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹5,00,000</p>
                      <p className="text-sm text-green-600">+18.5% ROI</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Investment Term</span>
                      <span>18 months remaining</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Investment 2 */}
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="TechGrowth Solutions"
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">TechGrowth Solutions</h3>
                        <p className="text-sm text-muted-foreground">EdTech Startup</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹7,50,000</p>
                      <p className="text-sm text-green-600">+12.3% ROI</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Investment Term</span>
                      <span>24 months remaining</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Investment 3 */}
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="HealthFirst"
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">HealthFirst</h3>
                        <p className="text-sm text-muted-foreground">Healthcare Services</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹4,00,000</p>
                      <p className="text-sm text-green-600">+15.7% ROI</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Investment Term</span>
                      <span>12 months remaining</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Investments
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Allocation</CardTitle>
                <CardDescription>Distribution by sector</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="h-16 w-16 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Pie chart showing portfolio allocation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Returns Over Time</CardTitle>
                <CardDescription>Historical performance</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-16 w-16 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Line chart showing returns over time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="opportunities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Opportunities</CardTitle>
              <CardDescription>Businesses seeking funding that match your investment criteria</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Opportunity 1 */}
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="GreenHarvest"
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">GreenHarvest</h3>
                        <p className="text-sm text-muted-foreground">Organic Food Production</p>
                      </div>
                    </div>
                    <div className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                      95% Match
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Seeking</p>
                      <p className="font-medium">₹10,00,000</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Term</p>
                      <p className="font-medium">36 months</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Expected ROI</p>
                      <p className="font-medium">16-18%</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button size="sm">Express Interest</Button>
                  </div>
                </div>

                {/* Opportunity 2 */}
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="EduSpark"
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">EduSpark</h3>
                        <p className="text-sm text-muted-foreground">Educational Technology</p>
                      </div>
                    </div>
                    <div className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                      88% Match
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Seeking</p>
                      <p className="font-medium">₹15,00,000</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Term</p>
                      <p className="font-medium">48 months</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Expected ROI</p>
                      <p className="font-medium">14-16%</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button size="sm">Express Interest</Button>
                  </div>
                </div>

                {/* Opportunity 3 */}
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="WellnessHub"
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">WellnessHub</h3>
                        <p className="text-sm text-muted-foreground">Health & Wellness Services</p>
                      </div>
                    </div>
                    <div className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                      82% Match
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Seeking</p>
                      <p className="font-medium">₹8,00,000</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Term</p>
                      <p className="font-medium">24 months</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Expected ROI</p>
                      <p className="font-medium">12-14%</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button size="sm">Express Interest</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Opportunities
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="impact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Impact</CardTitle>
              <CardDescription>The difference your investments are making</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <Users className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold">125+</h3>
                  <p className="text-center text-sm text-muted-foreground">Jobs Created</p>
                </div>

                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <BarChart3 className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold">₹1.2Cr</h3>
                  <p className="text-center text-sm text-muted-foreground">Economic Impact</p>
                </div>

                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <Users className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold">18</h3>
                  <p className="text-center text-sm text-muted-foreground">Women Entrepreneurs Supported</p>
                </div>

                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <BarChart3 className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold">8</h3>
                  <p className="text-center text-sm text-muted-foreground">Communities Impacted</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Impact by Sector</h3>
                <div className="h-80 w-full flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Bar chart showing impact by sector</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Download Impact Report
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

