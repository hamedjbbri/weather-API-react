 
import React, { Component } from 'react';
import './Styles/Form.css'
import axios from 'axios'

class Form extends Component {

    state = {
        city: '',
        error: '',
        api_key: '2b6796993859f84b8808fad453263671',
        lon: '',
        lat: ''
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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleForcast = async (e) => { 
        
        e.preventDefault();
        const { api_key, lon, lat } = this.state; 
        const forcastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${api_key}`

        const response = await axios.get(forcastUrl)

        
       this.props.weatherForecast(response.data);    }

    componentDidUpdate(prevProps, prevState) {
        const { city, api_key } = this.state;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
        if (prevState.city !== this.state.city) {
            axios.get(url).then(res => {
                    this.setState({ lon: res.data.coord.lon, lat: res.data.coord.lat })
                }
                ).catch(console.clear())
        } 
    }




    handleNow = (e) => {
        e.preventDefault(); 
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${this.state.api_key}`
        axios.get(url)
            .then(response => {
                this.props.currentWeather(response.data) 
                this.setState({ error: '' })
            })
            .catch(error => {
                this.props.currentWeather('') 
                this.setState({
                    error: 'Location was not found.'
                })
            })
    }

    render() {
 
        return (
            <div> 
                <form className="bg-light">
                    <h3 className="text-danger">Weahter API</h3>
                    <div className="form-group">
                      
                        <input type="text" className="form-control" id="city" name="city" value={this.state.city} onChange={this.handleChange} placeholder="Enter city name" />
                    </div> 
                    <button className="btn btn-warning mr-5" onClick={this.handleForcast}>Show forecast weather</button>
                    <button className="btn btn-success" onClick={this.handleNow}>Show weather now</button> 
                    <p className="text-danger p-3">{this.state.error}</p>
                </form> 
            </div>
        );
    }
}

export default Form;