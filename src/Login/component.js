import React, { Component } from 'react';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';
import { Link } from 'react-router-dom'


let userEmail = null, userPassword = null;


class Login extends  Component {


    componentDidMount() {
        userEmail = document.getElementById("user-email");
        userPassword = document.getElementById("user-password");
        userEmail.value = "";
        userPassword.value = "";
    }

    submit = () => {
        if(!userPassword.value){
            notify.show('Please, enter correct email & password!', 'error');
        }

        if(!this.validateEmail(userEmail.value)) {
            notify.show('Please, check the email!', 'error');
        } else {
            axios.post('https://micro-auth.herokuapp.com/user/login', {
                username: userEmail.value,
                password: userPassword.value
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    };

    render() {
        return <div>
            <div className="login">
                <input type="text" placeholder="Email" id="user-email" />
                <input type="password" placeholder="Password" id="user-password" />
                <a href="#" className="forgot">forgot password?</a>
                <input type="submit"  onClick={this.submit} value="Sign In" />
                <div className="signupbtn"> Or,
                    <Link to="/signup">Signup</Link>
                </div>
            </div>
            <div className="shadow"></div>
            <Notifications />
        </div>
    }
}

export default Login;