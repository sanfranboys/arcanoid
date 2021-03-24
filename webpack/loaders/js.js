const path = require('path')

const isDev = process.env.NODE_ENV !== 'production'

const tpl = {
  test: /\.tsx?$/,
  use: [
    isDev && {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        plugins: ['react-hot-loader/babel'],
      },
    },
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  ],
  exclude: [path.resolve(__dirname, 'node_modules'), /\.test.tsx?$/],
}

const cfg = {
  client: tpl,
  server: tpl,
}

module.exports = cfg
