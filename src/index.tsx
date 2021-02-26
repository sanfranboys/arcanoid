import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { App, ErrorBoundary } from 'components/'
import { Provider } from 'react-redux'
import { startServiceWorker } from './utils'
import store from './store'

import './styles/main.scss'
import { root } from './constants'

Sentry.init({
  dsn:
    'https://31b183368c0547f3928e5a8893d45e8b@o518053.ingest.sentry.io/5626520',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
})

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  root
)

startServiceWorker()
