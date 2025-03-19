"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "",
      })
    }, 1500)
  }

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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-pink-gradient text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Get in Touch</h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                Have questions or want to learn more about our platform? We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
                    <h3 className="text-xl font-medium text-green-800">Thank you for your message!</h3>
                    <p className="mt-2 text-green-700">
                      We've received your inquiry and will respond within 24-48 hours.
                    </p>
                    <Button className="mt-4" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select value={formState.inquiryType} onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="funding">Funding Information</SelectItem>
                          <SelectItem value="mentorship">Mentorship Program</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" value={formState.subject} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                  <p className="text-muted-foreground">Reach out to us directly or visit our office.</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Our Office</h3>
                      <address className="not-italic text-muted-foreground">
                        123 Innovation Way
                        <br />
                        San Francisco, CA 94107
                        <br />
                        United States
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-muted-foreground">
                        General Inquiries:{" "}
                        <a href="mailto:info@empowerfund.com" className="text-primary hover:underline">
                          info@empowerfund.com
                        </a>
                        <br />
                        Support:{" "}
                        <a href="mailto:support@empowerfund.com" className="text-primary hover:underline">
                          support@empowerfund.com
                        </a>
                        <br />
                        Partnerships:{" "}
                        <a href="mailto:partners@empowerfund.com" className="text-primary hover:underline">
                          partners@empowerfund.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-muted-foreground">
                        Main Office:{" "}
                        <a href="tel:+14155550123" className="text-primary hover:underline">
                          +1 (415) 555-0123
                        </a>
                        <br />
                        Support Hotline:{" "}
                        <a href="tel:+14155550124" className="text-primary hover:underline">
                          +1 (415) 555-0124
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden border h-64 mt-8">
                  <div className="h-full w-full bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">Interactive Map Would Be Embedded Here</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM PST
                    <br />
                    Saturday: 10:00 AM - 2:00 PM PST
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Find quick answers to common questions
              </p>
            </div>

            <div className="mx-auto max-w-3xl mt-12 space-y-4">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-medium">How quickly will I receive a response to my inquiry?</h3>
                <p className="mt-2 text-muted-foreground">
                  We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please call our
                  support hotline.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-medium">Can I schedule a meeting with someone from your team?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, you can request a meeting through our contact form. Please specify your availability and the
                  purpose of the meeting in your message.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-medium">Do you offer virtual consultations?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, we offer virtual consultations via video conferencing for entrepreneurs and investors who cannot
                  visit our office in person.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-medium">How can I join your team or volunteer?</h3>
                <p className="mt-2 text-muted-foreground">
                  We're always looking for talented individuals who are passionate about our mission. Please send your
                  resume and a cover letter to careers@empowerfund.com.
                </p>
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

