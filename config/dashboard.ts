import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    // {
    //   title: "Documentation",
    //   href: "/docs",
    //   disabled: true,
    // },
    // {
    //   title: "Support",
    //   href: "/support",
    //   disabled: true,
    // },
  ],
  sidebarNav: [
    {
      title: "Revision Scheduler",
      href: "/dashboard",
      icon: "search",
    },
    {
      title: "Flashcards Generator",
      href: "/dashboard/flashcards",
      icon: "media",
    },
    {
      title: "Practice Quizes",
      href: "/dashboard/quiz",
      icon: "post",
    },
  ],
}
