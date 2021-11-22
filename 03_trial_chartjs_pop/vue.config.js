module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '/kanagawa_population_info',
  assetsDir: "",
  outputDir: "docs",
  // add for set title
  // refer : https://suzuki-navi.hatenablog.com/entry/2020/11/23/215712
  pages: {
    index: {
      entry: "src/main.js",
      title: "Kanagawa_Pop_charts",
    }
  },
}
