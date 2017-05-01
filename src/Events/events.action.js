/**
 * Created by ttn on 01/05/17.
 */

import ApplicationActions  from  '../constants/app.actions';

const likeClicked = (state = {}, action = {}) => {
    return {
        type: ApplicationActions.Events.LikeButtonClicked,
        payload: action.payload
    }
};

const combinedActionCreator = { likeClicked: likeClicked };
export default combinedActionCreator;