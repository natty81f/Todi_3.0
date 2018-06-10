import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { auth } from './firebase';

const CurrentUser = ({ user }) => {
    return (
        <div className="CurrentUser">
            <img
                src={user.photoURL}
                className="CurrentUser--photo"
                alt={user.displayName}
            />
            <div className="CurrentUser--identification">
                <h3>{user.displayName}</h3>
                <p>{user.email}</p>
                <button>Sign Out</button>
            </div>
        </div>
    );
};

CurrentUser.propTypes = {
    user: shape({
        displayName: PropTypes.string,
        email: PropTypes.string.isRequired,
        photoURL: PropTypes.string,
        uid: PropTypes.string.isRequired
    })
};

export default CurrentUser;
