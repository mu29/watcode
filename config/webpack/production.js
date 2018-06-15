const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const rootPath = path.resolve(__dirname, '../../')
const assetsPath = path.resolve(rootPath, 'static')

module.exports = [{
  entry: {
    client: ['./src/client.js'],
  },
  output: {
    path: assetsPath,
    publicPath: '/',
    filename: '[name].js',
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
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    concatenateModules: true,
  },
}, {
  entry: {
    server: './src/server.js',
  },
  output: {
    path: path.resolve(rootPath, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  mode: 'production',
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
