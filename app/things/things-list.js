import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ThingInput from './thing-input';
import { getThingsSinceDate, createThing } from '../actions/thing-actions';

@connect(state => ({ things: state.things }))
class ThingsList extends React.Component {
    static propTypes = {
        things: PropTypes.array,
        dispatch: PropTypes.func
    }

    componentWillMount() {
        if (!this.props.things.length) {
            this.props.dispatch(getThingsSinceDate());
        }
    }

    onSave = (description) => {
        this.props.dispatch(createThing({
            description,
            date: (new Date()).toISOString().substr(0, 10)
        }));
    }

    render() {
        return (
            <ul className="things-list">
                {this.props.things.map(thing =>
                    <li key={thing.id}>{thing.description}</li>
                )}
                <li key="new-thing">
                    <ThingInput onSave={this.onSave} />
                </li>
            </ul>
        );
    }
}

export default ThingsList;
