import React, { Component } from 'react'
import { render } from 'react-dom';
class App extends Component{
  render(){
    return (
      <div>
        hello worlds
      </div>
    )
  }
}
window.React = React
window.render = render
window.App = App
