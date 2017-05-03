/**
 * Created by ttn on 03/05/17.
 */

import React from 'react';
import { Link } from 'react-router-dom'
import { MenuItem, Drawer } from 'material-ui';
import ApplicationBar from './ApplicationBar';

class SideBar extends React.Component {

    render() {
        console.log('SideBar#props', this.props);
        return (
            <Drawer
                open={this.props.config.open}
                ref="drawer"
                menuItems={this.props.menuItems}>
                <ApplicationBar
                    leftIconClick={(e) => this.props.leftIconClick(e)}
                />
                {
                    this.props.menuItems.map((menuItem, index) => (
                        <MenuItem
                            containerElement={<Link to={menuItem.route} />}
                            key={index}
                            onTouchTap={(e) => this.props.onMenuItemClick(e, menuItem)}
                        > { menuItem.text }</MenuItem>
                    ))
                }
            </Drawer>
        );
    }
}

export default SideBar;