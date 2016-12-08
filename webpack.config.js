module.exports = {
  entry: "./src/components/index.js",
  output: {
    path: "./build",
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,  loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  eslint: {
    configFile: "./.eslintrc"
  }
}
