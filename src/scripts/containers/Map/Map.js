import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import L from 'leaflet';

const MapC = (props) => {
  const mapRef = useRef(null);
  const { center, zoom } = props;    

  useEffect(() => {
    const map = L.map(mapRef.current, {
      center,
      zoom,
      zoomControl: false
    });

    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const zoomControl = L.control.zoom({
      position: 'bottomright'
    });
    
    map.addControl(zoomControl).addLayer(osm);
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