import * as types from '../constants/action-types';
import * as apiClient from '../api-client';

export function getThingsSinceDate(date) {
    return dispatch => {
        apiClient.getThingsSinceDate(date, dispatchResult(dispatch, addThings));
    };
}

export function createThing(thing) {
    return dispatch => {
        apiClient.createThing(thing, dispatchResult(dispatch, addThings));
    };
}

export function addThings(things) {
    return {
        type: types.ADD_THINGS,
        payload: things
    };
}

// @todo handle errors
function dispatchResult(dispatch, action) {
    return function(err, res, body) {
        dispatch(action(body));
    };
}
