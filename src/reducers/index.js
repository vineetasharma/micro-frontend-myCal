/**
 * Created by ttn on 30/04/17.
 */
import { combineReducers } from 'redux';
import EventReducer from './reducer-event';

const allReducers = combineReducers({
    events: EventReducer
});

export default allReducers;