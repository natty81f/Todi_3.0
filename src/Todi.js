import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

class Todi extends Component {
    render() {
        const { name, handleSelect } = this.props;
        return (
            <article className="Todi">
                <h3>{name}</h3>
                <button onClick={handleSelect}>I like dis</button>
            </article>
        );
    }
}

Todi.propTypes = {
    name: PropTypes.string,
    likes: PropTypes.object,
    user: PropTypes.object,
    handleSelect: PropTypes.func,
    handleDeselect: PropTypes.func
};

export default Todi;
