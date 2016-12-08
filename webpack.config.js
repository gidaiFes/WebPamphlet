module.exports = {
  entry: "./src/components/index.js",
  output: {
    path: "./build",
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.js$/,  loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
}
