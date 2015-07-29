import React from 'react';
import ReduxStore from '../redux-store';
import {
    DevTools as ReduxDevTools,
    DebugPanel,
    LogMonitor
} from 'redux-devtools/lib/react';

const isDev = process.env.NODE_ENV !== 'production';

class DevTools extends React.Component {
    render() {
        return isDev ? (
            <DebugPanel top right bottom>
                <ReduxDevTools
                    store={ReduxStore}
                    monitor={LogMonitor}
                />
            </DebugPanel>
        ) : null;
    }
}

export default DevTools;
