import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewTodi from './NewTodi';
import preload from './data.json';
import { Modal } from 'react-bootstrap';

class Emojis extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            emojis: props.emojis,
            show: false
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    // pass emoji title props
    handleOpen(title) {
        console.log(title);
        this.setState({
            emojis: title,
            show: true
        });
    }

    handleClose() {
        this.setState({ show: false });
    }

    render() {
        return (
            <div className="emojis">
                {preload.emojis.map((emoji, key) => (
                    <div
                        className="show-emoji"
                        key={key}
                        onClick={this.handleOpen.bind(this, emoji.title)}
                    >
                        <img alt={`${emoji.title} Emoji`} src={`/${emoji.image}`} />
                        <h3>{emoji.title}</h3>
                    </div>
                ))}

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Write your new Todi</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewTodi emojis={this.state.emojis} onHide={this.handleClose} />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

Emojis.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string
};

export default Emojis;
