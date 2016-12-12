module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: __dirname + "/build",
		publicPath: '/',
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,  loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.js$/,  loader: "eslint-loader", exclude: /node_modules/ },
      { test: /\.(jpg|png)$/,loaders: 'url-loader'}
    ]
  },
	resolve: {
		extensions: ['','.jsx','.js','.css']
	},
  eslint: {
    configFile: "./.eslintrc"
  }
}
