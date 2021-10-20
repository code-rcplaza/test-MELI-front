/** @type {import('webpack').Configuration} */
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    static: "../dist",
    compress: true,
    open: true,
    hot: true,
  },
  target: "web",
  plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean),
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /.(css|scss|sass)$/,
      },
    ],
  },
};

module.exports = merge(common, devConfig);
