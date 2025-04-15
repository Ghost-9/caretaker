import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Attendant, Booking } from "@/types/booking"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import AdminView from "./client-view";
import { Suspense } from "react";

export default async function Dashboard ()  {
  let bookings: Booking[] = [];
  let att: Attendant[] = [];

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/googlesheets`, { next: { revalidate: 300 } }); 
    const json: { bookings: Booking[], attendant: Attendant[] } = await res.json();
    if (Array.isArray(json.bookings)) {
      bookings = json.bookings;
    
    } else {
      console.warn("Non-array response")
    }
  } catch (error) {
    console.error("Failed to fetch bookings", error);
  }
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <Suspense fallback={<div>Loading view...</div>}>
            <AdminView bookings={bookings} attendants={att} />
          </Suspense>
      </SidebarInset>
    </SidebarProvider>
  )
}
