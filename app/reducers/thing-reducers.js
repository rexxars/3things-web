import { ADD_THINGS } from '../constants/action-types';

const initialState = [];

export default function thingsReducer(state = initialState, action) {
    switch (action.type) {
    case ADD_THINGS:
        const things = action.payload;
        return state.concat(Array.isArray(things) ? things : [things]);

    default:
        return state;
    }
}
