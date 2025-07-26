import { IconInnerShadowTop, IconLayoutSidebar } from "@tabler/icons-react";

import { navMain, navUser } from "~/constants/navigations";
import { cn } from "~/lib/utils";

import { Button } from "../ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

export function AppSidebar({
  history,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  history: { title: string; url: string }[];
}) {
  const { toggleSidebar, open } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem
            className={cn("flex gap-2", !open && "flex-col gap-1")}
          >
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="font-semibold text-base">Otterly Inc.</span>
              </a>
            </SidebarMenuButton>
            <Button
              size="icon"
              className={cn("size-8 cursor-pointer")}
              variant={open ? "outline" : "ghost"}
              onClick={toggleSidebar}
            >
              <IconLayoutSidebar
                className={cn(
                  "transition-all duration-300",
                  !open && "rotate-180"
                )}
              />
              <span className="sr-only">Trigger</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} historyItems={history} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
