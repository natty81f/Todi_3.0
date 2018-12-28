import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { auth } from './firebase';

const CurrentUser = ({ author }) => {
    return (
        <div className="CurrentUser">
            <div className="user--identification">
                <ul>
                    <li>
                        <img
                            src={author.photoURL}
                            alt={author.displayName}
                            width="25px"
                        />
                    </li>
                    <li>
                        <button
                            className="btn pink_outline sm"
                            onClick={() => auth.signOut()}
                        >
                            LOG OUT
                        </button>
                    </li>
                </ul>
                {/* <span>{user.displayName}</span> */}
                {/* <p>{user.email}</p> */}
            </div>
        </div>
    );
};

CurrentUser.propTypes = {
    author: shape({
        displayName: PropTypes.string,
        email: PropTypes.string.isRequired,
        photoURL: PropTypes.string,
        uid: PropTypes.string.isRequired
    })
};

export default CurrentUser;
