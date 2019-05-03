import * as actionTypes from '../actions/actionTypes';

const initialState = {
  open: false,
};

const toggleMenu = (state, action) => {   
  return {
    ...state,
    open: !state.open
  }
}

const menu = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MENU:
      return toggleMenu(state, action);
    default:
      return state;
  }
};

export default menu;