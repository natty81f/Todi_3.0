import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewTodi from './NewTodi';
import preload from './data.json';

class Emojis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emojis: props.emojis
        };
    }

    getEmoji(title) {
        console.log(title);
        this.setState({
            emojis: title
        });
    }

    render() {
        return (
            <div className="emojis">
                {preload.emojis.map((emoji, key) => (
                    <div
                        className="show-emoji"
                        key={key}
                        onClick={this.getEmoji.bind(this, emoji.title)}
                    >
                        <img alt={`${emoji.title} Emoji`} src={`/${emoji.image}`} />
                        <h3>{emoji.title}</h3>
                    </div>
                ))}
                <NewTodi emojis={this.state.emojis} />
            </div>
        );
    }
}

Emojis.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string
};

export default Emojis;
