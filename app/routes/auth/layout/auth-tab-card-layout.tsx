import type { ReactNode } from "react";

import Image from "~/components/helper/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";

interface AuthTabCardLayoutProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  loginComponent: ReactNode;
  registerComponent: ReactNode;
}

export default function AuthTabCardLayout({
  activeTab,
  onTabChange,
  loginComponent,
  registerComponent,
}: AuthTabCardLayoutProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        "mx-4 w-full max-w-xs rounded-lg p-4 shadow-md sm:mx-0 sm:p-6 md:max-w-md",
        "bg-white text-black dark:bg-black dark:text-white"
      )}
    >
      <Image
        src="/images/otter_logo_dark_bg.png"
        alt="Otter Full Logo"
        className="h-16 sm:h-20 md:h-24"
      />

      <p className="text-center font-bold text-2xl sm:text-3xl">
        Hi, Welcome to{" "}
        <span
          className={cn(
            "text-center font-bold text-2xl text-transparent sm:text-3xl",
            "bg-gradient-to-r from-black to-40% to-primary bg-clip-text dark:from-white"
          )}
        >
          Otterly!
        </span>
      </p>

      <p className="mb-2 text-center font-medium text-sm sm:text-base">
        Access your account or create a new one
      </p>

      <Tabs value={activeTab} onValueChange={onTabChange}>
        <TabsList className="my-4 flex w-full justify-center">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          {activeTab === "login" && loginComponent}
        </TabsContent>
        <TabsContent value="register">
          {activeTab === "register" && registerComponent}
        </TabsContent>
      </Tabs>
    </div>
  );
}
