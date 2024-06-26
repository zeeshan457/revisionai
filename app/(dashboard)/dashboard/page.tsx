// dashboardPage.jsx
import React from "react";
import { redirect } from "next/navigation";

import DashboardContent from "@/lib/revisionSchedule";
import { getCurrentUser } from "@/lib/session";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return <DashboardContent />;
}

export function client() {
  return { revalidate: 1 };
}
