import React from 'react'

class App extends React.Component {
  render () {
    let boss = 'puffy'
    return (
      <div>
        <h2>Hello {boss}</h2>
        <Test name = 'puffypuffy'></Test>
        <Test2></Test2>
        <Test3> </Test3>
      </div>

    )
  }
}

class Test extends React.Component {
  render() {
    return (
      <h2>This is Component Test, {this.props.name}</h2>
    )
  }
}

class Test2 extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      names: ['aaa', 'bbb', 'ccc']
    }
  }

  render() {
    return (
      <div>
        <h2>This is Component Test2</h2>
        <ul>
          {this.state.names.map (v => {
            return <li key={v}>{v}</li>
          })}
        </ul>
      </div>
    )
  }
}

class Test3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      names: ['aaa', 'bbb', 'ccc']
    }
    //this.clickMe = this.clickMe.bind(this)
  }

  clickMe (){
    console.log("CCCCCCClick Me")
    this.setState({
      names: [...this.state.names, 'boss' + Math.random()]
    })
  }

  render() {
    return (
      <div>
        <h2>This is Component Test2</h2>
        <button onClick = {() => this.clickMe()}>Click Me</button>
        <ul>
          {this.state.names.map(v => {
            return <li key={v}> {v} </li>
          })}
        </ul>
      </div>
    )
  }
}

export default App