"use client"

import type { ReactNode } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

interface DashboardLayoutProps {
  children: ReactNode
  activePath: string
  userRole?: "entrepreneur" | "investor" | "admin"
}

export function DashboardLayout({ children, activePath, userRole = "entrepreneur" }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <DashboardSidebar activePath={activePath} userRole={userRole} />
        <main className="flex w-full flex-col overflow-hidden py-6">{children}</main>
      </div>
    </div>
  )
}

