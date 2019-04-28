import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

// import places from 'places';
import { Input } from 'reactstrap';

import ButtonIcon from '../../components/ButtonIcon/ButtonIcon'; 

import * as actions from '../../store/actions';

const SearchBar = (props) => {
  const searchInputRef = useRef();
  const autocomplete = useRef();
  const { getResult } = props;
  
  useEffect(() => {
    const onPlaceChanged = (e) => {
      
      getResult(e.suggestion);
    }

    // autocomplete.current = window.places({
    //   container: searchInputRef.current
    // });

    // autocomplete.current.on('change', onPlaceChanged);

  }, [getResult]);  

  const onAddResult = () => {
    const id = props.resultId;      

    if (!props.listMap[id]) {
      props.addResultToList();
    } else {
      props.openAlertModal('Place already added to list!');  
    }
  }

  return (
      <div className="search-bar control">
        <Input className="search-bar__input" type="text" innerRef={searchInputRef} placeholder="enter a location..."/>
        <ButtonIcon 
          className="search-bar__btn" 
          color="success"
          icon="plus" 
          clicked={onAddResult}>ADD</ButtonIcon>
      </div>
  );
}

const mapStateToProps = state => {
  return {
    result: state.search.result,
    resultId: state.search.resultId,
    list: state.search.list,
    listMap: state.search.listMap
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getResult: (place) => dispatch(actions.getResult(place)),
    addResultToList: () => dispatch(actions.addResultToList()),
    openAlertModal: (text) => dispatch(actions.openAlertModal(text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);