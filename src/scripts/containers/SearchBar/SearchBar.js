import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { Input } from 'reactstrap';

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

    autocomplete.current = new window.google.maps.places.Autocomplete(searchInputRef.current, {
      // types: ['address ']
    });

    autocomplete.current.setFields(['address_component', 'formatted_address', 'geometry', 'place_id']);
    autocomplete.current.addListener('place_changed', onPlaceChanged);

  }, [getResult]);  

  return (
      <div className="search-bar control">
        <Input className="search-bar__input" type="text" innerRef={searchInputRef} placeholder="enter a location..."/>
        <ButtonIcon 
          className="search-bar__btn" 
          color="success"
          icon="plus" 
          clicked={props.addResultToList}>ADD</ButtonIcon>
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