const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "shubh",
    projectName: "layout",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {

    devServer: {
      port: 8080,
    },

    module : {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
