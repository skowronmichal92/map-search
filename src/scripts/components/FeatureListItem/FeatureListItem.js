import React from 'react';
import PropTypes from 'prop-types';

import { ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatureListItem = (props) => { 

    return (
        <ListGroupItem 
                active={props.active}
                className="features-list__item"
                tag="button" 
                action 
                onClick={props.clicked}>
            <FontAwesomeIcon
                className="features-list__item-icon"
                icon="map-marker-alt"/>
            <span className="features-list__item-name">{props.name}</span>
            <small className="features-list__item-address">{props.address}</small>
        </ListGroupItem>
    );
}

FeatureListItem.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
    clicked: PropTypes.func,
};

export default FeatureListItem;