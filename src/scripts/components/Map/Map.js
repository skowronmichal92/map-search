import React, { useEffect, useRef } from 'react';

const MapC = (props) => {
    const mapRef = useRef(null);

    useEffect(() => {
        const center = {lat: 50.061389, lng: 19.938333};
        const zoom = 10;

        new window.google.maps.Map(mapRef.current, {center, zoom});     
    }, []);
  
    return (
        <div id="map" className="map" ref={mapRef}></div>
    );
}

export default MapC;