const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

module.exports = {
  entry: './src/client.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '',
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
      components: path.join(__dirname, './src/components'),
      ducks: path.join(__dirname, './src/ducks'),
      elements: path.join(__dirname, './src/elements'),
      hocs: path.join(__dirname, './src/hocs'),
      pages: path.join(__dirname, './src/pages'),
      services: path.join(__dirname, './src/services'),
      utils: path.join(__dirname, './src/utils'),
      routes: path.join(__dirname, './src/routes'),
    },
    extensions: [ '.ts', '.tsx', '.js' ],
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 4000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: [ path.resolve(__dirname, 'node_modules'), /\.test.tsx?$/ ],
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.(png|jpe?g|gif|icon|xml|svg|json)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './assets/images',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './assets/fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
    new HtmlWebpackPlugin({
      template: './www/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'images/*',
          context: path.resolve(__dirname, 'src', 'assets'),
          to: './assets',
        },
        {
          from: 'fonts/*',
          context: path.resolve(__dirname, 'src', 'assets'),
          to: './assets',
        },
        {
          from: 'sw.js',
          context: path.resolve(__dirname, 'src'),
          to: './',
        },
      ],
    }),
  ],
}
