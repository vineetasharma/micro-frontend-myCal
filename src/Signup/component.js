/**
 * Created by ttn on 29/04/17.
 */
import React, { Component } from 'react';
import axios from 'axios';
import styles from './styles';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      cpassword:'',
    };

  }

  handleSubmit=(event)=>{
    let { firstname, lastname, email, password }=this.state;

    if(!firstname || !lastname || !email || !password)
      alert('All fields are mandatory!');

    axios.post('https://micro-auth.herokuapp.com/user', {
      name: firstname,
      username:email,
      password,
    })
      .then(function (response) {
        console.log('responesseee-----',response);
      })
      .catch(function (error) {
        console.log('error-----------',error);
      });
  };

  handleChange=(field,val)=>{
    this.setState({
      [field]:val,
    });
  };

  render() {
    return (
        <div>
          <div className="signup">
            <input
              type="text"
                   placeholder="First Name"
                   value={this.state.name}
                   onChange={(e)=>{
                     let val=e.target.value;
                     this.handleChange('firstname',val)}
                   }
            />
            <input
              type="text"
              value={this.state.name}
              onChange={(e)=>{
                let val=e.target.value;
                this.handleChange('lastname',val)}
              }
              placeholder="Last Name"
            />
            <input
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={(e)=>{
                let val=e.target.value;
                this.handleChange('email',val)}
              }
            />
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e)=>{
                let val=e.target.value;
                this.handleChange('password',val)}
              }
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={this.state.password}
              onChange={(e)=>{
                let val=e.target.value;
                this.handleChange('cpassword',val)}
              }
            />
            <input type="submit"  onClick={this.handleSubmit} value="Sign Up" />
          </div>
          <div className="shadow"></div>
        </div>
    );
  }
}
export default SignUp