import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';
import L from 'leaflet';

import * as actions from '../../store/actions';

// show markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapC = (props) => {
  const mapRef = useRef(null);
  const { center, zoom, setMapInstance } = props;

  useEffect(() => {
    setMapInstance(mapRef.current.leafletElement);
  }, [setMapInstance])
  
  return (
    <Map id="map" className="map" ref={mapRef} center={center} zoom={zoom} zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <ZoomControl position="topright"/>
    </Map>
  );
}

const mapStateToProps = state => {
  return {
    center: state.map.view.center,
    zoom: state.map.view.zoom,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMapInstance: (map) => dispatch(actions.setMapInstance(map)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapC);