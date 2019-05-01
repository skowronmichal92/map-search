import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ListGroup } from 'reactstrap';

import FeaturesListItem from '../../components/FeatureListItem/FeatureListItem';

class FeaturesList extends Component {
  showFeature = (name, lat, lng) => {
    const latlngDecimals = 4;
    
    const marker = new window.google.maps.Marker({
        position: {
            lat,
            lng
        },
        map: this.props.map,
    });

    const infowindow = new window.google.maps.InfoWindow({
        content: `
            <h4>${name}</h4>
            <p>
                <span>latitude: </span><strong>${lat.toFixed(latlngDecimals)}&deg;</strong><br>
                <span>longitude: </span><strong>${lng.toFixed(latlngDecimals)}&deg;</strong>
            </p>
        `
      });

    marker.addListener('click', () => {
        infowindow.open(this.props.map, marker);
    });
  }

  render() {
    return (
      <ListGroup className="features-list">
        {this.props.searchList.map((searchListItem) => (
          <FeaturesListItem 
            key={searchListItem.id}
            name={searchListItem.name}
            clicked={() => this.showFeature(searchListItem.name, searchListItem.lat, searchListItem.lng)}/>
        ))}
      </ListGroup>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchList: state.search.list,
    map: state.map.instance
  }
}


export default connect(mapStateToProps)(FeaturesList);