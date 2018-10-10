import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ current_user }) => {
    
    return (
        <div className="username-text">
            Welcome, {current_user.username}!
        </div>
    )
};

export default User;
