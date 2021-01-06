import './App.css';
import Form from './components/Form';
import React, { Component } from 'react'
import ResultNow from './components/ResultNow'

class App extends Component {

  state = {
    cW: '',
    dF: ''
  }

  currentWeather = (cW) => {
    this.setState({ cW })
  }

  dailyForcast = (dF)=>{
    console.log(dF);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Form currentWeather={this.currentWeather} dailyForcast={this.dailyForcast} />
          {this.state.cW ? <ResultNow cW={this.state.cW} /> : null}
        </div>
      </div>
    );
  }
}

export default App;
