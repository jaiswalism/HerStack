"use client"

import { useState } from "react"
import Image from "next/image"
import { Building2, Edit, MapPin, Save, Upload, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function BusinessProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <DashboardLayout activePath="/dashboard/business">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Business Profile</h1>
        <Button variant={isEditing ? "default" : "outline"} onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          ) : (
            <>
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="overview" className="mt-6 space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="details">Business Details</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Business Logo</CardTitle>
                <CardDescription>Your business identity</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-muted">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Business Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                {isEditing && (
                  <Button variant="outline" size="sm" className="mt-4">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Logo
                  </Button>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>Basic details about your business</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {isEditing ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input id="businessName" defaultValue="EcoStyle Fashion" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type</Label>
                      <Select defaultValue="llc">
                        <SelectTrigger id="businessType">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="llc">LLC</SelectItem>
                          <SelectItem value="corporation">Corporation</SelectItem>
                          <SelectItem value="nonprofit">Nonprofit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select defaultValue="retail">
                        <SelectTrigger id="industry">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="food">Food & Beverage</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="services">Professional Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Business Name</p>
                        <p className="font-medium">EcoStyle Fashion</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Business Type</p>
                        <p className="font-medium">LLC</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Industry</p>
                        <p className="font-medium">Retail</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Founded</p>
                        <p className="font-medium">2020</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Business Address</p>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <p>123 Fashion Street, Mumbai, Maharashtra 400001</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Business Description</CardTitle>
              <CardDescription>Tell us about your business</CardDescription>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <Textarea
                  rows={5}
                  defaultValue="EcoStyle Fashion is a sustainable clothing brand that creates eco-friendly, ethically produced fashion for conscious consumers. We use organic materials and fair-trade practices to minimize environmental impact while maximizing style and comfort."
                />
              ) : (
                <p>
                  EcoStyle Fashion is a sustainable clothing brand that creates eco-friendly, ethically produced fashion
                  for conscious consumers. We use organic materials and fair-trade practices to minimize environmental
                  impact while maximizing style and comfort.
                </p>
              )}
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Financial Overview</CardTitle>
                <CardDescription>Key financial metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Annual Revenue</p>
                      <p className="text-2xl font-bold">₹24,50,000</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Monthly Expenses</p>
                      <p className="text-2xl font-bold">₹1,75,000</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Current Loans</p>
                      <p className="text-2xl font-bold">₹5,00,000</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Growth Rate</p>
                      <p className="text-2xl font-bold">+12%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Financial Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Metrics</CardTitle>
                <CardDescription>Performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Employees</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Customers</p>
                      <p className="text-2xl font-bold">1,250+</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Products</p>
                      <p className="text-2xl font-bold">45</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Locations</p>
                      <p className="text-2xl font-bold">2</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Business Analytics
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Business Details</CardTitle>
              <CardDescription>Comprehensive information about your business</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {isEditing ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input id="businessName" defaultValue="EcoStyle Fashion" />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type</Label>
                      <Select defaultValue="llc">
                        <SelectTrigger id="businessType">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="llc">LLC</SelectItem>
                          <SelectItem value="corporation">Corporation</SelectItem>
                          <SelectItem value="nonprofit">Nonprofit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select defaultValue="retail">
                        <SelectTrigger id="industry">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="food">Food & Beverage</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="services">Professional Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="founded">Year Founded</Label>
                      <Input id="founded" type="number" defaultValue="2020" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="employees">Number of Employees</Label>
                      <Input id="employees" type="number" defaultValue="8" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessAddress">Business Address</Label>
                    <Textarea id="businessAddress" defaultValue="123 Fashion Street, Mumbai, Maharashtra 400001" />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="businessPhone">Business Phone</Label>
                      <Input id="businessPhone" defaultValue="+91 98765 43210" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessEmail">Business Email</Label>
                      <Input id="businessEmail" type="email" defaultValue="info@ecostylefashion.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessWebsite">Business Website</Label>
                    <Input id="businessWebsite" type="url" defaultValue="https://www.ecostylefashion.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessDescription">Business Description</Label>
                    <Textarea
                      id="businessDescription"
                      rows={5}
                      defaultValue="EcoStyle Fashion is a sustainable clothing brand that creates eco-friendly, ethically produced fashion for conscious consumers. We use organic materials and fair-trade practices to minimize environmental impact while maximizing style and comfort."
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-medium">Basic Information</h3>
                      <div className="mt-3 space-y-3">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Business Name</p>
                          <p>EcoStyle Fashion</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Business Type</p>
                          <p>LLC</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Industry</p>
                          <p>Retail</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Year Founded</p>
                          <p>2020</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Contact Information</h3>
                      <div className="mt-3 space-y-3">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Business Address</p>
                          <p>123 Fashion Street, Mumbai, Maharashtra 400001</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Business Phone</p>
                          <p>+91 98765 43210</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Business Email</p>
                          <p>info@ecostylefashion.com</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Business Website</p>
                          <p>https://www.ecostylefashion.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium">Business Description</h3>
                    <p className="mt-3">
                      EcoStyle Fashion is a sustainable clothing brand that creates eco-friendly, ethically produced
                      fashion for conscious consumers. We use organic materials and fair-trade practices to minimize
                      environmental impact while maximizing style and comfort.
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium">Business Registration</h3>
                    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Registration Number</p>
                        <p>LLPIN-AAB-1234</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">GST Number</p>
                        <p>27AABCU9603R1ZX</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">PAN</p>
                        <p>AABCU9603R</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Registration Date</p>
                        <p>15 March, 2020</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
            {isEditing && (
              <CardFooter>
                <Button className="ml-auto">Save Changes</Button>
              </CardFooter>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>People who make your business successful</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Team Member 1 */}
                <div className="flex items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Sophia Williams"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Sophia Williams</h3>
                        <p className="text-sm text-muted-foreground">Founder & CEO</p>
                      </div>
                      {isEditing && (
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      )}
                    </div>
                    <p className="mt-2 text-sm">
                      Leads the company vision and strategy. 10+ years experience in sustainable fashion.
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span>Full-time</span>
                    </div>
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className="flex items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Rahul Sharma"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Rahul Sharma</h3>
                        <p className="text-sm text-muted-foreground">Operations Manager</p>
                      </div>
                      {isEditing && (
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      )}
                    </div>
                    <p className="mt-2 text-sm">
                      Oversees day-to-day operations and supply chain management. Expert in sustainable sourcing.
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span>Full-time</span>
                    </div>
                  </div>
                </div>

                {/* Team Member 3 */}
                <div className="flex items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Priya Patel"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Priya Patel</h3>
                        <p className="text-sm text-muted-foreground">Design Lead</p>
                      </div>
                      {isEditing && (
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      )}
                    </div>
                    <p className="mt-2 text-sm">
                      Creates innovative, sustainable designs. Background in fashion design with focus on eco-friendly
                      materials.
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span>Full-time</span>
                    </div>
                  </div>
                </div>

                {isEditing && <Button className="w-full">Add Team Member</Button>}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Organization Structure</CardTitle>
              <CardDescription>How your team is organized</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-4">
                <div className="flex justify-center">
                  <div className="text-center p-3 border rounded-lg bg-muted/30">
                    <p className="font-medium">Sophia Williams</p>
                    <p className="text-xs text-muted-foreground">Founder & CEO</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center p-3 border rounded-lg bg-muted/30">
                    <p className="font-medium">Rahul Sharma</p>
                    <p className="text-xs text-muted-foreground">Operations Manager</p>
                  </div>
                  <div className="text-center p-3 border rounded-lg bg-muted/30">
                    <p className="font-medium">Priya Patel</p>
                    <p className="text-xs text-muted-foreground">Design Lead</p>
                  </div>
                  <div className="text-center p-3 border rounded-lg bg-muted/30">
                    <p className="font-medium">Amit Kumar</p>
                    <p className="text-xs text-muted-foreground">Marketing Manager</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-4 gap-2">
                  <div className="text-center p-2 border rounded-lg bg-muted/30">
                    <p className="font-medium text-sm">Production</p>
                    <p className="text-xs text-muted-foreground">2 members</p>
                  </div>
                  <div className="text-center p-2 border rounded-lg bg-muted/30">
                    <p className="font-medium text-sm">Design</p>
                    <p className="text-xs text-muted-foreground">2 members</p>
                  </div>
                  <div className="text-center p-2 border rounded-lg bg-muted/30">
                    <p className="font-medium text-sm">Sales</p>
                    <p className="text-xs text-muted-foreground">1 member</p>
                  </div>
                  <div className="text-center p-2 border rounded-lg bg-muted/30">
                    <p className="font-medium text-sm">Support</p>
                    <p className="text-xs text-muted-foreground">1 member</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Business Documents</CardTitle>
              <CardDescription>Important documents related to your business</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Business Registration Certificate</h3>
                        <p className="text-sm text-muted-foreground">PDF • 2.4 MB • Uploaded on 15 Mar 2020</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      {isEditing && (
                        <Button variant="outline" size="sm">
                          Replace
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">GST Registration</h3>
                        <p className="text-sm text-muted-foreground">PDF • 1.8 MB • Uploaded on 20 Mar 2020</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      {isEditing && (
                        <Button variant="outline" size="sm">
                          Replace
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Business PAN Card</h3>
                        <p className="text-sm text-muted-foreground">PDF • 0.9 MB • Uploaded on 15 Mar 2020</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      {isEditing && (
                        <Button variant="outline" size="sm">
                          Replace
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Business Plan</h3>
                        <p className="text-sm text-muted-foreground">PDF • 3.2 MB • Uploaded on 10 Apr 2020</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      {isEditing && (
                        <Button variant="outline" size="sm">
                          Replace
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <Button className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Document
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

