import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Link, Route} from 'react-router-dom'

import App from './App'
import { counter} from './index.redux.js'

//create store
const store = createStore(counter, applyMiddleware(thunk))

function Test2 (){
  return <h2>This is Test Page2</h2>
}
function Test3() {
  return <h2>This is Test Page3</h2>
}

ReactDom.render(
  (<Provider store = {store}>
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/'>Test Page1</Link></li>
            <li><Link to='/test2'>Test Page2</Link></li>
            <li><Link to='/test3'>Test Page3</Link></li>
          </ul>
        <Route path='/' exact component={App}></Route>
        <Route path='/test2' component={Test2}></Route>
        <Route path='/test3' component={Test3}></Route>
        </div>
      </BrowserRouter>
   </Provider>),
  document.getElementById('root')
)



