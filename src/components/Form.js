import React, { Component } from 'react'
import './Styles/Form.css'
import axios from 'axios'

export default class Form extends Component {
    
    state = {
        city: '',
        // postal: '',
        api_key: '2b6796993859f84b8808fad453263671',
        error: '' 
    }
    
    getTodayDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;

        return today
    }

    getYesterdayDate() {
        var yesterday = new Date(Date.now() - 86400000);
        var dd = String(yesterday.getDate()).padStart(2, '0');
        var mm = String(yesterday.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = yesterday.getFullYear();

        yesterday = yyyy + '-' + mm + '-' + dd;
        return yesterday 
    }
 
    handleChange =(e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    

    // handleHourly = (e) => {
    //     e.preventDefault();

    //     const url =`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&zip=${this.state.postal}&appid=${this.state.api_key}`
        
    //     axios.get(url)
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         this.setState({
    //             error: 'city not found'
    //         })
    //     })
    // }

    handleNow=(e)=> {
        e.preventDefault();

        const url= `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${this.state.api_key}`

        axios.get(url)
        .then(response => {
            this.props.currentWeather(response.data) 

            this.setState(({error: ''}))
        }) 
        .catch(error => {
            this.props.currentWeather('') 
            this.setState({
                error: 'city not found'
            })
        })
    }
 
    render() {
        return (
            <div> 
                 <form >
                 <h3 className="text-danger">Weather API</h3>
                   <div className="form-group">
                      <label htmlFor="city">City</label>
                      <input type="text" className="form-control" id="city" name="city" value={this.state.city}  onChange={this.handleChange}/> 
                     <p className="text-danger" >{this.state.error}</p> 
                    </div>

                    {/* <div className="form-group">
                      <label htmlFor="postal">Postal/Zip code</label>
                      <input type="text" className="form-control" id="postal" name="postal" value={this.state.postal} onChange={this.handleChange} /> 
                    </div>  */}
                    {/* <button className="btn btn-warning mr-5" onClick={this.handleHourly}>show hourly weather</button> */}
                     <button className="btn btn-success" onClick={this.handleNow}>show weather now</button>
                       
                 </form>
            </div>
        )
    }
}
