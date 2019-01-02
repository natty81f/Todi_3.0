import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todi from './Todi';
import map from 'lodash/map';
import { database } from './firebase';

class Todis extends Component {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
        this.handleDeselect = this.handleDeselect.bind(this);
    }

    handleSelect(key) {
        const user = this.props.user;
        database
            .ref('/todis')
            .child(key)
            .child('likes')
            .child(user.uid)
            .set(user.displayName);
    }

    handleDeselect(key) {
        const user = this.props.user;
        database
            .ref('/todis')
            .child(key)
            .child('likes')
            .child(user.uid)
            .remove();
    }

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
                        handleSelect={() => this.handleSelect(key)}
                        handleDeselect={() => this.handleDeselect(key)}
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
    todisRef: PropTypes.object,
    todis: PropTypes.object
};

export default Todis;
