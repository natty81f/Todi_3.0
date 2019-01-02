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
        console.log(this.props.user.uid);
        this.setState({
            emojis: title,
            show: true,
            uid: this.props.user.uid
        });
    }

    handleClose() {
        this.setState({ show: false });
    }

    render() {
        return (
            <div className="emojis">
                <div className="main col-md-12 col-xs-12">
                    <h2>Today I Felt</h2>
                    {preload.emojis.map((emoji, key) => (
                        <div className="col-md-4 col-xs-6" key={key}>
                            <div
                                className="show-emoji"
                                key={key}
                                onClick={this.handleOpen.bind(this, emoji.title)}
                            >
                                <img
                                    alt={`${emoji.title} Emoji`}
                                    src={`/${emoji.image}`}
                                />
                                <div className="title">{emoji.title}</div>
                            </div>
                        </div>
                    ))}

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Write your new Todi</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <NewTodi
                                emojis={this.state.emojis}
                                uid={this.props.user.uid}
                                onHide={this.handleClose}
                            />
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        );
    }
}

Emojis.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string
};

export default Emojis;
