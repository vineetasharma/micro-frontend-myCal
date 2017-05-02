/**
 * Created by ttn on 01/05/17.
 */
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

const logger = store => next => action => {
    next(action);
};

export default applyMiddleware(thunk, logger);