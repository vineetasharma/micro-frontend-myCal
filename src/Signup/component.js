/**
 * Created by ttn on 29/04/17.
 */
import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      password:'',
    };

  }
  handleSubmit=(event)=>{
    console.log('handleSubmit-----------------------------called',event);
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
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                value={this.state.name}
                onChange={(e)=>{
                  let val=e.target.value;
                  this.handleChange('name',val)}
                }
                placeholder="Name"
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
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default SignUp