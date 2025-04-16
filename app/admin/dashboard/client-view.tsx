'use client';

import { useSearchParams } from 'next/navigation';
import { Booking, Attendant } from '@/types/booking';
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import {DataTableAttendant} from "@/components/data-table-dummy"
 


const AdminView = ({ bookings, attendants }: { bookings: Booking[]; attendants: Attendant[]; }) => {
    const searchParams = useSearchParams();
  const view = searchParams.get('view');

    
    if (view === 'main') {
      return dashboardView( { bookings, attendants });
  } else if (view === 'patients') {
    return patientsView({bookings})
  } else if (view === 'attendants') {
    return attendantsView({attendants})
  } else if (view === 'calendar') {
    return calendarView({bookings, attendants});
  }

  return dashboardView( { bookings, attendants });
};



export default AdminView;


export  function dashboardView({ bookings, attendants }: { bookings: Booking[]; attendants: Attendant[]; }) {
    return (
        <div className="flex flex-1 flex-col">
        {/* <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div> */}
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards  data={bookings|| []}/>
          <DataTable data={bookings || []} attendantBooking={attendants || []} />
        </div>
      </div>
    </div>
      )
}

export function patientsView({bookings}: {bookings: Booking[]}) {
    return (
        <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <DataTable data={bookings || []} />
        </div>
      </div>
    </div>
    )
}

export function attendantsView({ attendants }: { attendants: Attendant[] }) {
    return (
        <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <DataTableAttendant data={ []} attendantBooking={ attendants} />
        </div>
      </div>
    </div>
    )
}

export function calendarView({bookings, attendants}: {bookings: Booking[], attendants: Attendant[]}) {
    return (
        <div>
        
            <h2>Calendar View</h2>
        </div>)
}