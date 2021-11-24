import React from 'react';

import './weather-details.styles.scss';
import Paper from '@mui/material/Paper';

class WeatherDetails extends React.Component {

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
            <Paper elevation = {3} className = "paper">
                <h1>Current Details</h1>
                <p>Temperature: {this.state.details.temp} C</p>
                <p>Humidity: {this.state.details.humidity}%</p>
                <p>Wind Speed: {this.state.details.wind_speed} m/sec</p>
                <p>Weather: {this.state.details.weather[0].main}</p>
                <p>Description: {this.state.details.weather[0].description}</p>
                <p>Date: {this.state.dt}</p>
            </Paper>
        );
    }

}

export default WeatherDetails;