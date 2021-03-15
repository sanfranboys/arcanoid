const fileRegex = /\.pem$/;

const cfg = {
  client: {
    test: fileRegex,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: './',
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
