import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/component';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import  SignUp from './Signup/component'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import  EventList from './Events/EventList';

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
);
const style = {
    marginRight: 20,
    position: 'Fixed',
    bottom: 10,
    right: 10
};


class App extends React.Component {

    constructor(props) {
        super(props);
        this.onAboutIconClicked = this.onAboutIconClicked.bind(this);
    }

    onAboutIconClicked () {

    }

    render() {
        return (
            <Router>
                <div>
                    <FloatingActionButton style={style} onTouchTap="">
                        About
                    </FloatingActionButton>

                    <div className="nav">
                        <ul>
                            <li><Link to="/">Login</Link></li>
                            <li><Link to="/signup">SignUp</Link></li>
                            <li><Link to="/eventlist">LIst</Link></li>
                        </ul>
                    </div>
                    <Route exact path="/" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/eventlist" component={EventList}/>
                </div>
            </Router>
        );
    }
}
export default App
