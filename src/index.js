import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import App from './App'
import { counter} from './index.redux.js'

//create store
const store = createStore(counter, applyMiddleware(thunk))


ReactDom.render(
  (<Provider store = {store}>
    <App></App>
  </Provider>),
  document.getElementById('root')
)



