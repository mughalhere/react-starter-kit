const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: { path: __dirname + "/dist", publicPath: "/", filename: "bundle.js" },
  devServer: { contentBase: "./dist" },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] }
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve("./index.html") })]
};
