const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const alias = require('./alias')
const fileLoader = require('./loaders/file')
const fontLoader = require('./loaders/font')
const cssLoader = require('./loaders/css')
const scssLoader = require('./loaders/scss')
const jsLoader = require('./loaders/js')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const config = {
  mode: 'development',
  entry: path.join(__dirname, '../src/client.tsx'),

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '',
  },

  devtool: isDev ? 'source-map' : false,

  module: {
    rules: [
      fileLoader.client,
      fontLoader.client,
      cssLoader.client,
      scssLoader.client,
      jsLoader.client,
    ],
  },
  resolve: {
    alias,
    extensions: ['.ts', '.tsx', '.js'],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'images/*',
          context: path.resolve(__dirname, '../src', 'assets'),
          to: './assets',
        },
        {
          from: 'fonts/*',
          context: path.resolve(__dirname, '../src', 'assets'),
          to: './assets',
        },
        {
          from: 'sw.js',
          context: path.resolve(__dirname, '../src'),
          to: './',
        },
      ],
    }),
  ],
}

module.exports = config
