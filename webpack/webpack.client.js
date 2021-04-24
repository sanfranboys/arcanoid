const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const alias = require('./alias')
const fileLoader = require('./loaders/file')
const fontLoader = require('./loaders/font')
const cssLoader = require('./loaders/css')
const scssLoader = require('./loaders/scss')
const jsLoader = require('./loaders/js')
const mp3Loader = require('./loaders/mp3')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const config = {
  mode: 'development',
  entry: [path.join(__dirname, '../src/client')],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '',
  },
  devtool: 'source-map',
  module: {
    rules: [
      fileLoader.client,
      fontLoader.client,
      cssLoader.client,
      scssLoader.client,
      jsLoader.client,
      mp3Loader.client,
    ],
  },
  resolve: {
    alias,
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
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
          from: 'music/*',
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

if (isDev) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.entry.push(
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'css-hot-loader/hotModuleReplacement'
  )
}

if (isProd) {
  config.optimization = {
    minimize: true,
    minimizer: [new UglifyJsPlugin(), new CssMinimizerPlugin()],
  }
}

module.exports = config
