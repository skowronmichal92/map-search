
import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardBody } from 'reactstrap';

import FeaturesEmpty from '../FeaturesEmpty/FeaturesEmpty'; 
import BadgeCount from '../BadgeCount/BadgeCount'; 

const FeaturesCard = (props) => {  

  return (
    <Card className={props.className}>
      <CardHeader>
        <span className="card-header-text">Features List</span>
        <BadgeCount count={props.list.length}/>
      </CardHeader>
      <CardBody>
        {props.list.length ? props.children : <FeaturesEmpty/>}
      </CardBody>
    </Card>
  );
}

FeaturesCard.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
};

export default FeaturesCard;