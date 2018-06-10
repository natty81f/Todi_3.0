import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todi from './Todi';
import map from 'lodash/map';

class Todis extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <section className="Todis" />;
    }
}

Todis.propTypes = {
    user: PropTypes,
    todisRef: PropTypes.object,
    todis: PropTypes.object
};

export default Todis;
