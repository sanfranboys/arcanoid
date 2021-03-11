import { createStore, applyMiddleware, compose, Store } from 'redux'
import { SagaMiddleware } from '@redux-saga/core'
import createSagaMiddleware, { END } from 'redux-saga'
import {
  saga as rootSaga,
  createRootReducer,
  userInitialState,
  authInitialState,
} from 'ducks'
import { createBrowserHistory, createMemoryHistory } from 'history'
import { routerMiddleware, RouterState } from 'connected-react-router'
import { isProd } from '@/constants'
import { State } from '../ducks/types'

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

function getComposeEnhancers() {
  if (!isProd && !isServer) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  }

  return compose
}

export type AppStore = Store & {
  runSaga: SagaMiddleware['run']
  close: () => void
}

export const getInitialState = (pathname: string = '/'): State => ({
  auth: authInitialState,
  user: userInitialState,
  router: {
    location: { pathname, search: '', hash: '', key: '' },
    action: 'POP',
  } as RouterState,
})

export function configureStore(initialState: State, url = '/') {
  const history = isServer
    ? createMemoryHistory({ initialEntries: [url] })
    : createBrowserHistory()

  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers = getComposeEnhancers()
  const middlewares = [routerMiddleware(history), sagaMiddleware]

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  ) as AppStore

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)

  if (!isServer) {
    sagaMiddleware.run(rootSaga)
  }

  return { store, history }
}
