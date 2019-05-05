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
            {props.name}
        </ListGroupItem>
    );
}

FeatureListItem.propTypes = {
    name: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    clicked: PropTypes.func,
};

export default FeatureListItem;