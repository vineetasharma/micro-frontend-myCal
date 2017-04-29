import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const SignUp = () => (
  <div>
    <h2>SignUp</h2>
  </div>
)

const Login = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Home = ({ match }) => (
  <div>
    <h2>Home</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Home}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        {/*<li><Link to="/topics">Home</Link></li>*/}
      </ul>

      <hr/>

      <Route exact path="/" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/home" component={Home}/>
    </div>
  </Router>
)
export default App
