import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';

class Todi extends Component {
    render() {
        return <article className="Todi" />;
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
