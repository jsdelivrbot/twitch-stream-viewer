import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import '../styles/style.css'
import App from './components/app'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <h1 className="text-xs-center">Twitch Streamers</h1>
      <App />
    </div>
  </Provider>
  , document.querySelector('.container')
)