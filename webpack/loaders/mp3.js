const fileRegex = /\.mp3$/

const cfg = {
  client: {
    test: fileRegex,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: './assets/music',
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
