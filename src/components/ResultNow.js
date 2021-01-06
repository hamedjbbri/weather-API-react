import React, { Component } from 'react'
import './Styles/ResultNow.css'

export default class Result extends Component {
    
    roundTemp = temp =>   Math.round(temp)

    checkDayTime = () => {

    }
    
    render() { 
        const { cW } = this.props 
 
         console.log(cW);
         
        return (
            <div className="result">
                <h2>The weather in {cW.name}</h2>
              <h6 className="mt-0">CURRENT CONDITIONS</h6>
                <div> 
                    <div>Temperature:  {this.roundTemp(cW.main.temp - 273.15)}
                    &#8451; <span><img src={`http://openweathermap.org/img/wn/${cW.weather[0].icon}.png`} /> </span></div>
                    <div >
                     <ul>
                            <li className="dd"><b>Real Feel: {this.roundTemp(cW.main.feels_like - 273.15)}</b>    
                            <span className="ml-4 float-right">   </span> </li> 
                            <li className="dd"><b>Humidity:</b>         
                              <span className="ml-4 float-right">{cW.main.humidity}% </span></li>
                    
                            <li className="dd"><b>Weather condition:</b>         
                            <span className="ml-4 float-right">  {cW.weather[0].description}</span> </li>
                       </ul> 
                    </div>
                </div>
            </div>
        )
    }
}
