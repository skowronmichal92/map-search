import React from 'react';
import L from 'leaflet';

const withMarker = WrappedComponent => (props) => {

    const getPopupContent = (name, lat, lng) => {
        const latlngDecimals = 4;
    
        return `
          <h4>${name}</h4>
          <p>
              <span>latitude: </span><strong>${lat.toFixed(latlngDecimals)}&deg;</strong><br>
              <span>longitude: </span><strong>${lng.toFixed(latlngDecimals)}&deg;</strong>
          </p>
        `
    }

    const createPopup = (name, lat, lng) => {
        return L.popup()
            .setLatLng({ lat, lng })
            .setContent(getPopupContent(name, lat, lng));
    }

    const createMarker = (map, id, lat, lng) => {
        const marker = L.marker([lat, lng]).addTo(map);
        marker.id = id;
        return marker;
    }

    const showMarker = (map, marker) => {       
        map.setZoom(10);
        map.panTo(marker.getLatLng());
    }

    // const removeMarkers = (markers) => {
    //     markers.forEach(marker => marker.setMap(null));
    //     markers = [];
    // }

    const removeMarker = (marker) => {
        marker.remove();
    }

    const newProps = {
        getPopupContent,
        createPopup,
        createMarker,
        showMarker,
        removeMarker
    }

    return (
        <WrappedComponent
            {...newProps}
            {...props}/>
    );
    
};

export default withMarker;