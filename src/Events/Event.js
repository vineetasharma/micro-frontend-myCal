import React  from 'react';
import '../App.css';
import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card';

import styles from './styles'

class Event extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        event: props.event
    };
  }

  render() {
    return (
      <li style={styles.eventItem}>
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
