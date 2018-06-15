import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

class Todi extends Component {
    render() {
        const { name, user, likes, handleSelect, handleDeselect } = this.props;
        const userHasLiked = likes && Object.keys(likes).includes(user.uid);
        return (
            <article className="Todi">
                <h3>{name}</h3>
                <ul>{likes && map(likes, (like, key) => <li key={key}>{like}</li>)}</ul>
                {userHasLiked ? (
                    <button onClick={handleDeselect}>Nevermind</button>
                ) : (
                    <button onClick={handleSelect}>I like dis</button>
                )}
            </article>
        );
    }
}

Todi.propTypes = {
    name: PropTypes.string,
    likes: PropTypes.object,
    user: PropTypes.object,
    handleSelect: PropTypes.func,
    handleDeselect: PropTypes.func
};

export default Todi;
