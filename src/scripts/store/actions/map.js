import * as actionTypes from './actionTypes';

export const setMapInstance = (map) => {
  return {
    type: actionTypes.SET_MAP_INSTANCE,
    payload: { map }
  }
}


