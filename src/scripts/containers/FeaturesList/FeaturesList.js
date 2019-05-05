import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { ListGroup } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import FeaturesListItem from '../../components/FeatureListItem/FeatureListItem';

import * as actions from '../../store/actions';
import withMarker from '../../hoc/enhancers/withMarker';

const FeaturesList = (props) => {
  const [activeItem, setActiveItem] = useState(null);
  const markers = useRef([]);

  const showFeature = (id, name, lat, lng) => {
    
    if (markers.current.length && markers.current[0].id === id) {
      return false;
    }

    props.removeMarkers(markers.current);

    const marker = props.createMarker(props.map, id, lat, lng);
    const popup = props.createPopup(name, lat, lng);

    popup.open(props.map, marker);

    marker.addListener('click', () => {
      popup.open(props.map, marker);
    });

    props.showMarker(props.map, marker);

    setActiveItem(id);
    markers.current.push(marker);

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
              active={activeItem === searchListItem.id}
              clicked={() => showFeature(searchListItem.id, searchListItem.name, searchListItem.lat, searchListItem.lng)}/>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ListGroup>
  );
}

const mapStateToProps = state => {
  return {
    searchList: state.search.list,
    map: state.map.instance
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch(actions.toggleMenu()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withMarker(FeaturesList));