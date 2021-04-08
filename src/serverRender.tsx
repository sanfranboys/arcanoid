import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { App } from 'components'
import { Request } from 'express'
import { StaticRouterContext } from 'react-router'

const serverRender = (
  req: Request,
  store: any,
  context: StaticRouterContext
) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  )

  const helmet = Helmet.renderStatic()

  return `<!DOCTYPE html>
            <html lang="en">
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}

                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <base href="/" />
                <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon">
                <link rel="stylesheet" href="/main.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__INITIAL_STATE__ = ${JSON.stringify(
                      store.getState()
                    )}
                </script>
                <script src="/bundle.js"></script>
            </body>
    </html>`
}

export default serverRender
