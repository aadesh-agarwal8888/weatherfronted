import React from 'react'
import WeatherDetails from '../weather-details/weather-details.component';

class RightPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: this.props.data.current,
        };
    }

    componentWillReceiveProps(new_props) {
        this.setState({current: new_props.data.current})
    }


    render() {
        return(
            <div>
                <WeatherDetails details={this.state.current}/>
            </div>
        );

    }

}

export default RightPanel