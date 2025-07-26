import { Outlet } from "react-router";

import { AppSidebar } from "~/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

const dummyHistory = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    url: "#",
  },
  {
    title: "In varius ante nibh, id fringilla massa dignissim sit amet",
    url: "#",
  },
  {
    title:
      "Mauris euismod, purus quis rutrum pellentesque, justro augue sodales",
    url: "#",
  },
  {
    title: "Quisque id bibendum velit",
    url: "#",
  },
];

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar history={dummyHistory} />
      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
