


import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import AuthGuard from "@/components/auth-guard"
import { Booking } from "@/types/booking"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

 



export default async function Dashboard ()  {
  let bookings: Booking[] = [];

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/googlesheets`, { next: { revalidate: 300 } }); /// fetch bookings from the server with revalidation every 5 minutes
    bookings = await res.json();
  } catch (error) {
    console.error("Failed to fetch bookings", error);
  }
  return (
    <AuthGuard>
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
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={bookings} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
    </AuthGuard>
      )
}
