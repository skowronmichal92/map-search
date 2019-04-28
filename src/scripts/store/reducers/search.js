import * as actionTypes from '../actions/actionTypes';
import _tmpSearchResult from '../data/_tmpSearchResult.json';

const initialState = {
  result: _tmpSearchResult,
  resultId: 3083271,
  // result: null,
  // resultId: null,
  list: [],
  listMap: {},
};

const getResultId = result => result.hit.objectID;

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
    name: result.value,
    lat: result.latlng.lat,
    lng: result.latlng.lng,
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