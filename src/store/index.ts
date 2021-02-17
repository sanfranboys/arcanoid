import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducers, saga } from '@/ducks'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
  }
}

const sagaMiddleware = createSagaMiddleware()
const reduxDevTool =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeWithDevTools = !reduxDevTool
  ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(saga)

export default store
