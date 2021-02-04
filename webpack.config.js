const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
new CleanWebpackPlugin({
  dangerouslyAllowCleanPatternsOutsideProject: true,
}),
  (module.exports = {
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: path.resolve(__dirname, 'tsconfig.json'),
              },
            },
          ],
          exclude: [path.resolve(__dirname, 'node_modules')],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
        ],
      }),
    ],
  })
