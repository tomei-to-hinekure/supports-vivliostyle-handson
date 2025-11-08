// @ts-check
/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
const vivliostyleConfig = {
  entry: [
    {
      rel: "cover",
      path: "cover/template.html",
    },
    {
      rel: "contents",
      path: "toc/template.html",
      theme: "toc/style.css",
    },
    "manuscripts/ch1.md",
    "manuscripts/ch2.md",
    {
      path: "colophon/index.html",
      theme: "colophon/style.css",
    },
  ],
  theme: "./theme.css",
  cover: "cover/cover.png",
  toc: {
    title: "目次",
    sectionDepth: 2,
  },
};

module.exports = vivliostyleConfig;
