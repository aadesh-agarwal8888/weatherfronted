import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import axios from 'axios';
import RightPanel from '../../components/right-panel/right-panel.component';
import LeftPanel from '../../components/left-panel/left-panel.component';
import Divider from '@mui/material/Divider';

import './home.styles.scss';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: "",
            data: {},
            datafetched: false
        }
    }

    handleSubmit = async event => {
        axios.post("https://hidden-anchorage-95261.herokuapp.com//weather", this.state)
            .then(response => this.setState({data: response.data, datafetched: true}, () => {
                console.log(this.state.data)
                console.log(this.state)
            }))
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className = "home">
                <div className = "search-bar">
                    <FormInput type="city" name="city" value={this.state.city} required onChange = {this.handleChange} label="City" />
                    <div className="buttons">
                        <CustomButton onClick = {this.handleSubmit} type="submit"> Check Weather </CustomButton>
                    </div>
                </div>
                <div className = "today">
                    {
                        this.state.datafetched ? <RightPanel data={this.state.data}/> : <div/>
                    }
                </div>
                <Divider />
                <div className = "forecast">
                    {
                        this.state.datafetched ? <LeftPanel forecast = {this.state.data.daily}/> : <div/>
                    }
                </div>
                
            </div>
        );
    }

}
  
export default Home;
  