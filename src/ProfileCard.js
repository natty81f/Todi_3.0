import React from 'react';
import PropTypes, { shape } from 'prop-types';

const ProfileCard = ({ user }) => {
    return (
        <div className="ProfileCard">
            <div className="user--identification">
                <img
                    src={user.photoURL}
                    className="user--photo"
                    alt={user.displayName}
                    width="70px"
                />

                <div className="details">
                    <div className="displayName">{user.displayName}</div>
                    <div className="email">{user.email}</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;

ProfileCard.propTypes = {
    user: shape({
        displayName: PropTypes.string,
        photoURL: PropTypes.string,
        email: PropTypes.string,
        uid: PropTypes.string.isRequired
    })
};
