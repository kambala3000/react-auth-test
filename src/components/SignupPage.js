import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SignupPage.css';
import SignupForm from './SignupForm';
import { userSignupRequest } from '../actions/signupActions';

class SignupPage extends Component {
    render() {
        return (
            <div className="singup">
              <SignupForm userSignupRequest={ this.props.userSignupRequest } />
            </div>
            );
    }
}

SignupPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
};

// export default connect(state => { return {} }, { userSignupRequest })(SignupPage);
export default connect(null, { userSignupRequest })(SignupPage);