import {
    IconDashboard,
    IconFileWord,
    IconHelp,
    IconTransactionRupee,
    IconCalendar,
    IconMedicalCross,
    IconReport,
    IconSearch,
    IconSettings,
    IconUsers,
    IconFileAnalytics,
  } from "@tabler/icons-react"
  



const SIDEBAR_MENU = {
    user: {
        name: "Attend Assist Admin",
        email: "admin@attendassist.com",
        avatar: "https://avatar.iran.liara.run/public",
    },
    navMain: [    {
        title: "Dashboard",
        url: "#",
        icon: IconDashboard,
      },
      {
        title: "Attendants",
        url: "#",
        icon: IconUsers,
        },
        {
            title: "Patients",
            url: "#",
            icon: IconMedicalCross,
          },
      {
        title: "Calendar",
        url: "#",
        icon: IconCalendar,
      },
    ],
   navSecondary: [
        {
          title: "Settings",
          url: "#",
          icon: IconSettings,
        },
        {
          title: "Get Help",
          url: "#",
          icon: IconHelp,
        },
        {
          title: "Search",
          url: "#",
          icon: IconSearch,
        },
      ],
      documents: [
        {
          name: "Billings",
          url: "#",
          icon: IconTransactionRupee,
        },
        {
          name: "History",
          url: "#",
          icon: IconReport,
        },
        {
          name: "Documents",
          url: "#",
          icon: IconFileWord,
          },
        {
            name: 'Analytics',
            url: '#',
            icon: IconFileAnalytics,
        }
      ],
    
}

export const dashboardConfig = {
    SIDEBAR_MENU,
};