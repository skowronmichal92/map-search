import React from 'react';

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
        return new window.google.maps.InfoWindow({
          content: getPopupContent(name, lat, lng)
        });
    }

    const createMarker = (map, id, lat, lng) => {
        return new window.google.maps.Marker({
            position: {
                lat,
                lng
            },
            map,
            id
        });
    }

    const showMarker = (map, marker) => {
        map.setZoom(10);
        map.panTo(marker.position);
    }

    // const removeMarkers = (markers) => {
    //     markers.forEach(marker => marker.setMap(null));
    //     markers = [];
    // }

    const removeMarker = (marker) => {
        marker.setMap(null);
        marker = null;
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