import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from './auth.redux'

@connect(
  state => state.auth,
  {login}
)
class Auth extends React.Component {
  render(){
    const redirectToDashboard = <Redirect to='/dashboard'></Redirect>
    return (
      <div>
        {this.props.isAuth? redirectToDashboard : null}
        <button onClick = {this.props.login}>Click to Login</button>
      </div>
    )
  }
}

export default Auth