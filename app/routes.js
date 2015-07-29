import React from 'react';
import AppLayout from './app-layout';
import FourOhFour from './four-oh-four';
import ThingsList from './things/things-list';
import {Router, Route} from 'react-router';
import { reduxRouteComponent } from 'redux-react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import ReduxStore from './redux-store';

let history = new BrowserHistory();

class AppRoutes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Route component={reduxRouteComponent(ReduxStore)}>
                    <Route path="/" component={AppLayout}>
                        <Route path="things" component={ThingsList} />
                        <Route path="*" component={FourOhFour} />
                    </Route>
                </Route>
            </Router>
        );
    }
}

export default AppRoutes;
