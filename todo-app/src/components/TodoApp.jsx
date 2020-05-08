import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import ErrorComponent from './ErrorComponent';

class TodoApp extends Component {
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path='/' exact component={LoginComponent}/>
                            <Route path='/login' component={LoginComponent}/>
                            <AuthenticatedRoute path='/welcome/:name' component={WelcomeComponent}/>
                            <AuthenticatedRoute path='/todos' component={ListTodosComponent}/>
                            <AuthenticatedRoute path='/logout' component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                        
                    </>
                </Router>
            </div>
        );
    }
}




// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessfulMessage(props){
//     if(props.showSuccessfulMessage){
//         return <div>Login Successful</div>
//     }
//     return null
// }

export default TodoApp;
 