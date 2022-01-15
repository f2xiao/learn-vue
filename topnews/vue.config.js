const path = require("path");

const themePath = path.join(__dirname, "./src/theme.less");

module.exports = {
  publicPath: "./",
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // overide with less vars
          "nav-bar-background-color": "orange",
          // or override with less file
          hack: `true; @import '${themePath}';`,
        },
      },
    },
  },
};
