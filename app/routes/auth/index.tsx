import { useState } from "react";

import LoginSection from "./components/login-section";
import RegisterSection from "./components/register-section";
import AuthTabCardLayout from "./layout/auth-tab-card-layout";

export default function Index() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-secondary to-primary">
      <AuthTabCardLayout
        activeTab={activeTab}
        onTabChange={setActiveTab}
        loginComponent={<LoginSection />}
        registerComponent={<RegisterSection />}
      />
    </div>
  );
}
