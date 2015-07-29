import thunk from 'redux-thunk';
import * as reducers from './reducers';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { routerStateReducer } from 'redux-react-router';

let createComposedStore;
if (process.env.NODE_ENV !== 'production') {
    createComposedStore = compose(
        applyMiddleware(thunk),
        devTools(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
        createStore
    );
} else {
    createComposedStore = compose(
        applyMiddleware(thunk),
        createStore
    );
}

const reducer = combineReducers({
    router: routerStateReducer,
    ...reducers
});
const store = createComposedStore(reducer);

export default store;
