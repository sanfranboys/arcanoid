const path = require('path')

const tpl = {
  test: /\.tsx?$/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        configFile: path.resolve(__dirname, '../../tsconfig.json'),
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
