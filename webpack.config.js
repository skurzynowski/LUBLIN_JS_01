const path = require("path");
const entryFile = "index.js";

module.exports = env => ({
  entry: `./zadania/${env.ex}/index.js`,
  mode: 'development',
  output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
    },
  devServer: {
    contentBase: __dirname,
    publicPath: "/dist/",
    compress: true,
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
});
