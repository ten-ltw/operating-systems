module.exports = {
  title: "XXX的博客",
  description: "XXX的博客",
  base: "/operating-systems/",
  dest: "./dist",
  port: "8080",
  head: [["link", { rel: "icon", href: "/logo.jpg" }]],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: [
      {
        text: "JavaScript",
        link: "/operating-systems/javascript/",
      },
      {
        text: "Operation System",
        link: "/operating-systems/os/",
      },
    ],
    lastUpdated: "Last Updated",
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: "更新",
      },
    },
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页 ！",
  },
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-SHZBTMBMCF',
      },
    ],
  ],
};
