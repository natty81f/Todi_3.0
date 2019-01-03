import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Todi extends Component {
    render() {
        if (this.props.user === undefined) {
            return <div>Loading...</div>;
        }

        const { name, user, belongsToCurrentUser } = this.props;

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
            </article>
        );
    }
}

Todi.propTypes = {
    belongsToCurrentUser: PropTypes.bool,
    name: PropTypes.string,
    user: PropTypes.object
};

export default Todi;
