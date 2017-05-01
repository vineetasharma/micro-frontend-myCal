import React  from 'react';
import '../App.css';
import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';

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
            <IconButton iconClassName="fa fa-comment-o" onTouchTap={this.props.onCommentClicked}/>
            <IconButton iconClassName="fa fa-share" onTouchTap={this.props.onShareClicked}/>
            <IconButton iconClassName={ this.props.event.isLiked ? "fa fa-thumbs-up": " fa fa-thumbs-o-up"} onTouchTap={this.props.onLikeClicked}/>
            <IconButton iconClassName={ this.props.event.isDisLiked ? "fa fa-thumbs-down": " fa fa-thumbs-o-down"} onTouchTap={this.props.onDislikeClicked}/>

          <CardText expandable={true}>
              { this.state.event.description }
          </CardText>
        </Card>
      </li>
    );
  }
}

export default Event;
