const fontRegex = /\.(woff|woff2|ttf|otf|eot)$/

const cfg = {
  client: {
    test: fontRegex,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: './assets/fonts',
        },
      },
    ],
  },
  server: {
    test: fontRegex,
    loader: 'null-loader',
  },
}

module.exports = cfg
