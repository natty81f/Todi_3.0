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
        const currentUser = this.props.user;
        database
            .ref('/todis')
            .child(key)
            .child('likes')
            .child(currentUser.uid)
            .set(currentUser.displayName);
    }

    handleDeselect(key) {
        const currentUser = this.props.user;
        database
            .ref('/todis')
            .child(key)
            .child('likes')
            .child(currentUser.uid)
            .remove();
    }

    render() {
        const { users, todis, author, user } = this.props;
        return (
            <section className="Todis col-md-12 col-xs-12">
                {map(todis, (todi, key) => (
                    <Todi
                        key={key}
                        id={key}
                        {...todi}
                        user={users[todi.uid]}
                        user={user}
                        handleSelect={() => this.handleSelect(key)}
                        handleDeselect={() => this.handleDeselect(key)}
                        belongsToCurrentUser={author.uid && todi.uid === author.uid}
                    />
                ))}
            </section>
        );
    }
}

Todis.propTypes = {
    user: PropTypes.object,
    todisRef: PropTypes.object,
    todis: PropTypes.object
};

export default Todis;
