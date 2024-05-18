// dashboardPage.jsx
import React from "react";
import { redirect } from "next/navigation";

import FlashcardGenerator from "@/lib/flashcard";
import { getCurrentUser } from "@/lib/session";

export const metadata = {
  title: "Flashcards",
};

export default async function FlashcardsPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return <FlashcardGenerator />;
}

export function client() {
  return { revalidate: 1 };
}
