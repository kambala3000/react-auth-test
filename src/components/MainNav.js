import React, { Component } from "react";
import { Link } from "react-router";
import "./MainNav.css";

class MainNav extends Component {
    render() {
        return (
            <nav className="main-nav">
                <div className="logo">
                    <Link to="/" className="logo__link">Lost in space</Link>
                </div>
                <div className="auth-box">
                    <div className="auth-box__signup">
                        <Link to="/signup" className="auth-box__link">
                            Sign up
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MainNav;
