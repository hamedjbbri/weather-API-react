import React, { Component } from 'react'
import './Styles/ResultNow.css'

export default class Result extends Component {
    render() {


        const { cW } = this.props

        return (
            <div className="bg-light result">
              <h6 className="mt-0">CURRENT CONDITIONS</h6>
                <div >
                    
                    <div>Temperature: {Math.round(cW[0].temp)}
                    &#8451; <img src={`https://www.weatherbit.io/static/img/icons/${cW[0].weather.icon}.png`} /></div>
                    <div >
                     <ul>
                            <li className="dd"><b>Real Feel:</b>    
                            <span className="ml-4 float-right">  {Math.round(cW[0].app_temp)}</span> </li>
                     
                     
                            <li className="dd"><b>Humidity:</b>         
                              <span className="ml-4 float-right"> {Math.round(cW[0].rh)}% </span></li>
                   
                     
                            <li className="dd"><b>Wind Speed:</b>         
                            <span className="ml-4 float-right"> {Math.round(cW[0].wind_spd)}m/s</span> </li>
                       </ul>

                    </div>
                </div>
            </div>
        )
    }
}
