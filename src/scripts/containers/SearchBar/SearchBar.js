import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ButtonIcon from '../../components/ButtonIcon/ButtonIcon'; 

import * as actions from '../../store/actions';

const SearchBar = (props) => {
  const searchInputRef = useRef();
  const autocomplete = useRef();
  const { getResult } = props;
  
  useEffect(() => {
    const onPlaceChanged = (e) => {
      const place = autocomplete.current.getPlace();
      getResult(place);
    }

    autocomplete.current = new window.google.maps.places.Autocomplete(searchInputRef.current);

    autocomplete.current.setFields(['formatted_address', 'name', 'geometry', 'place_id']);
    autocomplete.current.addListener('place_changed', onPlaceChanged);

  }, [getResult]);  

  const onPlaceAdd = () => {
    if (!props.result) {
      props.openAlertModal('Select place from autocomplete search list.');
    } 
    else {
      if (!props.listMap[props.resultId]) {
        props.addResultToList();
      }
      else {
        props.openAlertModal('Place already added to list.');
      }
    }

  }

  return (
    <div className="search-bar">
      <div className="search-bar__input-wrapper">
        <FontAwesomeIcon 
            className="search-bar__input-icon" 
            icon="search-location"/>
        <Input 
          className="search-bar__input" 
          type="text" 
          innerRef={searchInputRef} 
          placeholder="search for a location..."
          onChange={props.resetResult}/>
      </div>

      <ButtonIcon 
        className="search-bar__add-btn" 
        color="success"
        icon="plus" 
        clicked={onPlaceAdd}>ADD</ButtonIcon>
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
    resetResult: () => dispatch(actions.resetResult()),
    addResultToList: () => dispatch(actions.addResultToList()),
    openAlertModal: (text) => dispatch(actions.openAlertModal(text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);