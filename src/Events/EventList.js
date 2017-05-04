import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import '../App.css';
import Event from './Event';
import { likeClicked, fetchEvents } from './events.action';
import ApplicationActions from '../constants/app.actions';
import styles from './styles';
import CircularProgress from 'material-ui/CircularProgress';

class EventList extends React.Component {

    constructor(props) {
        super(props);
        this.onCommentClicked = this.onCommentClicked.bind(this);
        this.onDislikeClicked = this.onDislikeClicked.bind(this);
        this.onLikeClicked = this.onLikeClicked.bind(this);
        this.onShareClicked = this.onShareClicked.bind(this);
        this.props.dispatch(fetchEvents({ userName: 'gaurav'}));
    }

    onDislikeClicked(event) {
        this.props.dispatch({ type: ApplicationActions.Events.DisLikeButtonClicked, payload: event });
    }

    componentWillMount() {
        console.log('EventList#ComponentWillMount')
    }
    componentWillReceiveProps(nextProps) {
        console.log(`EventList#ComponentWillReceiveProps`, nextProps);
    }

    onLikeClicked(event) {
        this.props.dispatch({ type: ApplicationActions.Events.LikeButtonClicked, payload: event });
    }

    onShareClicked() { }

    onCommentClicked() { }

    render() {
        console.log('EventList#render...', this.props);
        if(this.props.isFetchingPending){
            return (
                <CircularProgress size={80} thickness={5} innerStyle={styles.loader}/>
            )
        }

        if(this.props.isFetchingFailed){
            return ( <div> Oooops !! Something went wrong. </div>)
        }

        return (
            <ul>
                {
                    this.props.events.map((event, index) => (
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
    console.log("mapStateToProps", state);
    return state.events;
}

export default connect(mapStateToProps)(EventList);
