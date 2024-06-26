import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "ReviseWise",
  description:
    "Revise smart using AI and smart tools.",
  url: site_url,
  ogImage: `${site_url}/og.jpg`,
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
    youtube: "https://youtube.com/", // Added 'youtube' property
  },
  mailSupport: "",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },

    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
    ],
  },
];
