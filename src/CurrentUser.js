import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { auth } from './firebase';

const CurrentUser = ({ user }) => {
    return (
        <div className="CurrentUser">
            <div className="user--identification">
                <ul>
                    <li>
                        <img
                            src={user.photoURL}
                            class="user--photo"
                            alt={user.displayName}
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
            </div>
        </div>
    );
};

CurrentUser.propTypes = {
    user: shape({
        displayName: PropTypes.string,
        photoURL: PropTypes.string,
        uid: PropTypes.string.isRequired
    })
};

export default CurrentUser;
