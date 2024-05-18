import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { CardSkeleton } from "@/components/shared/card-skeleton";

export default function FlashcardSettingsLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Flashcards" text="Generate your flashcards." />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  );
}
