import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from './firebase';
import Alert from 'react-s-alert';

class NewTodi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            emojis: props.emojis,
            uid: props.uid
        };
        this.todisRef = database.ref('/todis');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.todisRef.push({
            name: this.state.name,
            emojis: this.props.emojis,
            uid: this.props.uid,
            timeStamp: Date.now()
        });
        this.setState({
            name: ''
        });

        setTimeout(() => {
            Alert.info('Your Todi has been saved!', {
                position: 'top',
                effect: 'stackslide',
                timeout: 5000
                // offset: 100
            });
        }, 1000);
    }

    render() {
        const { name } = this.state;

        return (
            <form className="NewTodi" onSubmit={this.handleSubmit}>
                <input
                    className="form_input new_todi_input"
                    type="text"
                    value={name}
                    placeholder="Spill your heart out..."
                    onChange={event =>
                        this.setState({
                            name: event.target.value
                        })
                    }
                />

                <button
                    className="form_button"
                    onClick={this.props.onHide}
                    disabled={!name.length}
                >
                    SUBMIT
                </button>
            </form>
        );
    }
}

NewTodi.propTypes = {
    todisRef: PropTypes.object,
    user: PropTypes.object,
    handleSubmit: PropTypes.func
};

export default NewTodi;
