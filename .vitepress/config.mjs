import { defineConfig } from "vitepress";

export default defineConfig({
  title: "ClubThread Quotes — Group Business Research",
  description:
    "IS117-007 Group Business Research: Campus Club Merch Quote & Estimate Assistant comparing Custom Ink, Bonfire, and Printful.",
  base: "/group-business/",
  rewrites: { "README.md": "index.md" },
  themeConfig: {
    outline: { level: 2, label: "On This Page" },
    nav: [
      { text: "Overview", link: "/" },
      { text: "Competitors", link: "/competitors" },
      { text: "Brand & Positions", link: "/brand-studio" },
      { text: "Peer Review & Team", link: "/peer-feedback" },
    ],
    sidebar: [
      {
        text: "Research",
        items: [
          { text: "Overview & Question", link: "/" },
          { text: "3-Site Comparison", link: "/competitors" },
          { text: "Positions, Personas & Brand Studio", link: "/brand-studio" },
          { text: "Team Roles & Peer Feedback", link: "/peer-feedback" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/JivExperimenters/group-business" },
    ],
  },
});
