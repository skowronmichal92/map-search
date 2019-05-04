
import React from 'react';
import PropTypes from 'prop-types';

import { Badge, Card, CardHeader, CardBody, CardText } from 'reactstrap';

import FeaturesEmpty from '../FeaturesEmpty/FeaturesEmpty'; 

const FeaturesCard = (props) => {
  return (
    <Card className={props.className}>
      <CardHeader>
        <span className="card-header-text">Features List</span>
        <Badge color="secondary">{props.list.length}</Badge>
      </CardHeader>
      <CardBody>
        <CardText>
          {props.list.length ? props.children : <FeaturesEmpty/>}
        </CardText>
      </CardBody>
    </Card>
  );
}

FeaturesCard.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
};

export default FeaturesCard;