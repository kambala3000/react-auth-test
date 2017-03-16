import React, { Component } from 'react';
import timezones from '../data/timezones'

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            email: '',
            password: '',
            passwordConfirm: '',
            timezone: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.registerUser = this.registerUser.bind(this);
    };

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    registerUser(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.userSignupRequest(this.state);
    };

    render() {
        let timezonesOptions = [];
        for (let key in timezones) {
            if (timezones.hasOwnProperty(key)) {
                timezonesOptions.push(<option key={ timezones[key] } value={ timezones[key] } >{ key }</option>);
            }
        };

        return (
            <form className="signup__form" onSubmit={ this.registerUser }>
              <h3 className="signup__header">Be one of us!</h3>
              <div className="signup__item">
                <label htmlFor="formLogin" className="signup__label">Login</label>
                <input type="text" className="signup__input" name="login" id="formLogin" value={ this.state.login } onChange={ this.handleChange } />
              </div>
              <div className="signup__item">
                <label htmlFor="formEmail" className="signup__label">Email</label>
                <input type="email" className="signup__input" name="email" id="formEmail" onChange={ this.handleChange } />
              </div>
              <div className="signup__item">
                <label htmlFor="formPassword" className="signup__label">Password</label>
                <input type="text" className="signup__input" name="password" id="formPassword" onChange={ this.handleChange } />
              </div>
              <div className="signup__item">
                <label htmlFor="formPasswordConfirm" className="signup__label">Confirm password</label>
                <input type="text" className="signup__input" name="passwordConfirm" id="formPasswordConfirm" onChange={ this.handleChange } />
              </div>
              <div className="signup__item">
                <label className="signup__label">Timezone</label>
                <select name="timezone" className="signup__input signup__input--select" onChange={ this.handleChange } value={ this.state.timezone }>
                  <option value="" className="" disabled >Choose...</option>
                  { timezonesOptions }
                </select>
              </div>
              <div className="signup__btns-box">
                <button className="btn btn--blue">Sign up</button>
              </div>
            </form>
            );
    }
};

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
};

export default SignupForm;