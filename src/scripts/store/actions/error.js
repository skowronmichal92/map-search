import * as actionTypes from './actionTypes';

export const openAlertModal = (text) => {
  return {
    type: actionTypes.OPEN_ALERT_MODAL,
    payload: { text }
  }
}

export const closeAlertModal = () => {
  return {
    type: actionTypes.CLOSE_ALERT_MODAL,
  }
}

