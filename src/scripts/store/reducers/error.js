import * as actionTypes from '../actions/actionTypes';

const initialState = {
  error: false,
  text: null
};

const openAlertModal = (state, action) => {  
  const { text } = action.payload;

  return {
    ...state,
    error: true,
    text,
  };
}

const closeAlertModal = (state, action) => {  
    return {
    ...state,
    error: false,
    text: null,
  };
}


const error = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_ALERT_MODAL:
      return openAlertModal(state, action);
    case actionTypes.CLOSE_ALERT_MODAL:
      return closeAlertModal(state, action);
    default:
      return state;
  }
};

export default error;