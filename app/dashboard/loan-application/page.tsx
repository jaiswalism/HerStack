"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, FileText, Loader2, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function LoanApplicationPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalSteps = 6

  const [formData, setFormData] = useState({
    // Step 1: Business Information
    businessName: "",
    businessType: "",
    industry: "",
    yearsInOperation: "",
    numberOfEmployees: "",
    businessAddress: "",
    businessWebsite: "",

    // Step 2: Financial Information
    annualRevenue: "",
    monthlyProfit: "",
    existingDebt: "",
    creditScore: "",

    // Step 3: Business Plan
    businessDescription: "",
    marketAnalysis: "",
    competitiveAdvantage: "",
    growthStrategy: "",

    // Step 4: Funding Needs
    loanAmount: "",
    loanPurpose: "",
    repaymentPeriod: "",
    collateral: "",

    // Step 5: Impact Statement
    jobsCreated: "",
    communityImpact: "",
    sustainabilityEfforts: "",
    diversityInitiatives: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/dashboard/loan-application/success")
    }, 2000)
  }

  return (
    <DashboardLayout activePath="/dashboard/loans">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Loan Application</h1>
        <Link href="/dashboard">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <div className="mt-8 mx-auto max-w-3xl">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    currentStep > index + 1
                      ? "bg-primary text-primary-foreground"
                      : currentStep === index + 1
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {currentStep > index + 1 ? <ArrowRight className="h-5 w-5" /> : <span>{index + 1}</span>}
                </div>
                <span className="text-xs mt-1 text-muted-foreground">
                  {index === 0 && "Business Info"}
                  {index === 1 && "Financials"}
                  {index === 2 && "Business Plan"}
                  {index === 3 && "Funding Needs"}
                  {index === 4 && "Impact"}
                  {index === 5 && "Review"}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 h-2 w-full bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300 ease-in-out"
              style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && "Business Information"}
              {currentStep === 2 && "Financial Information"}
              {currentStep === 3 && "Business Plan & Projections"}
              {currentStep === 4 && "Funding Needs"}
              {currentStep === 5 && "Business Impact Statement"}
              {currentStep === 6 && "Review & Submit"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Tell us about your business"}
              {currentStep === 2 && "Share your financial details"}
              {currentStep === 3 && "Outline your business strategy"}
              {currentStep === 4 && "Specify your funding requirements"}
              {currentStep === 5 && "Describe your business's social impact"}
              {currentStep === 6 && "Review your application before submission"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              {/* Step 1: Business Information */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type</Label>
                      <Select
                        value={formData.businessType}
                        onValueChange={(value) => handleSelectChange("businessType", value)}
                      >
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessAddress">Business Address</Label>
                    <Textarea
                      id="businessAddress"
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Financial Information */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="annualRevenue">Annual Revenue (₹)</Label>
                      <Input
                        id="annualRevenue"
                        name="annualRevenue"
                        type="number"
                        value={formData.annualRevenue}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="monthlyProfit">Monthly Profit (₹)</Label>
                      <Input
                        id="monthlyProfit"
                        name="monthlyProfit"
                        type="number"
                        value={formData.monthlyProfit}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Financial Documents</Label>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="border rounded-md p-4 text-center">
                        <FileText className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm font-medium">Income Statement</p>
                        <p className="text-xs text-muted-foreground mb-2">PDF, Excel (Max 5MB)</p>
                        <Button variant="outline" size="sm" className="w-full">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload
                        </Button>
                      </div>
                      <div className="border rounded-md p-4 text-center">
                        <FileText className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm font-medium">Balance Sheet</p>
                        <p className="text-xs text-muted-foreground mb-2">PDF, Excel (Max 5MB)</p>
                        <Button variant="outline" size="sm" className="w-full">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Business Plan & Projections */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessDescription">Business Description</Label>
                    <Textarea
                      id="businessDescription"
                      name="businessDescription"
                      value={formData.businessDescription}
                      onChange={handleChange}
                      placeholder="Describe your business, products/services, and target customers"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="marketAnalysis">Market Analysis</Label>
                    <Textarea
                      id="marketAnalysis"
                      name="marketAnalysis"
                      value={formData.marketAnalysis}
                      onChange={handleChange}
                      placeholder="Describe your market size, trends, and customer demographics"
                      rows={4}
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Funding Needs */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="loanAmount">Loan Amount Requested (₹)</Label>
                      <Input
                        id="loanAmount"
                        name="loanAmount"
                        type="number"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="repaymentPeriod">Preferred Repayment Period</Label>
                      <Select
                        value={formData.repaymentPeriod}
                        onValueChange={(value) => handleSelectChange("repaymentPeriod", value)}
                      >
                        <SelectTrigger id="repaymentPeriod">
                          <SelectValue placeholder="Select period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6-months">6 months</SelectItem>
                          <SelectItem value="12-months">12 months</SelectItem>
                          <SelectItem value="24-months">24 months</SelectItem>
                          <SelectItem value="36-months">36 months</SelectItem>
                          <SelectItem value="48-months">48 months</SelectItem>
                          <SelectItem value="60-months">60 months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loanPurpose">Loan Purpose</Label>
                    <Select
                      value={formData.loanPurpose}
                      onValueChange={(value) => handleSelectChange("loanPurpose", value)}
                    >
                      <SelectTrigger id="loanPurpose">
                        <SelectValue placeholder="Select purpose" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="working-capital">Working Capital</SelectItem>
                        <SelectItem value="equipment">Equipment Purchase</SelectItem>
                        <SelectItem value="expansion">Business Expansion</SelectItem>
                        <SelectItem value="inventory">Inventory</SelectItem>
                        <SelectItem value="marketing">Marketing & Advertising</SelectItem>
                        <SelectItem value="refinancing">Debt Refinancing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 5: Business Impact Statement */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="jobsCreated">Potential Jobs Created</Label>
                    <Input
                      id="jobsCreated"
                      name="jobsCreated"
                      type="number"
                      value={formData.jobsCreated}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="communityImpact">Community Impact</Label>
                    <Textarea
                      id="communityImpact"
                      name="communityImpact"
                      value={formData.communityImpact}
                      onChange={handleChange}
                      placeholder="How will your business positively impact your community?"
                      rows={4}
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 6: Review & Submit */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium mb-2">Business Information</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Business Name:</p>
                        <p className="font-medium">{formData.businessName || "Not provided"}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Business Type:</p>
                        <p className="font-medium">{formData.businessType || "Not provided"}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium mb-2">Funding Request</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Loan Amount:</p>
                        <p className="font-medium">₹{formData.loanAmount || "0"}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Loan Purpose:</p>
                        <p className="font-medium">{formData.loanPurpose || "Not provided"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 1}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button type="button" onClick={nextStep}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="button" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  )
}

