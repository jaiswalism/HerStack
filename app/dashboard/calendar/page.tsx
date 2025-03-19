"use client"

import { useState } from "react"
import { CalendarIcon, ChevronLeft, ChevronRight, Clock, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"

// Mock calendar data
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

// Mock events data
const EVENTS = [
  {
    id: 1,
    title: "Mentorship Session",
    date: new Date(2023, 2, 15, 14, 0),
    duration: 60,
    type: "mentorship",
    with: "Jennifer Lee",
  },
  {
    id: 2,
    title: "Loan Review Meeting",
    date: new Date(2023, 2, 17, 11, 0),
    duration: 45,
    type: "finance",
    with: "Michael Chen",
  },
]

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Get current month and year
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  // Get days in month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  // Get first day of month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  // Create calendar days array
  const calendarDays = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null)
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i)
  }

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }

  // Navigate to next month
  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }

  // Check if a date has events
  const hasEvents = (day) => {
    if (!day) return false

    const date = new Date(currentYear, currentMonth, day)
    return EVENTS.some(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    )
  }

  // Get events for selected date
  const getEventsForSelectedDate = () => {
    return EVENTS.filter(
      (event) =>
        event.date.getDate() === selectedDate.getDate() &&
        event.date.getMonth() === selectedDate.getMonth() &&
        event.date.getFullYear() === selectedDate.getFullYear(),
    ).sort((a, b) => a.date.getTime() - b.date.getTime())
  }

  // Format time (e.g., "14:00")
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0")
    const minutes = date.getMinutes().toString().padStart(2, "0")
    return `${hours}:${minutes}`
  }

  return (
    <DashboardLayout activePath="/dashboard/calendar">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>
                {MONTHS[currentMonth]} {currentYear}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={prevMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* Day headers */}
              {DAYS.map((day, index) => (
                <div key={index} className="text-center font-medium text-sm py-2">
                  {day}
                </div>
              ))}

              {/* Calendar days */}
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`
                    h-16 p-1 border rounded-md relative
                    ${!day ? "bg-muted/30" : "cursor-pointer hover:bg-muted/50"}
                    ${day && day === selectedDate.getDate() && currentMonth === selectedDate.getMonth() && currentYear === selectedDate.getFullYear() ? "bg-primary/10 border-primary" : ""}
                  `}
                  onClick={() => day && setSelectedDate(new Date(currentYear, currentMonth, day))}
                >
                  {day && (
                    <>
                      <span className="text-sm">{day}</span>
                      {hasEvents(day) && (
                        <div className="absolute bottom-1 right-1 h-2 w-2 rounded-full bg-primary"></div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              {selectedDate.getDate()} {MONTHS[selectedDate.getMonth()]} {selectedDate.getFullYear()}
            </CardTitle>
            <CardDescription>{getEventsForSelectedDate().length} events scheduled</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {getEventsForSelectedDate().length > 0 ? (
                getEventsForSelectedDate().map((event) => (
                  <div key={event.id} className="rounded-lg border p-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{event.title}</h3>
                      <div
                        className={`
                        rounded-full px-2 py-1 text-xs font-medium
                        ${event.type === "mentorship" ? "bg-blue-100 text-blue-800" : ""}
                        ${event.type === "finance" ? "bg-green-100 text-green-800" : ""}
                      `}
                      >
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>
                        {formatTime(event.date)} • {event.duration} min
                      </span>
                    </div>
                    <div className="mt-1 text-sm">with {event.with}</div>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 text-muted-foreground">
                  <CalendarIcon className="h-12 w-12 mx-auto mb-2 text-muted" />
                  <p>No events scheduled for this day</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Event
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Events
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  )
}

