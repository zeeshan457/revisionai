import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { CardSkeleton } from "@/components/shared/card-skeleton";

export default function QuizcardSettingsLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Quiz" text="Take a quiz." />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  );
}
