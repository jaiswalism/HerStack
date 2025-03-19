// Fix the DashboardSidebar component to properly handle client-side navigation
"use client"

import Link from "next/link"
import {
  BarChart3,
  BookOpen,
  Calendar,
  CreditCard,
  LayoutDashboard,
  PieChart,
  Settings,
  User,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"

interface SidebarProps {
  activePath: string
  userRole?: "entrepreneur" | "investor" | "admin"
}

export function DashboardSidebar({ activePath, userRole = "entrepreneur" }: SidebarProps) {
  const isActive = (path: string) => {
    return activePath === path
  }

  return (
    <aside className="fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block">
      <div className="h-full py-6 pr-6 lg:py-8">
        <nav className="grid items-start gap-2">
          <Link href="/dashboard" prefetch={false}>
            <Button variant={isActive("/dashboard") ? "secondary" : "ghost"} className="w-full justify-start gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
          </Link>

          {userRole === "entrepreneur" && (
            <>
              <Link href="/dashboard/loans" prefetch={false}>
                <Button
                  variant={isActive("/dashboard/loans") ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2"
                >
                  <CreditCard className="h-4 w-4" />
                  Loans
                </Button>
              </Link>
              <Link href="/dashboard/mentorship" prefetch={false}>
                <Button
                  variant={isActive("/dashboard/mentorship") ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2"
                >
                  <Users className="h-4 w-4" />
                  Mentorship
                </Button>
              </Link>
              <Link href="/dashboard/learning" prefetch={false}>
                <Button
                  variant={isActive("/dashboard/learning") ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Learning
                </Button>
              </Link>
            </>
          )}

          {userRole === "investor" && (
            <>
              <Link href="/dashboard/investor/portfolio">
                <Button
                  variant={isActive("/dashboard/investor/portfolio") ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2"
                >
                  <CreditCard className="h-4 w-4" />
                  Portfolio
                </Button>
              </Link>
              <Link href="/dashboard/investor/opportunities">
                <Button
                  variant={isActive("/dashboard/investor/opportunities") ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2"
                >
                  <BarChart3 className="h-4 w-4" />
                  Opportunities
                </Button>
              </Link>
              <Link href="/dashboard/mentorship">
                <Button
                  variant={isActive("/dashboard/mentorship") ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2"
                >
                  <Users className="h-4 w-4" />
                  Mentorship
                </Button>
              </Link>
            </>
          )}

          {userRole === "admin" && (
            <>
              <Link href="/dashboard/admin/users">
                <Button
                  variant={isActive("/dashboard/admin/users") ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2"
                >
                  <Users className="h-4 w-4" />
                  Users
                </Button>
              </Link>
              <Link href="/dashboard/admin/loans">
                <Button
                  variant={isActive("/dashboard/admin/loans") ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2"
                >
                  <CreditCard className="h-4 w-4" />
                  Loans
                </Button>
              </Link>
              <Link href="/dashboard/admin/reports">
                <Button
                  variant={isActive("/dashboard/admin/reports") ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2"
                >
                  <BarChart3 className="h-4 w-4" />
                  Reports
                </Button>
              </Link>
            </>
          )}

          <Link href="/dashboard/calendar" prefetch={false}>
            <Button
              variant={isActive("/dashboard/calendar") ? "secondary" : "ghost"}
              className="w-full justify-start gap-2"
            >
              <Calendar className="h-4 w-4" />
              Calendar
            </Button>
          </Link>

          <Link href="/dashboard/business" prefetch={false}>
            <Button
              variant={isActive("/dashboard/business") ? "secondary" : "ghost"}
              className="w-full justify-start gap-2"
            >
              <PieChart className="h-4 w-4" />
              Business Profile
            </Button>
          </Link>

          <Link href="/dashboard/profile" prefetch={false}>
            <Button
              variant={isActive("/dashboard/profile") ? "secondary" : "ghost"}
              className="w-full justify-start gap-2"
            >
              <User className="h-4 w-4" />
              Personal Profile
            </Button>
          </Link>

          <Link href="/dashboard/settings" prefetch={false}>
            <Button
              variant={isActive("/dashboard/settings") ? "secondary" : "ghost"}
              className="w-full justify-start gap-2"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </Link>
        </nav>
      </div>
    </aside>
  )
}

