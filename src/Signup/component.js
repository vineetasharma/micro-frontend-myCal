/**
 * Created by ttn on 29/04/17.
 */
import React, { Component } from 'react';
import styles from './styles';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:'',
      lastname:'',
      email:'',
      password:'',
    };

  }

  handleSubmit=(event)=>{
    let { firstname, lastname, email, password }=this.state;

    if(!firstname || !lastname || !email || !password)
      alert('All fields are mandatory!')
  };

  handleChange=(field,val)=>{
    this.setState({
      [field]:val,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Signup page
        </p>
        <div style={styles.labels}>
            <label>
              <span> First Name:</span>
              <input
                value={this.state.name}
                onChange={(e)=>{
                  let val=e.target.value;
                  this.handleChange('firstname',val)}
                }
                placeholder="First Name"
              />
            </label>
            <label>
              Last Name:
              <input
                value={this.state.name}
                onChange={(e)=>{
                  let val=e.target.value;
                  this.handleChange('lastname',val)}
                }
                placeholder="Last Name"
              />
            </label>
            <label>
              Email:
              <input
                placeholder="Email"
                value={this.state.email}
                onChange={(e)=>{
                  let val=e.target.value;
                  this.handleChange('email',val)}
                }
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={(e)=>{
                  let val=e.target.value;
                  this.handleChange('password',val)}
                }
              />
            </label>
            <input type="submit" value="Submit" onClick={()=>{this.handleSubmit();}}/>
        </div>
      </div>
    );
  }
}
export default SignUp