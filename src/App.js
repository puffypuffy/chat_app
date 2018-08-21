import React from 'react'
import {connect} from 'react-redux'
import { addOne, minusOne, addOneAsync } from './index.redux.js'


@connect (
  state => ({num:state}),
  {addOne, minusOne, addOneAsync}
)
class App extends React.Component {
  render (){
    return (
      <div>
        <h3>Current Number: {this.props.num}</h3>
        <button onClick={this.props.addOne}> +1 </button>
        <button onClick={this.props.minusOne}> -1 </button>
        <button onClick={this.props.addOneAsync}> Delay 2 Seconds </button>
      </div>
    )
  }
}

export default App