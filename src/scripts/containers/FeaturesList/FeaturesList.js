import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { ListGroup } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import FeaturesListItem from '../../components/FeatureListItem/FeatureListItem';

import * as actions from '../../store/actions';
import withMarker from '../../hoc/enhancers/withMarker';

const FeaturesList = (props) => {
  const marker = useRef(null);

  const showFeature = (id, name, lat, lng) => {
    
    if (marker.current && marker.current.id === id) {
      return false;
    }

    if (marker.current) {
      props.removeMarker(marker.current);
    }
    
    const featureMarker = props.createMarker(props.map, id, lat, lng);
    const popup = props.createPopup(name, lat, lng);

    popup.open(props.map, featureMarker);

    featureMarker.addListener('click', () => {
      popup.open(props.map, featureMarker);
    });

    props.showMarker(props.map, featureMarker);

    props.setActiveItem(id);
    marker.current = featureMarker;

    props.toggleMenu();
  }
  
  return (
    <ListGroup className="features-list">
      <TransitionGroup component={null}>
        {props.searchList.map((searchListItem) => (
          <CSSTransition
              key={searchListItem.id}
              timeout={200}>
            <FeaturesListItem 
              name={searchListItem.name}
              address={searchListItem.address}
              active={props.searchActiveItem === searchListItem.id}
              clicked={() => showFeature(searchListItem.id, searchListItem.name, searchListItem.lat, searchListItem.lng)}/>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ListGroup>
  );
}

const mapStateToProps = state => {
  return {
    searchActiveItem: state.search.activeItem,
    searchList: state.search.list,
    map: state.map.instance
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch(actions.toggleMenu()),
    setActiveItem: (activeItem) => dispatch(actions.setActiveItem(activeItem)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withMarker(FeaturesList));