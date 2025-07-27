import { Outlet } from "react-router";

import { AppSidebar } from "~/components/app-sidebar";
import { SiteHeader } from "~/components/app-sidebar/site-header";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
import { dummyHistory } from "~/constants/dummy";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar history={dummyHistory} />
      <SidebarInset>
        <SiteHeader />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
