"use client"

import { useState } from "react"
import { CalendarDays, Check, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function MentorshipPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/dashboard">
              <div className="relative h-8 w-8 rounded-full bg-muted">
                <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="rounded-full object-cover" />
              </div>
            </a>
            <span className="text-xl font-bold">EmpowerFund</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
              Dashboard
            </a>
            <a href="/dashboard/loans" className="text-sm font-medium hover:underline underline-offset-4">
              Loans
            </a>
            <a href="/dashboard/mentorship" className="text-sm font-medium hover:underline underline-offset-4">
              Mentorship
            </a>
            <a href="/dashboard/learning" className="text-sm font-medium hover:underline underline-offset-4">
              Learning
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Messages</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </Button>
            <a href="/dashboard/settings">
              <Button variant="ghost" size="icon">
                <span className="sr-only">Settings</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </Button>
            </a>
            <a href="/dashboard/profile">
              <div className="relative h-8 w-8 rounded-full bg-muted cursor-pointer">
                <img src="/placeholder.svg?height=32&width=32" alt="User" className="rounded-full object-cover" />
              </div>
            </a>
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pr-6 lg:py-8">
            <nav className="grid items-start gap-2">
              <a href="/dashboard">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                    <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                  </svg>
                  Dashboard
                </Button>
              </a>
              <a href="/dashboard/loans">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                  Loans
                </Button>
              </a>
              <a href="/dashboard/mentorship">
                <Button variant="secondary" className="w-full justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  Mentorship
                </Button>
              </a>
              <a href="/dashboard/learning">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  Learning
                </Button>
              </a>
              <a href="/dashboard/calendar">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                  Calendar
                </Button>
              </a>
              <a href="/dashboard/business">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"></path>
                  </svg>
                  Business Profile
                </Button>
              </a>
              <a href="/dashboard/settings">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  Settings
                </Button>
              </a>
            </nav>
          </div>
        </aside>
        <main className="flex w-full flex-col overflow-hidden py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Mentorship Hub</h1>
            <div className="flex items-center gap-2">
              <Button>
                <CalendarDays className="mr-2 h-4 w-4" />
                Schedule Session
              </Button>
            </div>
          </div>

          <Tabs defaultValue="mentors" className="mt-6 space-y-4">
            <TabsList>
              <TabsTrigger value="mentors">Find Mentors</TabsTrigger>
              <TabsTrigger value="sessions">My Sessions</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="mentors" className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search mentors by name, expertise, or industry..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline">Filter</Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Mentor Card 1 */}
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative h-16 w-16 rounded-full overflow-hidden">
                          <img src="/placeholder.svg?height=64&width=64" alt="Jennifer Lee" className="object-cover" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Jennifer Lee</CardTitle>
                          <CardDescription>Marketing Director, TechGrowth</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Top Mentor</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                        <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                        <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                        <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                        <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                        <span className="ml-1 text-muted-foreground">(48 reviews)</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-2">
                        <Badge variant="outline" className="bg-muted/50">
                          Digital Marketing
                        </Badge>
                        <Badge variant="outline" className="bg-muted/50">
                          Brand Strategy
                        </Badge>
                        <Badge variant="outline" className="bg-muted/50">
                          Social Media
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground mt-2">
                        15+ years experience helping startups and small businesses develop effective marketing
                        strategies and build strong brands.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Schedule Session</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sessions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                  <CardDescription>Your scheduled mentorship sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <img
                              src="/placeholder.svg?height=48&width=48"
                              alt="Jennifer Lee"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">Marketing Strategy Session</h3>
                            <p className="text-sm text-muted-foreground">with Jennifer Lee</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">Tomorrow, 2:00 PM</p>
                          <p className="text-sm text-muted-foreground">60 minutes</p>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button size="sm">Join Meeting</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Mentorship Resources</CardTitle>
                  <CardDescription>Tools and guides to help you get the most from your mentorship</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">How to Build a Productive Mentorship Relationship</p>
                        <p className="text-sm text-muted-foreground">
                          Learn strategies for creating a valuable mentorship experience for both parties.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">5 Questions Every Entrepreneur Should Ask Their Mentor</p>
                        <p className="text-sm text-muted-foreground">
                          Maximize your mentorship sessions with these powerful questions.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

