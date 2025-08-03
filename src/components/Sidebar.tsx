import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from "@/components/ui/sidebar"
import { GlobeLock, LayoutDashboard, Router, Users } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next';


export function AppSidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation();


  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarTrigger className="ml-2" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => navigate("/dashboard")}
                isActive={location.pathname === "/dashboard"}
                tooltip={t('app.navigation.dashboard')}
              >
                <LayoutDashboard />
                <span>{t('app.navigation.dashboard')}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => navigate("/users")}
                isActive={location.pathname === "/users"}
                tooltip={t('app.navigation.users')}
              >
                <Users />
                <span>{t('app.navigation.users')}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

             <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => navigate("/routers")}
                isActive={location.pathname === "/routers"}
                tooltip={t('app.navigation.routers')}
              >
                <Router />
                <span>{t('app.navigation.routers')}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

             <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => navigate("/policies")}
                isActive={location.pathname === "/policies"}
                tooltip={t('app.navigation.policies')}
              >
                <GlobeLock />
                <span>{t('app.navigation.policies')}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}