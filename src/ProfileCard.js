import React from 'react';

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
