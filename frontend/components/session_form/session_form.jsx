import React from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';
// import _ from 'lodash';
import isEqual from 'lodash/isEqual';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    componentWillUnmount(){
        this.props.clearErrors([]);
    }

    handleUsernameChange(e) {
        this.props.clearErrors([]);
        this.setState({username: e.currentTarget.value});
    }

    handlePasswordChange(e) {
        this.props.clearErrors([]);
        this.setState({ password: e.currentTarget.value });
    }

    handleSubmit(e) {
        if(typeof e !== 'undefined') e.preventDefault();
        this.props.submitForm(this.state);
    }

    handleDemoSubmit(e) {
        if (typeof e !== 'undefined') e.preventDefault();
        this.props.demoLogin(this.state);
    }



    handleDemo(e) {
        this.setState({ username: "shashank", password: "password" }, () => this.handleDemoSubmit());
    }


    renderErrors() {
        let errs = this.props.errors;
        // if (isEqual(this.state,{ username: "", password: "" })) errs = [];
        return (
            <ul className="errors">
                {errs.map((error, i) => (
                    <li key={`error-${i}`} >
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let demo;
        let loginorsignup;
        let err;
        if(this.props.formType === 'LOG IN'){
            demo = (<span><button className="demo-login" onClick={this.handleDemo.bind(this)}>DEMO LOGIN</button>
            <p className="or">- OR -</p></span>)
            loginorsignup = (<div>Don't have an account? <Link to="/signup" className="ss">Sign Up</Link></div>)
        } else {
            demo = (<span><button className="demo-login" onClick={this.handleDemo.bind(this)}>DEMO LOGIN</button>
                <p className="or">- OR -</p></span>)
            loginorsignup = (<div>Already have an account? <Link to="/login" className="ss">Log in</Link></div>)
            
        }

        return (
            <div className="AllSession">
                
                <div className="allform">
                    {demo}
                <form>
                    <div>
                            <input type="text" 
                                className="new-form-input"
                                value={this.state.username}
                                onChange={this.handleUsernameChange}
                                
                                placeholder="Username"
                                autoFocus
                                />
                        <br />
                            <input type="password"
                                className="new-form-input"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                
                                placeholder="Password"
                                />
                        <br />
                                {this.renderErrors()}
                            <div className="submitcontainer"><button onClick={this.handleSubmit.bind(this)} className="submitForm">{this.props.formType}</button></div>
                    </div>
                </form>
                </div>
                {loginorsignup}
            </div>
        );
    }
}

export default withRouter(SessionForm);