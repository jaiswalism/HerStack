"use client"
import Image from "next/image"
import { BarChart3, CreditCard, Download, FileText, LineChart, Search, Shield, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboardPage() {
  return (
    <DashboardLayout activePath="/dashboard/admin" userRole="admin">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Reports
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+86 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Loans</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">₹4.8Cr total value</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78</div>
            <p className="text-xs text-muted-foreground">24 require urgent review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Revenue</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹32.4L</div>
            <p className="text-xs text-muted-foreground">+12% from last quarter</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="mt-6 space-y-4">
        <TabsList>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="loans">Loans</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage platform users</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search users..." className="pl-8 w-[250px]" />
                  </div>
                  <Button>Add User</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 bg-muted/50 p-3 text-sm font-medium">
                  <div>User</div>
                  <div>Role</div>
                  <div>Status</div>
                  <div>Joined</div>
                  <div>Last Active</div>
                  <div className="text-right">Actions</div>
                </div>

                {/* User Row 1 */}
                <div className="grid grid-cols-6 items-center p-3 text-sm border-t">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="Sophia Williams"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">Sophia Williams</p>
                      <p className="text-xs text-muted-foreground">sophia@ecostylefashion.com</p>
                    </div>
                  </div>
                  <div>
                    <Badge variant="outline">Entrepreneur</Badge>
                  </div>
                  <div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                  </div>
                  <div>15 Mar 2022</div>
                  <div>Today</div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>

                {/* User Row 2 */}
                <div className="grid grid-cols-6 items-center p-3 text-sm border-t">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="Rahul Sharma"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">Rahul Sharma</p>
                      <p className="text-xs text-muted-foreground">rahul@investorgroup.com</p>
                    </div>
                  </div>
                  <div>
                    <Badge variant="outline">Investor</Badge>
                  </div>
                  <div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                  </div>
                  <div>10 Jan 2022</div>
                  <div>Yesterday</div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>

                {/* User Row 3 */}
                <div className="grid grid-cols-6 items-center p-3 text-sm border-t">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="Priya Patel"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">Priya Patel</p>
                      <p className="text-xs text-muted-foreground">priya@techsolutions.com</p>
                    </div>
                  </div>
                  <div>
                    <Badge variant="outline">Entrepreneur</Badge>
                  </div>
                  <div>
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Pending</Badge>
                  </div>
                  <div>05 Apr 2023</div>
                  <div>3 days ago</div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>

                {/* User Row 4 */}
                <div className="grid grid-cols-6 items-center p-3 text-sm border-t">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="Amit Kumar"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">Amit Kumar</p>
                      <p className="text-xs text-muted-foreground">amit@mentornetwork.org</p>
                    </div>
                  </div>
                  <div>
                    <Badge variant="outline">Mentor</Badge>
                  </div>
                  <div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Inactive</Badge>
                  </div>
                  <div>22 Feb 2022</div>
                  <div>2 weeks ago</div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>

                {/* User Row 5 */}
                <div className="grid grid-cols-6 items-center p-3 text-sm border-t">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="Neha Gupta"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">Neha Gupta</p>
                      <p className="text-xs text-muted-foreground">neha@empowerfund.com</p>
                    </div>
                  </div>
                  <div>
                    <Badge variant="outline">Admin</Badge>
                  </div>
                  <div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                  </div>
                  <div>15 Jan 2021</div>
                  <div>Today</div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Showing 5 of 1,248 users</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="loans" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Loan Management</CardTitle>
                  <CardDescription>Monitor and manage all loans</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search loans..." className="pl-8 w-[250px]" />
                  </div>
                  <Button>Add Loan</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-7 bg-muted/50 p-3 text-sm font-medium">
                  <div>Loan ID</div>
                  <div>Borrower</div>
                  <div>Amount</div>
                  <div>Status</div>
                  <div>Issued Date</div>
                  <div>Due Date</div>
                  <div className="text-right">Actions</div>
                </div>

                {/* Loan Row 1 */}
                <div className="grid grid-cols-7 items-center p-3 text-sm border-t">
                  <div className="font-mono">LOAN-2023-1234</div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-muted overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=24&width=24"
                        alt="Sophia Williams"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    </div>
                    <span>Sophia Williams</span>
                  </div>
                  <div>₹5,00,000</div>
                  <div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                  </div>
                  <div>15 Jan 2023</div>
                  <div>15 Jan 2024</div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>

                {/* Loan Row 2 */}
                <div className="grid grid-cols-7 items-center p-3 text-sm border-t">
                  <div className="font-mono">LOAN-2023-1235</div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-muted overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=24&width=24"
                        alt="Priya Patel"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    </div>
                    <span>Priya Patel</span>
                  </div>
                  <div>₹7,50,000</div>
                  <div>
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Pending</Badge>
                  </div>
                  <div>Pending</div>
                  <div>Pending</div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Approve
                    </Button>
                  </div>
                </div>

                {/* Loan Row 3 */}
                <div className="grid grid-cols-7 items-center p-3 text-sm border-t">
                  <div className="font-mono">LOAN-2022-0987</div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-muted overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=24&width=24"
                        alt="Anita Desai"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    </div>
                    <span>Anita Desai</span>
                  </div>
                  <div>₹3,25,000</div>
                  <div>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Repaid</Badge>
                  </div>
                  <div>10 Jun 2022</div>
                  <div>10 Dec 2022</div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Archive
                    </Button>
                  </div>
                </div>

                {/* Loan Row 4 */}
                <div className="grid grid-cols-7 items-center p-3 text-sm border-t">
                  <div className="font-mono">LOAN-2023-1456</div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-muted overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=24&width=24"
                        alt="Meera Singh"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    </div>
                    <span>Meera Singh</span>
                  </div>
                  <div>₹10,00,000</div>
                  <div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Overdue</Badge>
                  </div>
                  <div>05 Feb 2023</div>
                  <div>05 Feb 2024</div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                  </div>
                </div>

                {/* Loan Row 5 */}
                <div className="grid grid-cols-7 items-center p-3 text-sm border-t">
                  <div className="font-mono">LOAN-2023-1789</div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-muted overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=24&width=24"
                        alt="Ritu Sharma"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    </div>
                    <span>Ritu Sharma</span>
                  </div>
                  <div>₹4,50,000</div>
                  <div>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Disbursing</Badge>
                  </div>
                  <div>20 Apr 2023</div>
                  <div>20 Apr 2024</div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Process
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Showing 5 of 342 loans</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Platform Growth</CardTitle>
                <CardDescription>User acquisition and retention</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-16 w-16 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Line chart showing platform growth</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Download Report
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Loan Performance</CardTitle>
                <CardDescription>Repayment rates and defaults</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Bar chart showing loan performance</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Download Report
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>System Logs</CardTitle>
              <CardDescription>Recent platform activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-amber-800" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Security Alert</p>
                      <p className="text-sm text-muted-foreground">
                        Multiple failed login attempts detected for user ID #1234
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">Today, 10:23 AM</div>
                  </div>
                </div>

                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Users className="h-4 w-4 text-green-800" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">User Registration</p>
                      <p className="text-sm text-muted-foreground">New user registered: Kavita Reddy (Entrepreneur)</p>
                    </div>
                    <div className="text-sm text-muted-foreground">Today, 09:45 AM</div>
                  </div>
                </div>

                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <CreditCard className="h-4 w-4 text-blue-800" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Loan Disbursed</p>
                      <p className="text-sm text-muted-foreground">
                        Loan #LOAN-2023-1789 disbursed to Ritu Sharma (₹4,50,000)
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">Today, 08:30 AM</div>
                  </div>
                </div>

                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-purple-800" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Application Submitted</p>
                      <p className="text-sm text-muted-foreground">
                        New loan application submitted by Priya Patel (₹7,50,000)
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">Yesterday, 04:15 PM</div>
                  </div>
                </div>

                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-red-800" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">System Maintenance</p>
                      <p className="text-sm text-muted-foreground">Scheduled database backup completed successfully</p>
                    </div>
                    <div className="text-sm text-muted-foreground">Yesterday, 02:00 AM</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Logs
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

