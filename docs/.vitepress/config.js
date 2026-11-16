import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Club Merch Quotes",
  description:
    "IS117-007 group business research: three competitor sites, two positions and two persona hypotheses.",
  // GitHub Pages serves this repo's site under /group-business/.
  base: "/group-business/",
  themeConfig: {
    outline: { level: 2, label: "On This Page" },
    socialLinks: [
      { icon: "github", link: "https://github.com/JivExperimenters/group-business" },
    ],
  },
});
