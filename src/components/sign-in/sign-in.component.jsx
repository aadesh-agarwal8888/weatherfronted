import React from 'react';
import axios from 'axios';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {Navigate} from 'react-router-dom';

class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            signin: false,
            wrongpass: false
        }
    }

    handleSubmit = async event => {

        axios.post("https://hidden-anchorage-95261.herokuapp.com/login", this.state)
            .then(resposne => {
                resposne.data.status === true ? this.setState({signin: true}) : this.setState({signin: false, wrongpass: true})
            })

    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value })
    }

    render() {
        if (this.state.signin) {
            return <Navigate to = "/home" name={this.state.username}/>
        }
        return(
            <div className = 'sign-in'>
                <h1>Weather Checker</h1>
                <h2>I already have a account</h2>
                <span>Sign In with your email and password</span>
                    <FormInput type="username" name="username" value={this.state.username} required onChange = {this.handleChange} label="Username" />

                    <FormInput type="password" name="password" value={this.state.password} required label="Password" onChange = {this.handleChange} />

                    <div className="buttons">
                        <CustomButton onClick = {this.handleSubmit} type="submit"> Submit </CustomButton>
                    </div>

                    <p style={{color: 'red'}}>*Please username="abc" & pass="abc" </p>

                    {
                        this.state.wrongpass ? <p style={{color: 'red'}}>Wrong username or password</p> : <div/> 
                    }
                    
            </div>
        );
    }
}

export default Signin;