//import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import main from './components/main'
//import configureStore from './store/configureStore'

//const store = configureStore()

render(
  <Provider store={store}>
    <main />
  </Provider>,
  document.getElementById('root')
)
