/**
 * Created by ttn on 01/05/17.
 */
import { createStore } from 'redux';
import allReducers from './reducers';
import enhancer from './middlewares';

const store = createStore(allReducers, enhancer);

export default store;