const fileRegex = /\.(png|jpe?g|gif|icon|xml|svg|json)$/

const cfg = {
  client: {
    test: fileRegex,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: './assets/images',
        },
      },
    ],
  },
  server: {
    test: fileRegex,
    loader: 'null-loader',
  },
}

module.exports = cfg
