"use client"
import React, { useState } from "react"
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar"
import moment from "moment"
import { calendarEvents } from "@/lib/data"
import "react-big-calendar/lib/css/react-big-calendar.css"
import "./calender.css"

const localizer = momentLocalizer(moment)
const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WEEK)
  const handleOnChangeView = (selectedview: View) => {
    setView(selectedview)
  }
  return (
    <>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor='start'
        endAccessor='end'
        views={["week", "day", "month"]}
        view={view}
        style={{ height: "98%" }}
        onView={handleOnChangeView}
        min={new Date(2025, 1, 1, 8, 0, 0)}
        max={new Date(2025, 1, 1, 17, 0, 0)}
      />
    </>
  )
}

export default BigCalendar
