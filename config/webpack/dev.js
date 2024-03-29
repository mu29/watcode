const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootPath = path.resolve(__dirname, '../../')
const assetsPath = path.resolve(rootPath, 'dist')

module.exports = [{
  entry: {
    client: ['./src/client.js'],
  },
  output: {
    path: assetsPath,
    publicPath: '/',
    filename: '[name].js',
  },
  mode: 'development',
  devServer: {
    hot: true,
    port: 3001,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    contentBase: assetsPath,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules|.*\.(spec|stories)\.js/, use: 'babel-loader' },
      { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' },
    ],
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      template: path.join(rootPath, 'src/index.html'),
      filename: path.join(assetsPath, 'index.html'),
      inject: true,
    }),
  ],
}]
