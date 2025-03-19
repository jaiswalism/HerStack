import Link from "next/link"
import { CalendarDays, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function LoanApplicationSuccessPage() {
  return (
    <DashboardLayout activePath="/dashboard/loans">
      <div className="mx-auto max-w-3xl text-center">
        <div className="rounded-full bg-green-100 p-3 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Application Submitted Successfully!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for applying for funding with EmpowerFund. Your application has been received and is now under
          review.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What Happens Next?</CardTitle>
            <CardDescription>Here's what you can expect in the coming days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                  <span className="text-sm font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-medium">Initial Review (1-2 Business Days)</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team will review your application to ensure all required information is provided.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                  <span className="text-sm font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-medium">Detailed Assessment (3-5 Business Days)</h3>
                  <p className="text-sm text-muted-foreground">
                    Our financial analysts will evaluate your business plan, financials, and funding needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                  <span className="text-sm font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-medium">Interview (If Required)</h3>
                  <p className="text-sm text-muted-foreground">
                    We may schedule a call to discuss your application in more detail and address any questions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                  <span className="text-sm font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="font-medium">Decision (Within 10 Business Days)</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll receive a decision on your application along with next steps if approved.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Application ID</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-mono text-lg">LOAN-2023-58742</p>
              <p className="text-xs text-muted-foreground mt-1">Please reference this ID in all communications</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Submitted On</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{new Date().toLocaleDateString()}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Expected decision by {new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <Button>Return to Dashboard</Button>
          </Link>
          <Link href="/dashboard/mentorship">
            <Button variant="outline">
              <CalendarDays className="mr-2 h-4 w-4" />
              Schedule Mentorship Session
            </Button>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  )
}

