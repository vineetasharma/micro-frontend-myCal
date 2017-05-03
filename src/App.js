import React, {Component} from 'react';
import logo from './logo.svg';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import './App.css';
import Login from './Login/component';
import  SignUp from './Signup/component'
import  EventList from './Events/EventList';
import ApplicationBar from './ApplicationBar';
import SideBar from './Sidebar';

injectTapEventPlugin();
const browserHistory = createBrowserHistory();

const menuItems = [
        {route: '/', text: 'Login'},
        {route: 'signup', text: 'Signup'},
        {route: 'eventlist', text: 'EventList'}
    ];


class App extends React.Component {

    constructor(props) {
        super(props);
        console.log('App#props',props);
        this._toggleDrawer = this._toggleDrawer.bind(this);
        this._handleHamburgerClick = this._handleHamburgerClick.bind(this);
        this._handleMenuItemClick = this._handleMenuItemClick.bind(this);
        this.state = {
            appBarConfig: {
                open: false
            }
        };
    }

    _handleHamburgerClick(e) {
        e.preventDefault();
        this._toggleDrawer();
    }

    _toggleDrawer() {
        this.setState({
            appBarConfig: {
                open: !this.state.appBarConfig.open
            }
        })
    }

    _handleMenuItemClick(e, menuItem) {
        this._toggleDrawer();
    }

    render() {
        return (
            <Router history={browserHistory}>
                <div>
                    <ApplicationBar
                        leftIconClick={this._handleHamburgerClick}
                    />
                    <SideBar
                        config={this.state.appBarConfig}
                        menuItems={menuItems}
                        onMenuItemClick={this._handleMenuItemClick}
                        leftIconClick={this._handleHamburgerClick}
                    />
                    <Route exact path="/" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/eventlist" component={EventList}/>
                </div>
            </Router>
        );
    }
}
export default App
