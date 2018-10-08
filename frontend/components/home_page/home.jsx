import React from 'react';
import LogoutContainer from '../../components/session_form/logout_container';
import UserContainer from './user_container';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <LogoutContainer />
                <UserContainer />
                You are logged in!
                
            </div>
        );
    }
}

export default HomePage;