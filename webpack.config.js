module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: "./build",
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,  loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.js$/,  loader: "eslint-loader", exclude: /node_modules/ }
    ]
  },
	resolve: {
		extensions: ['','.js','.jsx','.css']
	},
  eslint: {
    configFile: "./.eslintrc"
  }
}
