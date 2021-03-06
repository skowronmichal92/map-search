import * as actionTypes from '../actions/actionTypes';

// import _tmpSearchResult from '../data/_tmpSearchResult';
// import _tmpSearchList from '../data/_tmpSearchList';

const initialState = {
  result: null,
  resultId: null,
  list: [],
  listMap: {},
  activeItem: null,
  // result: _tmpSearchResult,
  // resultId: "qwertyuiop",
  // list: _tmpSearchList,
  // listMap: {},
  // activeItem: null,
};

const getResultId = result => result.hit.objectID;

const resetResult = (state, action) => {     

  return {
    ...state,
    result: null,
    resultId: null
  }
}

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
    name: result.name,
    address: result.value,
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

const setActiveItem = (state, action) => {     
  return {
    ...state,
    activeItem: action.payload.activeItem,
  }
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_RESULT:
      return resetResult(state, action);
    case actionTypes.GET_RESULT:
      return getResult(state, action);
    case actionTypes.ADD_RESULT_TO_LIST:
      return addResultToList(state, action);
    case actionTypes.SET_ACTIVE_ITEM:
      return setActiveItem(state, action);
    default:
      return state;
  }
};

export default search;