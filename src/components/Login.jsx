import React from 'react';

function Login() {
    return (
        <div className="form-container sign-in-container">
            <form>
                <h1>Login </h1>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button>Sign In</button>
            </form>
        </div>
    );
}

export default Login;
