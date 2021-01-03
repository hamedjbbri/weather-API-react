import './App.css';
import Form from './components/Form';
import React, { Component } from 'react'
import ResultNow from './components/ResultNow'

class App extends Component {

  state = {
    cW: ''
  }

  currentWeather = (cW) => {
    this.setState({ cW })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Form currentWeather={this.currentWeather} />
          {this.state.cW ? <ResultNow cW={this.state.cW} /> : null}
        </div>
      </div>
    );
  }
}

export default App;
