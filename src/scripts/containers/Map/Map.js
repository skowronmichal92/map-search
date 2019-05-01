import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

const MapC = (props) => {
  const mapRef = useRef(null);
  const { center, zoom, setMapInstance } = props;    

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center, 
      zoom,
      disableDefaultUI: true,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: true,
      rotateControl: true,
      fullscreenControl: false
    });

    setMapInstance(map);

  }, [center, zoom, setMapInstance]);
  
  return (
      <div id="map" className="map" ref={mapRef}></div>
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