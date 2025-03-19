"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegisterPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultRole = searchParams.get("role") || ""

  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    role: defaultRole,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    agreePrivacy: false,
    agreeUpdates: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleRoleChange = (value: string) => {
    setFormData({
      ...formData,
      role: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="container flex items-center justify-center min-h-screen py-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Join our platform to access funding, mentorship, and resources</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>I am registering as a</Label>
                  <RadioGroup value={formData.role} onValueChange={handleRoleChange} className="grid grid-cols-2 gap-4">
                    <div
                      className={`flex flex-col items-center justify-between rounded-md border-2 p-4 ${
                        formData.role === "entrepreneur" ? "border-primary" : "border-muted"
                      }`}
                    >
                      <RadioGroupItem value="entrepreneur" id="entrepreneur" className="sr-only" />
                      <Label htmlFor="entrepreneur" className="flex flex-col items-center gap-2 cursor-pointer">
                        <div
                          className={`rounded-full p-1 ${
                            formData.role === "entrepreneur"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {formData.role === "entrepreneur" ? <Check className="h-4 w-4" /> : null}
                        </div>
                        <span className="text-center font-medium">Entrepreneur</span>
                        <span className="text-center text-xs text-muted-foreground">
                          I'm seeking funding and resources
                        </span>
                      </Label>
                    </div>
                    <div
                      className={`flex flex-col items-center justify-between rounded-md border-2 p-4 ${
                        formData.role === "investor" ? "border-primary" : "border-muted"
                      }`}
                    >
                      <RadioGroupItem value="investor" id="investor" className="sr-only" />
                      <Label htmlFor="investor" className="flex flex-col items-center gap-2 cursor-pointer">
                        <div
                          className={`rounded-full p-1 ${
                            formData.role === "investor"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {formData.role === "investor" ? <Check className="h-4 w-4" /> : null}
                        </div>
                        <span className="text-center font-medium">Investor/Mentor</span>
                        <span className="text-center text-xs text-muted-foreground">I want to invest or mentor</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                        required
                      />
                      <label
                        htmlFor="agreeTerms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary underline hover:text-primary/90">
                          terms of service
                        </Link>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreePrivacy"
                        name="agreePrivacy"
                        checked={formData.agreePrivacy}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreePrivacy: checked as boolean })}
                        required
                      />
                      <label
                        htmlFor="agreePrivacy"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link href="/privacy" className="text-primary underline hover:text-primary/90">
                          privacy policy
                        </Link>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeUpdates"
                        name="agreeUpdates"
                        checked={formData.agreeUpdates}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreeUpdates: checked as boolean })}
                      />
                      <label
                        htmlFor="agreeUpdates"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I would like to receive updates about products and services via email
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button type="button" variant="outline" onClick={prevStep}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          ) : (
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Home
              </Button>
            </Link>
          )}

          {step < 3 ? (
            <Button type="button" onClick={nextStep} disabled={step === 1 && !formData.role}>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isLoading || !formData.agreeTerms || !formData.agreePrivacy}
              onClick={handleSubmit}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create account"
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

