import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { ConnectedRouter } from 'connected-react-router'
import { App, ErrorBoundary } from 'components'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { State } from './ducks/types'

import './styles/main.scss'
import { isProd, root } from './constants'
import { startServiceWorker, browserNotification } from './utils'

Sentry.init({
  dsn:
    'https://31b183368c0547f3928e5a8893d45e8b@o518053.ingest.sentry.io/5626520',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
})

const { store, history } = configureStore(window.__INITIAL_STATE__)

declare global {
  interface Window {
    __INITIAL_STATE__: State
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
  }
}

browserNotification('Добро пожаловать в игру', {
  body: 'Если ты не был в Slack зайди и отметься!',
})

ReactDOM.hydrate(
  <ErrorBoundary>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
    ,
  </ErrorBoundary>,
  root
)

if (isProd) startServiceWorker()
