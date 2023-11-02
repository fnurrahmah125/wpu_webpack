const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "img/[name]-[hash][ext]",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
    }),
  ],
});
