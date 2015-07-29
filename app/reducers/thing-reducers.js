import { ADD_THING } from '../constants/action-types';

const initialState = [];

export default function events(state = initialState, action) {
    switch (action.type) {
    case ADD_THING:
        return state.concat([action]);

    default:
        return state;
    }
}
