import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/component';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import  SignUp from './Signup/component'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

import  EventList from './Events/EventList';
injectTapEventPlugin();


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
                    <FloatingActionButton style={style} onTouchTap={this.onAboutIconClicked}>
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
                    <Route path="/eventlist" component={EventList}/>
                </div>
            </Router>
        );
    }
}
export default App
