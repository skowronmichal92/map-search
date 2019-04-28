import React from 'react';
import { connect } from 'react-redux';

import AlertModal from '../../components/AlertModal/AlertModal';

import * as actions from '../../store/actions';

const Alert = (props) => {

    if (props.error) {
        return (
            <AlertModal opened={true} toggle={props.closeAlertModal}>{props.errorText}</AlertModal>
        );
    } 
    
    return null;
}

const mapStateToProps = state => {
    return {
        error: state.error.error,
        errorText: state.error.text,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      closeAlertModal: () => dispatch(actions.closeAlertModal()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Alert);