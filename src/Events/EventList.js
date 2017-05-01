import React from 'react';
import {connect} from 'react-redux';

import '../App.css';
import Event from './Event';
import { likeClicked } from './events.action';
import ApplicationActions from '../constants/app.actions';

class EventList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apiResponses: props.events };
        this.onCommentClicked = this.onCommentClicked.bind(this);
        this.onDislikeClicked = this.onDislikeClicked.bind(this);
        this.onLikeClicked = this.onLikeClicked.bind(this);
        this.onShareClickes = this.onShareClicked.bind(this);
    }

    onDislikeClicked(event) {
        this.props.dispatch({
            type: ApplicationActions.Events.DisLikeButtonClicked,
            payload: event
        });
    }

    onLikeClicked(event) {
        this.props.dispatch({
            type: ApplicationActions.Events.LikeButtonClicked,
            payload: event
        });
    }

    onShareClicked() { }

    onCommentClicked() { }

    render() {
        return (
            <ul>
                {
                    this.state.apiResponses.map((event, index) => (
                        <Event event={event}
                               key={index}
                               onCommentClicked={this.onCommentClicked}
                               onShareClickes={this.onShareClicked}
                               onLikeClicked={e => this.onLikeClicked(event)}
                               onDislikeClicked={e => this.onDislikeClicked(event)}
                        >
                        </Event>
                    ))
                }
            </ul>
        );
    }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return { events: state.events };
}

export default connect(mapStateToProps)(EventList);
