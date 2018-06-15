const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const rootPath = path.resolve(__dirname, '../../')
const assetsPath = path.resolve(rootPath, 'static')

module.exports = [{
  entry: {
    client: [
      './src/client.js',
      './src/styles/main.scss',
    ],
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
    contentBase: './static/',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
      { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ExtractTextPlugin('style.css'),
  ],
}, {
  entry: {
    server: './src/server.js',
  },
  output: {
    path: path.resolve(rootPath, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
      { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' },
    ],
  },
  target: 'node',
  externals: [nodeExternals()],
}]
