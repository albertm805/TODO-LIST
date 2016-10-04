import React from 'react'
import { render } from 'render-dom'
import { provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

render(
  <Provier store=(store)>
    <App />
  </Provider>,
  document.getElementById('root')
)
