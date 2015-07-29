import React, { PropTypes } from 'react';
import ThingInput from './thing-input';

class DayView extends React.Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        things: PropTypes.array.isRequired,
        date: PropTypes.string.isRequired
    }

    render() {
        const { onSave, things, date } = this.props;
        return (
            <li className="day-view">
                <h3>{date.substr(0, 10)}</h3>

                <ol>
                    {things.map(thing =>
                        <li key={thing.id}>{thing.description}</li>
                    )}

                    <li key="new-thing">
                        <ThingInput onSave={onSave} />
                    </li>
                </ol>
            </li>
        );
    }
}

export default DayView;
