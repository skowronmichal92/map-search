import * as actionTypes from '../actions/actionTypes';

const initialState = {
    view: {
        center: {
            lat: 50.061389, 
            lng: 19.938333
        },
        zoom: 3,
    },
    instance: null,
};

const setMapInstance = (state, action) => {
  return {
    ...state,
    instance: action.payload.map 
  }
}

const map = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MAP_INSTANCE:
      return setMapInstance(state, action);
    default: {
        return state;
    }
  }
};

export default map;
