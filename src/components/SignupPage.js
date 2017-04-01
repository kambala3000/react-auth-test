import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SignupPage.css';
import SignupForm from './SignupForm';
import { userSignupRequest, isUserExists } from '../actions/signupActions';
import { addFlashMessage } from '../actions/flashMessagesActions';

class SignupPage extends Component {
    render() {
        return (
            <div className="singup">
                <SignupForm
                    userSignupRequest={this.props.userSignupRequest}
                    isUserExists={this.props.isUserExists}
                    addFlashMessage={this.props.addFlashMessage}
                />
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    isUserExists: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
};

export default connect(null, { userSignupRequest, isUserExists, addFlashMessage })(SignupPage);
