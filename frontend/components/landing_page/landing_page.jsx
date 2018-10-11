import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
    render(){
        return (
            
            <div className="landing-full">
                    <div className="landing-title"></div>
                    <div className="landing-links">
                        <div className="link1"><Link to="/signup" className="ps-back-btn">SIGN UP</Link></div>
                        <div className="already">- ALREADY HAVE AN ACCOUNT? -</div>
                        <div className="link1"><Link to="/login" className="ps-back-btn">LOG IN</Link></div>
                    </div>
                    
                </div>
            
        )
    }
}

export default LandingPage;