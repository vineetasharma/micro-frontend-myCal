/**
 * Created by ttn on 30/04/17.
 */

import ApplicationActions from '../constants/app.actions';

// const sampleEvents = [
//     { _id: '1', phone: '982-790-2592', date: new Date, source: 'Facebook', eventName: 'Something@facebook', organisedBy: 'Gaurav', city: 'Delhi', venue: 'Facebook HQ', description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.' },
//     { _id: '2', phone: '982-790-2592', date: new Date, source: 'Twitter', eventName: 'Something@twitter', organisedBy: 'Vibhor', city: 'Noida', venue: 'TTN',description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'  },
//     { _id: '3', phone: '982-790-2592', date: new Date, source: 'Meetup', eventName: 'Something@meetup', organisedBy: 'Vineeta', city: 'Gurgaon', venue: 'Google HQ',description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'  },
//     { _id: '4', phone: '982-790-2592', date: new Date, source: 'Facebook', eventName: 'awesomework@facebook', organisedBy: 'Sourabh', city: 'Banglore', venue: 'IBM HQ',description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'  }
// ];

export default function (state = {}, action) {
    console.log('Reducer called...', state, action);
    let _state = state;
    switch(action.type){
        case ApplicationActions.Events.LikeButtonClicked:{
            let targetEvent = _state.events.find(event => event.id == action.payload.id);
            targetEvent.isLiked = !!!targetEvent.isLiked;
            break;
        }
        case ApplicationActions.Events.DisLikeButtonClicked:{
            let targetEvent = _state.events.find(event => event.id == action.payload.id);
            targetEvent.isDisLiked = !!!targetEvent.isDisLiked;
            break;
        }
        case ApplicationActions.Events.FetchEventsStart:
            _state = { ...state, isFetchingPending: true, isFetchingSuccess: false, isFetchingFailed: false };
            break;
        case ApplicationActions.Events.FetchEventsSuccess:
            _state = { ...state, isFetchingPending: false, isFetchingSuccess: true, isFetchingFailed: false, events: action.payload};
            break;
        case ApplicationActions.Events.FetchEventsFailed:
            _state = { ...state, isFetchingPending: false, isFetchingSuccess: false, isFetchingFailed: true };
            break;
        default:
            // _state = sampleEvents;
            break;
    }
    return {
        ..._state,
        events: _state.events ? _state.events.slice(0): []      // shallow copy events.
    };
}