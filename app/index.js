import React from 'react';
import ReactDom from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import ReduxStore from './redux-store';
import DevTools from './util/devtools';

if (typeof window !== 'undefined') {
    ReactDom.render(
        <div>
            <Provider store={ReduxStore}>
                {() => <Routes />}
            </Provider>

            <DevTools />
        </div>,
        document.getElementById('container')
    );
}

export default ReduxStore;
