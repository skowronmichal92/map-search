import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ListGroup } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import FeaturesListItem from '../../components/FeatureListItem/FeatureListItem';

import * as actions from '../../store/actions';

class FeaturesList extends Component {
  state = {
    activeItem: null,
    markers: []
  }

  getPopupContent(name, lat, lng) {
    const latlngDecimals = 4;

    return `
      <h4>${name}</h4>
      <p>
          <span>latitude: </span><strong>${lat.toFixed(latlngDecimals)}&deg;</strong><br>
          <span>longitude: </span><strong>${lng.toFixed(latlngDecimals)}&deg;</strong>
      </p>
    `
  }

  removeMarkers() {
    this.state.markers.forEach(marker => marker.setMap(null));

    this.setState({
      markers: []
    });
  }

  createMarker(map, id, lat, lng) {
    return new window.google.maps.Marker({
      position: {
          lat,
          lng
      },
      map,
      id
    });
  }

  createPopup(name, lat, lng) {
    return new window.google.maps.InfoWindow({
      content: this.getPopupContent(name, lat, lng)
    })
  }

  showFeature = (id, name, lat, lng) => {
    const { markers } = this.state;

    if (markers.length && markers[0].id === id) {
      return false;
    }
    
    this.removeMarkers();

    const marker = this.createMarker(this.props.map, id, lat, lng);
    const popup = this.createPopup(name, lat, lng);

    popup.open(this.props.map, marker);

    marker.addListener('click', () => {
      popup.open(this.props.map, marker);
    });

    this.props.map.setZoom(10);
    this.props.map.panTo(marker.position);

    this.setState(state => ({
      activeItem: id,
      markers: state.markers.concat(marker)
    }));

    this.props.toggleMenu();
  }

  render() {
    
    return (
      <ListGroup className="features-list">
        <TransitionGroup component={null}>
          {this.props.searchList.map((searchListItem) => (
            <CSSTransition
                key={searchListItem.id}
                timeout={200}>
              <FeaturesListItem 
                name={searchListItem.name}
                active={this.state.activeItem === searchListItem.id}
                clicked={() => this.showFeature(searchListItem.id, searchListItem.name, searchListItem.lat, searchListItem.lng)}/>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    )
  }
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