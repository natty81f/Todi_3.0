import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todi from './Todi';
import map from 'lodash/map';

class Todis extends Component {
    render() {
        const { users, todis, user } = this.props;

        return (
            <section className="Todis col-md-12 col-xs-12">
                {map(todis, (todi, key) => (
                    <Todi
                        key={key}
                        id={key}
                        {...todi}
                        user={users[todi.uid]}
                        belongsToCurrentUser={user.uid && todi.uid === user.uid}
                    />
                ))}
            </section>
        );
    }
}

Todis.propTypes = {
    user: PropTypes.object,
    users: PropTypes.object,
    todis: PropTypes.object
};

export default Todis;
