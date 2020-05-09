import React, { Component } from "react";
import {Link} from 'react-router-dom';
import HelloWorldService from '../api/todo/HelloWorldService.js';
class WelcomeComponent extends Component{
    constructor(props){
        super(props);
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.state ={
            welcomeMessage : '',
            welcomeMessageBean : '',
            errorMessage : ''
        }
    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
                </div>

                <div className="container">
                    Click here to get customized Welcome message.
                    <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
                <div className="container">
                    {this.state.welcomeMessageBean}
                </div>
                <div className="container">
                    {this.state.errorMessage}
                </div>

            </>
            
        );
    }

    retrieveWelcomeMessage(){
        console.log("retrieved successfully");
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleResponseSuccessfully(response))
        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleBeanResponseSuccessfully(response))
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.handleBeanResponseSuccessfully(response))
        .catch(error => this.handleError(error))  
    }

    handleResponseSuccessfully(response){
        this.setState({welcomeMessage : response.data})
    }
    handleBeanResponseSuccessfully(response){
        this.setState({welcomeMessageBean : response.data.message})
    }
    handleError(error){
        this.setState({errorMessage: error.response.data.message})
    }
}

export default WelcomeComponent;