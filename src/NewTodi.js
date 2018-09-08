import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from './firebase';

class NewTodi extends Component {
    constructor(props) {
        super();
        this.state = {
            name: '',
            emojis: props.emojis
        };
        this.todisRef = database.ref('/todis');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.todisRef.push({ name: this.state.name, emojis: this.props.emojis });
    }

    render() {
        const { name } = this.state;

        return (
            <form className="NewTodi">
                <input
                    type="text"
                    value={name}
                    placeholder="Spill your heart out..."
                    onChange={event =>
                        this.setState({
                            name: event.target.value
                        })
                    }
                />

                {/* <input type="hidden" value={this.state.emojis} /> */}
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
