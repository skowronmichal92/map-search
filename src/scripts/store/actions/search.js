import * as actionTypes from './actionTypes';

export const getResult = (result) => {
  return {
    type: actionTypes.GET_RESULT,
    payload: { result }
  }
}

export const addResultToList = () => {
  return {
    type: actionTypes.ADD_RESULT_TO_LIST,
  }
}

