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
    filename: '[name]-[chunkhash].js',
  },
  mode: 'production',
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      template: path.join(rootPath, 'src/index.html'),
      filename: path.join(assetsPath, 'index.html'),
      inject: true,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    concatenateModules: true,
  },
}]
