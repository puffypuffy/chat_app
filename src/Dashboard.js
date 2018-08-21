import React from 'react'
import { Link, Route, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';

import App from './App'
import {logout} from './auth.redux.js'

function Test2() {
  return <h2>This is Test Page2</h2>
}
function Test3() {
  return <h2>This is Test Page3</h2>
}
function Test4() {
  return <h2>404 Not Found</h2>
}

@connect (
  state => state.auth,
  { logout }
)
class Dashboard extends React.Component {
  render() {
    const redirectToLogin = <Redirect to = '/login'></Redirect>
    const app = (
      <div>
        <h2>Dashboard page</h2>
        {this.props.isAuth? <button onClick = {this.props.logout}>Logout</button> : null}
        <div>
          <ul>
            <li><Link to='/dashboard/'>Test Page1</Link></li>
            <li><Link to='/dashboard/test2'>Test Page2</Link></li>
            <li><Link to='/dashboard/test3'>Test Page3</Link></li>
          </ul>
          <Switch>
            <Route path='/dashboard/' exact component={App}></Route>
            <Route path='/dashboard/test2' component={Test2}></Route>
            <Route path='/dashboard/test3' component={Test3}></Route>
            <Route path='/dashboard/:location' component={Test4}></Route>
          </Switch>
        </div>
      </div>
    )
    return this.props.isAuth? app : redirectToLogin
  }
}

export default Dashboard