import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { App, ErrorBoundary } from '@/components/'
import { fullScreenMode } from '@/utils/'
import Context from './context'
import './styles/main.scss'

Sentry.init({
  dsn:
    'https://31b183368c0547f3928e5a8893d45e8b@o518053.ingest.sentry.io/5626520',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
})

const root: HTMLElement | null = document.getElementById('root')

ReactDOM.render(
  <ErrorBoundary>
    <Context.Provider value={fullScreenMode(root)}>
      <App />
    </Context.Provider>
  </ErrorBoundary>,
  root
)
