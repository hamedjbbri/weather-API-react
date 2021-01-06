import React, { Component } from 'react';
import '../components/Styles/ForecastResult.css';
import Chart from "react-apexcharts";
 


export default class ForecastResult extends Component {
    render() {

       const dailyArr = this.props.forecastData.daily; 
   console.log(dailyArr);

       
        return (
            <div>
                
            </div>
        )
    }
}
