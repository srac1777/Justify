import React from 'react';
import LogoutContainer from '../../components/session_form/logout_container';
import UserContainer from './user_container';
import PurchasesIndexContainer from '../purchases/purchases_index_container';

class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage-full">
                <div className="title-top">
                    <div></div>
                    <div className="justify-logo"></div>
                    <div><LogoutContainer /></div>
                </div>
                <div className="user-container">
                    <UserContainer />
                </div>
                <div className="purchases-index-container">
                    <PurchasesIndexContainer />
                </div>
            </div>
        );
    }
}

export default HomePage;