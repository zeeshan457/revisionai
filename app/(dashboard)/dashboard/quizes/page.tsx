// dashboardPage.jsx
import React from "react";
import { redirect } from "next/navigation";

import PracticeQuizGenerator from "@/lib/practicequiz";
import { getCurrentUser } from "@/lib/session";

export const metadata = {
  title: "Quiz",
};

export default async function FlashcardsPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return <PracticeQuizGenerator />;
}

export function client() {
  return { revalidate: 1 };
}
