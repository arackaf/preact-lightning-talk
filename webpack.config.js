const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/appRoot.js"
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist"
  },
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat"
    },
    modules: [path.resolve("./node_modules")]
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  optimization: {
    minimize: false
  },
  plugins: [new HtmlWebpackPlugin()].filter(p => p)
};
