import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Star Research",
    pageTitleSuffix: " - Investment Intelligence",
    enableSPA: true,
    enablePopovers: true,
    analytics: { provider: "google", tagId: "G-C9NYHQ1HQQ" },
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
          light: "#FAFAF8",
          lightgray: "#E8E6E1",
          gray: "#8E8E93",
          darkgray: "#4A4540",
          dark: "#1C1C1E",
          secondary: "#C9A84C",
          tertiary: "#B8952F",
          highlight: "rgba(201, 168, 76, 0.08)",
          textHighlight: "rgba(201, 168, 76, 0.20)",
        },
        darkMode: {
          light: "#0F0F12",
          lightgray: "#2A2830",
          gray: "#6E6E73",
          darkgray: "#D0D0D4",
          dark: "#ECECEE",
          secondary: "#D4B862",
          tertiary: "#E8D090",
          highlight: "rgba(212, 184, 98, 0.10)",
          textHighlight: "rgba(212, 184, 98, 0.25)",
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
      // Plugin.Latex({ renderEngine: "katex" }),  // 비활성화: $금액 표기가 수식으로 파싱되는 문제 방지
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
