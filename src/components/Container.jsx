import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './Container.css';

function Container() {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
            <Signup />
            <Login />
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" onClick={toggleSignUp}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <button className="ghost" onClick={toggleSignUp}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;
