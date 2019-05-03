import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
// import * as constants from '../../other/constants';

const MapC = (props) => {
  const mapRef = useRef(null);
  const { center, zoom, setMapInstance } = props;

  const googleMapsPromise = new Promise(resolve => {
    window.googleMapsPromiseResolve = () => resolve();
  });
  
  const addGoogleMapsScript = () => {
    const script = document.createElement("script");
    // const apiParam = 'key=' + constants.API_KEY;
    const apiParam = '';

    script.src = `https://maps.googleapis.com/maps/api/js?${apiParam}&libraries=places&language=en&callback=window.googleMapsPromiseResolve`;
    script.async = true;
    document.body.appendChild(script);
  }

  useEffect(() => {
    addGoogleMapsScript();
  }, []);

  useEffect(() => {
    googleMapsPromise.then(() => {
      const map = new window.google.maps.Map(mapRef.current, {
        center, 
        zoom,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_TOP
      },
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: false
      });
  
      setMapInstance(map);
    });
  }, [center, zoom, setMapInstance, googleMapsPromise]);
  
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