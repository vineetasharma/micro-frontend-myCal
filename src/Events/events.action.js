/**
 * Created by ttn on 01/05/17.
 */

import ApplicationActions  from  '../constants/app.actions';
import fetch from 'isomorphic-fetch'

const likeClicked = () => {
    return {
        type: ApplicationActions.Events.LikeButtonClicked,
        payload: null
    }
};

const requestInitiated = () => {
    return {
        type: ApplicationActions.Events.FetchEventsStart,
        payload: null
    };
};

const requestCompleted = (data = []) => {
    return {
        type: ApplicationActions.Events.FetchEventsSuccess,
        payload: data
    }
};

const requestFailed = (error = {}) => {
    return {
        type: ApplicationActions.Events.FetchEventsFailed,
        payload: error
    }
};


const fetchEvents = (params = {}) => {
    const url = `http://rest.learncode.academy/api/${params.userName}/friends`;
    return (dispatch) => {
        dispatch(requestInitiated(url));
        return fetch(url)
            .then(response => {
                console.log('FetchEvents#response', response);
                return response.json();
            }).
            then(data => {
                dispatch(requestCompleted(data));
                return data;
            })
            .catch(error => {
                dispatch(requestFailed(error));
                return error;
            })
    }
};

export {  likeClicked, fetchEvents};