import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'

const clientConfig = require('../../webpack/webpack.client.js')

export default function getHotMiddlewares() {
  const compiler = webpack({ ...clientConfig, mode: 'development' })

  return [
    devMiddleware(compiler, {
      serverSideRender: true,
      writeToDisk: true,
      publicPath: clientConfig.output!.publicPath!,
    }),
    hotMiddleware(compiler),
  ]
}
