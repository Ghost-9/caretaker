"use client"

import * as React from "react"
import { constants } from "@/app/config/constants"
import { IconInnerShadowTop } from "@tabler/icons-react"


import {dashboardConfig} from '@/app/config/dashboard_config'
import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">{constants.SITE_NAME}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={dashboardConfig.SIDEBAR_MENU.navMain} />
        <NavDocuments items={dashboardConfig.SIDEBAR_MENU.documents} />
        <NavSecondary items={dashboardConfig.SIDEBAR_MENU.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={dashboardConfig.SIDEBAR_MENU.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
