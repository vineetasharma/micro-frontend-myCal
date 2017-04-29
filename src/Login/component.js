import React, { Component } from 'react';

class Login extends  Component {
    render() {
        return <div>
            <h3>Login</h3>
            <div>
                Email : <input type="email" placeholder="email"/>
            </div>
            <div>
                Password : <input type="password" placeholder="password"/>
            </div>
            <div>
                <input type="button" value="Login"/>
            </div>
        </div>
    }
}

export default Login;