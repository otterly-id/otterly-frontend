import { useParams } from "react-router";

import { dummyHistory } from "~/constants/dummy";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import { NavActions } from "./nav-actions";

export function SiteHeader() {
  const { chatId } = useParams();

  return (
    <header className="sticky top-0 flex h-14 w-full shrink-0 items-center gap-2 border-b bg-background">
      <SidebarTrigger className="ml-3" />
      {chatId && (
        <>
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">
                  {dummyHistory[Number(chatId)].title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </>
      )}
      <div className="ml-auto px-3">
        <NavActions />
      </div>
    </header>
  );
}
