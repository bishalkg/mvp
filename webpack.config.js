const path = require("path");
const webpack = require("webpack");
const SRC_DIR = path.join(__dirname, './src');
const DIST_DIR = path.join(__dirname, './public');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  mode: "development",
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
    ],
  },
}