import { Divider } from '@mui/material';
import React from 'react';

class ForecastDetails extends React.Component {

    constructor(props) {
        super(props);
        let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(this.props.details.dt*1000)
        this.state = {
            details: this.props.details,
            dt: date,  
        }
    }
    componentWillReceiveProps(new_props) {
        let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new_props.details.dt*1000)
        this.setState({details: new_props.details, dt: date})
    }

    render() {
        return(
            <div>
                <h1>Date: {this.state.dt}</h1>
                <p>Temperature: {this.state.details.temp.day} C</p>
                <p>Humidity: {this.state.details.humidity}%</p>
                <p>Wind Speed: {this.state.details.wind_speed} m/sec</p>
                <p>Weather: {this.state.details.weather[0].main}</p>
                <p>Description: {this.state.details.weather[0].description}</p>
                <Divider variant="middle"/>
            </div>
        );
    }

}

export default ForecastDetails;