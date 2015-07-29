import React, { PropTypes } from 'react';
import groupBy from 'lodash.groupby';
import { connect } from 'react-redux';
import { getThingsSinceDate, createThing } from '../actions/thing-actions';
import DayView from './day-view';

@connect(state => ({ things: groupBy(state.things, 'date') }))
class ThingsList extends React.Component {
    static propTypes = {
        things: PropTypes.object,
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
        const dates = Object.keys(this.props.things);

        return (
            <ul className="things-list">
                {dates.map(date =>
                    <DayView
                        key={date}
                        things={this.props.things[date]}
                        date={date}
                        onSave={this.onSave}
                    />
                )}
            </ul>
        );
    }
}

export default ThingsList;
