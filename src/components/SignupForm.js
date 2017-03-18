import React, { Component } from 'react';
import timezones from '../data/timezones'

import classnames from 'classnames';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            email: '',
            password: '',
            passwordConfirm: '',
            timezone: '',
            errors: {},
            isLoading: false
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
        e.stopPropagation();
        e.preventDefault();
        this.setState({
            errors: {},
            isLoading: true
        });
        this.props.userSignupRequest(this.state).catch(
            (error) => this.setState({
                errors: error.response.data,
                isLoading: false
            })
        );
    };

    render() {
        const { errors } = this.state;
        let timezonesOptions = [];
        for (let key in timezones) {
            if (timezones.hasOwnProperty(key)) {
                timezonesOptions.push(<option key={ timezones[key] } value={ timezones[key] }>{ key }</option>);
            }
        };

        return (
            <form className="signup__form" onSubmit={ this.registerUser }>
              <h3 className="signup__header">Be one of us!</h3>

              <div className="signup__item">
                <p className="signup__item-head">
                  <label htmlFor="formLogin" className="signup__label">Login</label>
                  { errors.login && <span className="signup__error">  { errors.login }</span> }
                </p>
                <input type="text" className={classnames("signup__input", { 'signup__input--err': errors.login })} name="login" id="formLogin" value={ this.state.login } onChange={ this.handleChange } />
              </div>

              <div className="signup__item">
                <p className="signup__item-head">
                  <label htmlFor="formEmail" className="signup__label">Email</label>
                  { errors.email && <span className="signup__error">  { errors.email }</span> }
                </p>
                <input type="email" className={classnames("signup__input", { 'signup__input--err': errors.email })} name="email" id="formEmail" onChange={ this.handleChange } />
              </div>

              <div className="signup__item">
                <p className="signup__item-head">
                  <label htmlFor="formPassword" className="signup__label">Password</label>
                  { errors.password && <span className="signup__error">  { errors.password }</span> }
                </p>
                <input type="text" className={classnames("signup__input", { 'signup__input--err': errors.password })} name="password" id="formPassword" onChange={ this.handleChange } />
              </div>

              <div className="signup__item">
                <p className="signup__item-head">
                  <label htmlFor="formPasswordConfirm" className="signup__label">Confirm password</label>
                  { errors.passwordConfirm && <span className="signup__error">  { errors.passwordConfirm }</span> }
                </p>
                <input type="text" className={classnames("signup__input", { 'signup__input--err': errors.passwordConfirm })} name="passwordConfirm" id="formPasswordConfirm" onChange={ this.handleChange } />
              </div>

              <div className="signup__item">
                <p className="signup__item-head">
                  <label className="signup__label">Timezone</label>
                  { errors.timezone && <span className="signup__error">  { errors.timezone }</span> }
                </p>
                <select name="timezone" className={classnames("signup__input", "signup__input--select", { 'signup__input--err': errors.timezone })} onChange={ this.handleChange } value={ this.state.timezone }>
                  <option value="" className="" disabled>Choose...</option>
                  { timezonesOptions }
                </select>
              </div>

              <div className="signup__btns-box">
                <button className="btn btn--blue"  disabled={ this.state.isLoading } >Sign up</button>
              </div>
            </form>
            );
    }
};

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
};

export default SignupForm;