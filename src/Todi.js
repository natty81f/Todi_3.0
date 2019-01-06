import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Todi extends Component {
    render() {
        if (this.props.user === undefined) {
            return <div>Loading...</div>;
        }

        const { name, timeStamp, user, emojis, belongsToCurrentUser } = this.props;
        const createdAt = new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        }).format(timeStamp);

        return (
            <article
                className={classNames('Todi', { 'current-user': belongsToCurrentUser })}
            >
                <div className="user--meta">
                    <div className="row">
                        <div className="col-xs-7 col-md-6">
                            <img
                                src={user.photoURL}
                                className="user--photo"
                                alt={user.displayName}
                            />
                            <div className="details">
                                <span className="user--name">{user.displayName}</span>
                                <br />
                                <span className="user--createdAt">{createdAt}</span>
                            </div>
                        </div>
                        <div className="col-xs-5 col-md-6">
                            <div className="emoji">
                                <img src={`/${emojis}.svg`} alt={emojis} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">{name}</div>
            </article>
        );
    }
}

Todi.propTypes = {
    belongsToCurrentUser: PropTypes.bool,
    name: PropTypes.string,
    timeStamp: PropTypes.number,
    emojis: PropTypes.string,
    user: PropTypes.object
};

export default Todi;
