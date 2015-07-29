import React, { PropTypes } from 'react';

class ThingInput extends React.Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired
    }

    constructor() {
        super();
        this.state = { value: '' };

        this.onInput = ::this.onInput;
        this.onSubmit = ::this.onSubmit;
    }

    onInput(e) {
        this.setState({
            value: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSave(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <form className="pure-form" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="What have you learned today?"
                    name="thing"
                    value={this.state.value}
                    onInput={this.onInput}
                />
            </form>
        );
    }
}

export default ThingInput;
