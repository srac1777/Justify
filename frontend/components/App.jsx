import React from 'react';
import { Route, Link, Switch, NavLink } from 'react-router-dom';
import LandingPage from './landing_page/landing_page';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import LogoutContainer from './session_form/logout_container';
// import UserContainer from './temp/user_container';

import { logout } from '../actions/session_actions';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePage from './home_page/home';



const App = ({store}) => {

    return (<div className="AppComponent">
                <div className="main-component"> 
                    <Switch>
                        <AuthRoute path="/login" component={LogInFormContainer} />
                        <AuthRoute path="/signup" component={SignUpFormContainer} />
                        <ProtectedRoute path="/home" component={HomePage} />
                        
                        <AuthRoute path="/" component={LandingPage} />
                    </Switch>
                </div>
                
            </div>)
};

export default App;