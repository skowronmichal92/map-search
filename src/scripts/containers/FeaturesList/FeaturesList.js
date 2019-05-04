import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ListGroup } from 'reactstrap';

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

  createMarker(map, lat, lng) {
    return new window.google.maps.Marker({
      position: {
          lat,
          lng
      },
      map,
    });
  }

  createPopup(name, lat, lng) {
    return new window.google.maps.InfoWindow({
      content: this.getPopupContent(name, lat, lng)
    })
  }

  showFeature = (id, name, lat, lng) => {
    this.removeMarkers();

    const marker = this.createMarker(this.props.map, lat, lng);
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
        {this.props.searchList.map((searchListItem) => (
          <FeaturesListItem 
            key={searchListItem.id}
            name={searchListItem.name}
            active={this.state.activeItem === searchListItem.id}
            clicked={() => this.showFeature(searchListItem.id, searchListItem.name, searchListItem.lat, searchListItem.lng)}/>
        ))}
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