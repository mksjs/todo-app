import React, { Component } from "react";
import AuthenticationService from './AuthenticationService.js';
import { withRouter } from 'react-router';


class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            username : 'manish1998',
            password : '',
            hasLoginFailed : false,
            showSuccessfulMessage : false

        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event){
        console.log(this.state)
        this.setState({
            [event.target.name]
                : event.target.value
        })

    }

    loginClicked(){
        if(this.state.username === 'manish1998' && this.state.password === 'dummy'){
            //console.log("Successful")
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({showSuccessfulMessage : true})
            // this.setState({hasLoginFailed : false})
        }else{
            this.setState({hasLoginFailed : true})
            this.setState({showSuccessfulMessage :false})
            console.log("Failed");
        }
    }

    render() {
        return (
            
            <div className="LoginComponent">
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessfulMessage && <div>Login Successful</div>}
                    {/* <ShowLoginSuccessfulMessage showSuccessfulMessage={this.state.showSuccessfulMessage}/> */}
                    Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginComponent);

