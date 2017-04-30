import React from 'react';
import { connect } from 'react-redux';

import '../App.css';
import Event from './Event';


class EventList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      apiResponses: props.events
    }
  }

  render() {
    return (
      <ul>
          {
              this.state.apiResponses.map( (response, index) => (<Event event={response} key={index}></Event>))
          }
      </ul>
    );
  }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        events: state.events
    };
}

export default connect(mapStateToProps)(EventList);
