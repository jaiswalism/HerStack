"use client"

import Link from "next/link"
import Image from "next/image"
import { MessageSquare, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/dashboard" prefetch={false}>
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
          </Link>
          <span className="text-xl font-bold">EmpowerFund</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/dashboard" prefetch={false} className="text-sm font-medium hover:underline underline-offset-4">
            Dashboard
          </Link>
          <Link
            href="/dashboard/loans"
            prefetch={false}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Loans
          </Link>
          <Link
            href="/dashboard/mentorship"
            prefetch={false}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Mentorship
          </Link>
          <Link
            href="/dashboard/learning"
            prefetch={false}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Learning
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Link href="/dashboard/settings" prefetch={false}>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/dashboard/profile" prefetch={false}>
            <div className="relative h-8 w-8 rounded-full bg-muted cursor-pointer">
              <Image src="/placeholder.svg?height=32&width=32" alt="User" fill className="rounded-full object-cover" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

