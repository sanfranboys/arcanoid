import {RequestHandler} from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

const webpackConfigs = require('../webpack/webpack.client.js');

 function getWebpackMiddlewares(config: webpack.Configuration): RequestHandler[] {
    const compiler = webpack({...config, mode: 'development'});

    return [
        devMiddleware(compiler,{serverSideRender: true}),
        hotMiddleware(compiler),
    ];
}

const a = getWebpackMiddlewares(webpackConfigs)
export default a
