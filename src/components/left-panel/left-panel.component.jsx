import React from 'react'
import ForecastDetails from '../forecast-details/forecast-details.components';
import './left-panel.styles.scss';
class LeftPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            forecast: this.props.forecast,
        };
    }

    componentWillReceiveProps(new_props) {
        this.setState({forecast: new_props.forecast})
    }

    componentDidUpdate() {

    }


    render() {
        return(
            <div className = "panel">
                {
                    this.state.forecast.map((day, index) => (<ForecastDetails key={index} details={day}/>))
                }
            </div>
        );

    }

}

export default LeftPanel