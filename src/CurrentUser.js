import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { auth } from './firebase';

const CurrentUser = ({ user }) => {
    return (
        <div className="CurrentUser">
            <div className="user--identification">
                <ul>
                    <li>
                        <span>{user.displayName}</span>
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

                {/* <p>{user.email}</p> */}
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
