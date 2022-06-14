module.exports = {
  plugins: [
    // [
    //   "vuepress-plugin-auto-sidebar",
    //   {
    //     sidebarLinkSelector: ".sidebar-link",
    //     headerAnchorSelector: ".header-anchor",
    //   },
    // ],
    "@vuepress/back-to-top",
    [
      "@vuepress/google-analytics",
      {
        ga: "G-SHZBTMBMCF", // G-SHZBTMBMCF
      },
    ],
  ],
};
