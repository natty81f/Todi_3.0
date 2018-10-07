import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from './firebase';

class NewTodi extends Component {
    constructor(props) {
        super(props);
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
        this.setState({
            name: ''
        });
    }

    render() {
        const { name } = this.state;

        return (
            <form className="NewTodi" onSubmit={this.handleSubmit}>
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

                <button onClick={this.props.onHide} disabled={!name}>
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
