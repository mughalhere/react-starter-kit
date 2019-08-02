const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./build",
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: "url-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve("./index.html") })],
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  }
};
