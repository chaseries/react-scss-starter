const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ["./src/main.js", "./src/scss/main.scss"],
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "main.js"
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: [ /node_modules/ ],
        loaders: [
          "babel-loader",
          "eslint-loader"
        ]
      },
      { test: /\.jsx$/,
        exclude: [ /node_modules/ ],
        loaders: [
          "babel-loader"
        ]
      },
      { test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract([
          "css-loader?minimize=true", "sass-loader"
        ])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("main.css")
  ]
}
