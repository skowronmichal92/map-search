// import * as actionTypes from '../actions/actionTypes';

const initialState = {
    view: {
        center: {
            lat: 50.061389, 
            lng: 19.938333
        },
        zoom: 10,
    },
    instance: null,
};

const map = (state = initialState, action) => {
  switch (action.type) {
    default: {
        return state;
    }
  }
};

export default map;
