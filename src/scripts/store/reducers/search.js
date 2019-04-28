import * as actionTypes from '../actions/actionTypes';
// import _tmpSearchResult from '../data/_tmpSearchResult.json';

const initialState = {
  // result: _tmpSearchResult,
  result: null,
  errorResultInList: false,
  list: [],
  listMap: {},
};

const getResult = (state, action) => {  
  return {
    ...state,
    result: action.payload.result,
    errorResultInList: false
  }
}

const addResultToList = (state, action) => {
  const { result } = state.result;
  const { place_id } = result;  

  if (state.listMap[place_id]) {
    return {
      ...state,
      errorResultInList: true,
    }
  }
  else {
    const place = {
      id: result.place_id,
      address: result.formatted_address,
      lat: result.geometry.location.lat,
      lng: result.geometry.location.lng,
    }
    const list = state.list.concat(place);
    const listMap = {...state.listMap, [place_id]: place};

    return {
      ...state,
      errorResultInList: false,
      list,
      listMap, 
    }
  }

}

const search = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RESULT:
      return getResult(state, action);
    case actionTypes.ADD_RESULT_TO_LIST:
      return addResultToList(state, action);
    default:
      {
        return state;
      }
  }
};

export default search;