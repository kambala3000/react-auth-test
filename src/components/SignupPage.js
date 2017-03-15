import React, { Component } from 'react';
import './SignupPage.css';
import SignupForm from './SignupForm';

class SignupPage extends Component {
    render() {
        return (
            <div className="singup" >
                <SignupForm />
            </div>
        );
    }
}

export default SignupPage;