import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Star Research",
    pageTitleSuffix: " | Star Research",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "ko-KR",
    baseUrl: "dlonestar.com",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "00 Dashboard",
      "01 System",
      "02 Event Log",
      "80 Templates",
      "90 Data",
    ],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#FDFCFA",
          lightgray: "#F0EDE8",
          gray: "#B8B2A8",
          darkgray: "#4A4540",
          dark: "#1B1815",
          secondary: "#C9A84C",
          tertiary: "#A8893A",
          highlight: "rgba(201, 168, 76, 0.12)",
          textHighlight: "rgba(201, 168, 76, 0.25)",
        },
        darkMode: {
          light: "#141216",
          lightgray: "#2A2630",
          gray: "#5A5565",
          darkgray: "#D4D0DC",
          dark: "#F0EDE8",
          secondary: "#C9A84C",
          tertiary: "#E8D5A0",
          highlight: "rgba(201, 168, 76, 0.15)",
          textHighlight: "rgba(201, 168, 76, 0.30)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
