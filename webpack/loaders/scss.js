const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const scssRegex = /\.s[ac]ss$/i

const cfg = {
  client: {
    test: scssRegex,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  },
  server: {
    test: scssRegex,
    loader: 'null-loader',
  },
}

module.exports = cfg
