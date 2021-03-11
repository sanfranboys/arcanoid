const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const cssRegex = /\.css$/

const cfg = {
  client: {
    test: cssRegex,
    use: [MiniCssExtractPlugin.loader, 'css-loader'],
  },
  server: {
    test: cssRegex,
    loader: 'null-loader',
  },
}

module.exports = cfg
