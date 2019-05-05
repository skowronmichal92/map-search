import React, { useState } from 'react';
import { connect } from 'react-redux';

import { ListGroup } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import FeaturesListItem from '../../components/FeatureListItem/FeatureListItem';

import * as actions from '../../store/actions';

const FeaturesList = (props) => {
  const [activeItem, setActiveItem] = useState(null);
  const [markers, setMarkers] = useState([]);

  const getPopupContent = (name, lat, lng) => {
    const latlngDecimals = 4;

    return `
      <h4>${name}</h4>
      <p>
          <span>latitude: </span><strong>${lat.toFixed(latlngDecimals)}&deg;</strong><br>
          <span>longitude: </span><strong>${lng.toFixed(latlngDecimals)}&deg;</strong>
      </p>
    `
  }

  const removeMarkers = () => {
    markers.forEach(marker => marker.setMap(null));
    setMarkers([]);
  }

  const createMarker = (map, id, lat, lng) => {
    return new window.google.maps.Marker({
      position: {
          lat,
          lng
      },
      map,
      id
    });
  }

  const createPopup = (name, lat, lng) => {
    return new window.google.maps.InfoWindow({
      content: getPopupContent(name, lat, lng)
    })
  }

  const showFeature = (id, name, lat, lng) => {

    if (markers.length && markers[0].id === id) {
      return false;
    }
    
    removeMarkers();

    const marker = createMarker(props.map, id, lat, lng);
    const popup = createPopup(name, lat, lng);

    popup.open(props.map, marker);

    marker.addListener('click', () => {
      popup.open(props.map, marker);
    });

    props.map.setZoom(10);
    props.map.panTo(marker.position);

    setActiveItem(id);
    setMarkers(markers.concat(marker));

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

export default connect(mapStateToProps, mapDispatchToProps)(FeaturesList);