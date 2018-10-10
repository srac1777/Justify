import React from 'react';
import LogoutContainer from '../../components/session_form/logout_container';
import UserContainer from './user_container';
import PurchasesIndexContainer from '../purchases/purchases_index_container';

class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage-full">
                <LogoutContainer />
                <UserContainer />
                You are logged in!
                <PurchasesIndexContainer />
            </div>
        );
    }
}

export default HomePage;