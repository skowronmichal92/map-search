import * as actionTypes from './actionTypes';

export const resetResult = (result) => {
  return {
    type: actionTypes.RESET_RESULT
  }
}

export const getResult = (result) => {
  return {
    type: actionTypes.GET_RESULT,
    payload: { result }
  }
}

export const setActiveItem = (activeItem) => {
  return {
    type: actionTypes.SET_ACTIVE_ITEM,
    payload: { activeItem }
  }
}

export const addResultToList = () => {
  return {
    type: actionTypes.ADD_RESULT_TO_LIST,
  }
}

