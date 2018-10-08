import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
    render(){
        return (<div>
                <Link to="/signup" className="link1">SIGN UP</Link>
                <p>- ALREADY HAVE AN ACCOUNT? -</p>
                <Link to="/login" className="link2">LOG IN</Link>
        </div>
                
        )
    }
}

export default LandingPage;