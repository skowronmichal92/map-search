import React from 'react';
import PropTypes from 'prop-types';

import { ListGroupItem } from 'reactstrap';

const FeatureListItem = (props) => {

    return (
        <ListGroupItem tag="button" action onClick={props.clicked}>{props.name}</ListGroupItem>
    );
}

FeatureListItem.propTypes = {
    name: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    clicked: PropTypes.func,
};

export default FeatureListItem;