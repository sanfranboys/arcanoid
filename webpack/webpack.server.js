const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const alias = require('./alias')
const fileLoader = require('./loaders/file')
const fontLoader = require('./loaders/font')
const cssLoader = require('./loaders/css')
const scssLoader = require('./loaders/scss')
const jsLoader = require('./loaders/js')
const mp3Loader = require('./loaders/mp3')

const config = {
  target: 'node',
  mode: 'development',
  entry: path.join(__dirname, '../src/server'),
  externals: [
    nodeExternals({
      allowlist: [
        /\.(?!(?:tsx?|json)$).{1,5}$/i,
        /antd\/lib\/[a-z]+\/style\/css/,
      ],
    }),
  ],
  output: {
    filename: 'server.bundle.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '',
  },
  devtool: 'source-map',
  module: {
    rules: [
      fileLoader.server,
      fontLoader.server,
      cssLoader.server,
      scssLoader.server,
      jsLoader.server,
      mp3Loader.server
    ],
  },
  resolve: {
    alias,
    extensions: [ '.ts', '.tsx', '.js' ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      window: path.join(__dirname, './window.mock'),
    }),
  ],
}

module.exports = config
