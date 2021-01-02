import React, { Component } from 'react'
import './Styles/Form.css'


export default class Form extends Component {
    render() {
        return (
            <div>

          
                 <form >
                 <h3 className="text-danger">Weather API</h3>
                   <div className="form-group">
                      <label htmlFor="city">City</label>
                      <input type="text" className="form-control" id="city"/> 
                    </div>

                    <div className="form-group">
                      <label htmlFor="postal">Postal/Zip code</label>
                      <input type="text" className="form-control" id="postal"/> 
                    </div>

                     

                    <button className="btn btn-warning mr-5">show hourly weather</button>
                    <button className="btn btn-success">show weather now</button>
                      
                   
                   
                    
                 </form>
            </div>
        )
    }
}
