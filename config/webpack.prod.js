/** @type {import('webpack').Configuration} */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const prodConfig = {
  mode: "production",
  output: {
    publicPath: "./",
  },
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        test: /.(css|scss|sass)$/,
      },
    ],
  },
};

module.exports = merge(common, prodConfig);
