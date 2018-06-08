import React, { Component, PropTypes } from 'react';

class NewTodi extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
        };

        this.handleSubmit = this.handleSubmit.bind();
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        const { name } = this.state;

        return (
            <form className="NewTodi">
                <input
                    type="text"
                    value={name}
                    placeholder="Spill your heart out..."
                    onChange={event => this.setState({ name: event.target.value })}
                />
                <button onClick={this.handleSubmit} disabled={!name}>
                    Submit
                </button>
            </form>
        );
    }
}

NewTodi.propTypes = {
    todisRef: PropTypes.object
};

export default NewTodi;
