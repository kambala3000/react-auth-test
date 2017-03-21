import React, { Component } from 'react';
import timezones from '../data/timezones';
import classnames from 'classnames';
// import { browserHistory } from 'react-router';

import validateInput from '../utils/inputsValidation';
import FormItem from './FormItem';


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
        this.isValid = this.isValid.bind(this);
    };

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    isValid() {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    registerUser(e) {
        e.stopPropagation();
        e.preventDefault();

        if (this.isValid()) {     
            this.setState({
                errors: {},
                isLoading: true
            });
            this.props.userSignupRequest(this.state)
                .then(() => {
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'You are signed up. Welcome!'
                    });
                    this.context.router.push('/');
                })
                .catch(
                    (error) => this.setState({
                        errors: error.response.data,
                        isLoading: false
                    })
                );
        }
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

              <FormItem 
                fieldName="login"
                value={ this.state.login }
                label="Login"
                error={ errors.login }
                type="text"
                onChange={ this.handleChange }
              />

              <FormItem 
                fieldName="email"
                value={ this.state.email }
                label="Email"
                error={ errors.email }
                type="email"
                onChange={ this.handleChange }
              />

              <FormItem 
                fieldName="password"
                value={ this.state.password }
                label="Password"
                error={ errors.password }
                type="text"
                onChange={ this.handleChange }
              />

              <FormItem 
                fieldName="passwordConfirm"
                value={ this.state.passwordConfirm }
                label="Confirm password"
                error={ errors.passwordConfirm }
                type="text"
                onChange={ this.handleChange }
              />

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
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
};

SignupForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default SignupForm;