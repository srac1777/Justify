import React from 'react';
import { Link } from 'react-router-dom';

const Logout = ({ logout }) => {
    return (
        <div className="lb-container">
            <div><button className="logout-button" onClick={logout}>LOG OUT</button></div>
        </div>)
};


export default Logout;