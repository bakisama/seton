import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.Graph(), Component.Backlinks()],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/bakisama/seton",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(Component.Search()),
    Component.Darkmode(),
    Component.Explorer({
      sortFn: (a, b) => {
        const emojis =
          /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g
        const a_name = a.data?.title.replace(emojis, "").trim()
        const a_dname = a.displayName.replace(emojis, "").trim()
        const b_name = b.data?.title.replace(emojis, "").trim()
        const b_dname = b.displayName.replace(emojis, "").trim()
        // Sort order: folders first, then files. Sort folders and files alphabetically
        if (/^.*Home$/.test(a_dname)) {
          return -1
        }
        if (/^.*Home$/.test(b_dname)) {
          return 1
        }
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          return a_dname.localeCompare(b_dname, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        if (!a.isFolder && b.isFolder) {
          return 1
        } else {
          return -1
        }
      },
    }),
  ],
  right: [
    Component.MobileOnly(Component.Search()),
    Component.MobileOnly(Component.Spacer()),
    Component.TableOfContents(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
