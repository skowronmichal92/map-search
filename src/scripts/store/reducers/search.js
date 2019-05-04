import * as actionTypes from '../actions/actionTypes';

import _tmpSearchResult from '../data/_tmpSearchResult';
import _tmpSearchList from '../data/_tmpSearchList';

const initialState = {
  result: _tmpSearchResult,
  // result: null,
  resultId: null,
  list: [],
  // list: _tmpSearchList,
  listMap: {},
};

const getResultId = result => result.place_id;

const getResult = (state, action) => {  
  const { result } = action.payload;
  const id = getResultId(result);    

  return {
    ...state,
    result,
    resultId: id
  }
}

const addResultToList = (state, action) => {
  const { result } = state;
  const id = getResultId(result);    

  const place = {
    id,
    name: result.formatted_address,
    lat: result.geometry.location.lat(),
    lng: result.geometry.location.lng(),
  }
  const list = state.list.concat(place);
  const listMap = {...state.listMap, [id]: place};

  return {
    ...state,
    list,
    listMap, 
  }

}

const search = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RESULT:
      return getResult(state, action);
    case actionTypes.ADD_RESULT_TO_LIST:
      return addResultToList(state, action);
    default:
      return state;
  }
};

export default search;