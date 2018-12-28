import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import map from 'lodash/map';

class Todi extends Component {
    render() {
        const {
            name,
            user,
            likes,
            handleSelect,
            handleDeselect,
            belongsToCurrentUser
        } = this.props;
        const userHasLiked = likes && Object.keys(likes).includes(user.uid);
        return (
            <article
                className={classNames('Todi', { 'current-user': belongsToCurrentUser })}
            >
                <div className="user--meta">
                    <img
                        src={user.photoURL}
                        className="user--photo"
                        alt={user.displayName}
                    />
                    <span className="user--name">{user.displayName}</span>
                </div>
                <p>{name}</p>
                <ul>{likes && map(likes, (like, key) => <li key={key}>{like}</li>)}</ul>
                {userHasLiked ? (
                    <button className="solid" onClick={handleDeselect} />
                ) : (
                    <button onClick={handleSelect} />
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
