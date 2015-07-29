import React, { PropTypes } from 'react';
import Login from './login';

class AppLayout extends React.Component {
    static propTypes = {
        children: PropTypes.node
    }

    render() {
        return (
            <div id="layout">
                <header>
                    <h1 className="logo">3things</h1>
                </header>

                {this.props.children || <Login />}
            </div>
        );
    }
}

export default AppLayout;
