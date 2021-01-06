import './App.css';
import Form from './components/Form';
import React, { Component } from 'react'
import ResultNow from './components/ResultNow'
import ForecastResult from './components/ForecastResult';

class App extends Component {

  state = {
    cW: '',
    forecastData: ''
  }

  currentWeather = (cW) => {
    this.setState({ cW })
  }
 

  weatherForecast =(forecastData) => {
     this.setState({forecastData})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Form currentWeather={this.currentWeather} dailyForcast={this.dailyForcast} weatherForecast={this.weatherForecast} />
          {this.state.cW ? <ResultNow cW={this.state.cW} /> : null}
          <ForecastResult forecastData={this.state.forecastData} />
        </div>
      </div>
    );
  }
}

export default App;
