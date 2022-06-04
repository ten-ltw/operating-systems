module.exports = {
  plugins: [
    "@vuepress/active-header-links",
    [
      "vuepress-plugin-auto-sidebar",
      {
        sidebarLinkSelector: ".sidebar-link",
        headerAnchorSelector: ".header-anchor",
      },
    ],
    "@vuepress/back-to-top",
  ],
};
