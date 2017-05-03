import React, {Component} from 'react';
import logo from './logo.svg';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Drawer, MenuItem, AppBar, FloatingActionButton} from 'material-ui';
import createBrowserHistory from 'history/createBrowserHistory'

import './App.css';
import Login from './Login/component';
import  SignUp from './Signup/component'
import  EventList from './Events/EventList';


injectTapEventPlugin();
const browserHistory = createBrowserHistory();

const style = {
        marginRight: 20,
        position: 'Fixed',
        bottom: 10,
        right: 10
    },
    menuItems = [
        {route: '/', text: 'Login'},
        {route: 'signup', text: 'Signup'},
        {route: 'eventlist', text: 'EventList'}
    ],
    appTitle = "Mi-Cal";


class App extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        // this.onAboutIconClicked = this.onAboutIconClicked.bind(this);
        this.state = {
            open: false
        };
    }

    _handleHamburgerClick(e) {
        e.preventDefault();
        this._toggleDrawer();
    }

    _toggleDrawer() {
        this.setState({
            open: !this.state.open
        })
    }

    _handleMenuItemClick(e, menuItem) {
        this._toggleDrawer();
    }

    render() {
        return (
            <Router history={browserHistory}>
                <div>
                    <AppBar
                        onLeftIconButtonTouchTap={e => this._handleHamburgerClick(e)}
                        title={appTitle}
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <Drawer
                        open={this.state.open}
                        ref="drawer"
                        menuItems={menuItems}>
                        <AppBar title={appTitle}
                                onLeftIconButtonTouchTap={e => this._handleHamburgerClick(e)}
                        />
                        {
                            menuItems.map((menuItem, index) => (
                                <MenuItem
                                    containerElement={<Link to={menuItem.route} />}
                                    key={index}
                                    onTouchTap={(e) => this._handleMenuItemClick(e, menuItem)}
                                > { menuItem.text }</MenuItem>
                            ))
                        }
                    </Drawer>
                    {/*<FloatingActionButton style={style} onTouchTap={this.onAboutIconClicked}>*/}
                    {/*About*/}
                    {/*</FloatingActionButton>*/}

                    {/*<div className="nav">*/}
                    {/*<ul>*/}
                    {/*<li><Link to="/">Login</Link></li>*/}
                    {/*<li><Link to="/signup">SignUp</Link></li>*/}
                    {/*<li><Link to="/eventlist">LIst</Link></li>*/}
                    {/*</ul>*/}
                    {/*</div>*/}
                    <Route exact path="/" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/eventlist" component={EventList}/>
                </div>
            </Router>
        );
    }
}
export default App
