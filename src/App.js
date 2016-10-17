import React from 'react'
import ReactDOM from 'react-dom'
import Bacon from 'baconjs'
import R from 'ramda'

import logo from './logo.svg'
import './App.css'

const App = React.createClass({
  componentDidMount: function() {
    const userNameP = Bacon.fromEvent(ReactDOM.findDOMNode(this.refs.userNameInput), "keyup")
      .map(e => e.target.value)
      .toProperty('')
    const fullNameP = Bacon.fromEvent(ReactDOM.findDOMNode(this.refs.fullNameInput), "keyup")
      .map(e => e.target.value)
      .toProperty('')

    const userNameEnteredP = userNameP.map(R.complement(R.isEmpty))
    const fullNameEnteredP = fullNameP.map(R.complement(R.isEmpty))

    this.props.actions.push(userNameP.map(x => ({ uname: x })))
    this.props.actions.push(fullNameP.map(x => ({ fname: x })))
    this.props.actions.push(userNameEnteredP.map(x => ({ unameEntered: x })))
    this.props.actions.push(fullNameEnteredP.map(x => ({ fnameEntered: x })))
  },
  render: function() {
    return (
      <form id="login-container">
        <h1>Bacon Registration Form</h1>
        <div id="username">
          <input type="text" ref="userNameInput" placeholder="username"/>
          <em className="ajax"></em>
          <em id="username-unavailable" 
            className="tooltip">Username is unavailable</em>
        </div>
        <div id="fullname">
          <input type="text" ref="fullNameInput" placeholder="Full Name"/>
        </div>
        <div id="register">
          <button>Get some!</button>
          <em className="ajax"></em>
          <span id="result"></span>
        </div>
      </form>
    )
  }
})

export default App
