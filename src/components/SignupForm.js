import React, { Component } from 'react';

class SignupForm extends Component {
    render() {
        return (
            <form className="signup__form">
                <h3 className="signup__header">Be one of us!</h3>
                <div className="signup__item">
                    <label htmlFor="formLogin" className="signup__label" >Login</label>
                    <input type="text" className="signup__input" name="login"  id="formLogin" />
                </div>
                <div className="signup__item">
                    <label htmlFor="formEmail" className="signup__label" >Email</label>
                    <input type="email" className="signup__input" name="email"  id="formEmail" />
                </div>
                <div className="signup__item">
                    <label htmlFor="formPassword" className="signup__label">Password</label>
                    <input type="text" className="signup__input" name="password"  id="formPassword" />
                </div>
                <div className="signup__item">
                    <label htmlFor="formPasswordConfirm" className="signup__label">Confirm password</label>
                    <input type="text" className="signup__input" name="passwordConfirm"  id="formPasswordConfirm" />
                </div>
                <div className="signup__btns-box">
                    <button className="btn btn--blue">Sign up</button>
                </div>
            </form>
        );
    }
}

export default SignupForm;