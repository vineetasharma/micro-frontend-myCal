import React  from 'react';
import './App.css';
import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Event extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        event: props.event
    };
  }

  render() {
    return (
      <li className="event_item">
        <Card>

            <CardHeader
                title={this.state.event.organisedBy}
                subtitle={`${this.state.event.phone}`}
                avatar="https://image.flaticon.com/icons/png/512/78/78373.png"
                actAsExpander={true}
                showExpandableButton={true}
            />
            <CardTitle title={this.state.event.eventName} subtitle={`in ${this.state.event.city} on ${this.state.event.date} at ${this.state.event.venue}`}/>

          <CardText expandable={true}>
              { this.state.event.description }
          </CardText>
        </Card>
      </li>
    );
  }
}

export default Event;
