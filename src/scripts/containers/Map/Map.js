import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

const MapC = (props) => {
  const mapRef = useRef(null);
  const { center, zoom } = props;    

  useEffect(() => {
    new window.google.maps.Map(mapRef.current, {
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
  }, [center, zoom]);
  

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

export default connect(mapStateToProps)(MapC);