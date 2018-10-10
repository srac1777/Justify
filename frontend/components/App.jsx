import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import LandingPage from './landing_page/landing_page';
import HomePage from './home_page/home';
import PurchaseShowPage from '../components/purchases/purchases_show_container';
import NewPurchasePage from '../components/purchases/purchases_form_container';




const App = ({store}) => {

    return (<div className="AppComponent">
                <div className="main-component"> 
                    <Switch>
                        <AuthRoute path="/login" component={LogInFormContainer} />
                        <AuthRoute path="/signup" component={SignUpFormContainer} />
                        <ProtectedRoute path="/home" component={HomePage} />
                        <ProtectedRoute exact path="/purchases/new" component={NewPurchasePage} />
                        <ProtectedRoute exact path="/purchases/:purchaseId" component={PurchaseShowPage} />
                        
                        <AuthRoute path="/" component={LandingPage} />
                    </Switch>
                </div>
                
            </div>)
};

export default App;