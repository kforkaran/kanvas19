const path = require("path");

module.exports = {
  entry: "./script.js",
  output: {
    filename: "script.bundle.js",
    path: path.resolve(__dirname, "js")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  mode: "development"
};
