/**
 * Created by ttn on 03/05/17.
 */
import React from 'react';
import {AppBar} from 'material-ui';

const appTitle = "Mi-Cal";

class ApplicationBar extends React.Component {

    constructor(props) {
        super(props);
        console.log('ApplicationBar#props', props);
    }

    render() {
        return (
            <AppBar
                onLeftIconButtonTouchTap={e => this.props.leftIconClick(e)}
                title={appTitle}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    }
}

export default ApplicationBar;