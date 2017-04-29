import React, { Component } from 'react';
import axios from 'axios';

let userEmail = null, userPassword = null;


class Login extends  Component {


    componentDidMount() {
        userEmail = document.getElementById("user-email");
        userPassword = document.getElementById("user-password");
        userEmail.value = "";
        userPassword.value = "";
    }

    submit = () => {
        console.log(userEmail.value, userPassword.value)
        axios.post('/user', {
            email: userEmail.value,
            password: userPassword.value
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return <div>
            <div className="login">
                <input type="text" placeholder="Email" id="user-email" />
                <input type="password" placeholder="Password" id="user-password" />
                <a href="#" className="forgot">forgot password?</a>
                <input type="submit"  onClick={this.submit} value="Sign In" />
            </div>
            <div className="shadow"></div>
        </div>
    }
}

export default Login;