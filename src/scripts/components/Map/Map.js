import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

const MapC = (props) => {
    const mapRef = useRef(null);
    const { center, zoom } = props;

    useEffect(() => {
        new window.google.maps.Map(mapRef.current, {center, zoom});     
    }, [center, zoom]);
  
    return (
        <div id="map" className="map" ref={mapRef}></div>
    );
}

const mapStateToProps = state => {
    return {
      center: state.map.center,
      zoom: state.map.zoom
    }
  }

export default connect(mapStateToProps)(MapC);