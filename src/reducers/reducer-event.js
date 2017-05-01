/**
 * Created by ttn on 30/04/17.
 */

import ApplicationActions from '../constants/app.actions';

const sampleEvents = [
    { _id: '1', phone: '982-790-2592', date: new Date, source: 'Facebook', eventName: 'Something@facebook', organisedBy: 'Gaurav', city: 'Delhi', venue: 'Facebook HQ', description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.' },
    { _id: '2', phone: '982-790-2592', date: new Date, source: 'Twitter', eventName: 'Something@twitter', organisedBy: 'Vibhor', city: 'Noida', venue: 'TTN',description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'  },
    { _id: '3', phone: '982-790-2592', date: new Date, source: 'Meetup', eventName: 'Something@meetup', organisedBy: 'Vineeta', city: 'Gurgaon', venue: 'Google HQ',description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'  },
    { _id: '4', phone: '982-790-2592', date: new Date, source: 'Facebook', eventName: 'awesomework@facebook', organisedBy: 'Sourabh', city: 'Banglore', venue: 'IBM HQ',description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'  }
];

function likeBtnReducer(state = {}, action = {}) {
    Object.keys(state).forEach(_key => {
        if(state[_key]._id == action.payload._id){
            state[_key].isLiked = !!!state[_key].isLiked;
        }
    });
    return state;
}

function disLikeBtnReducer(state = {}, action = {}) {
    Object.keys(state).forEach(_key => {
        if(state[_key]._id == action.payload._id){
            state[_key].isDisLiked = !!!state[_key].isDisLiked;
        }
    });
    return state;
}

export default function (state = null, action) {
    console.log('Reducer called...', state, action);
    let _state = { ...state };
    switch(action.type){
        case ApplicationActions.Events.LikeButtonClicked:
            _state = likeBtnReducer(_state, action);
            break;
        case ApplicationActions.Events.DisLikeButtonClicked:
            _state = disLikeBtnReducer(_state, action);
            break;
        default:
            _state = sampleEvents;
            break;
    }
    return _state;
}