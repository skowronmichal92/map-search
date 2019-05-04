import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import MediaQuery from 'react-responsive';
import { Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ButtonIcon from '../../components/ButtonIcon/ButtonIcon'; 

import * as actions from '../../store/actions';
import { pageWidths } from '../../other/mediaQuery';

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

  const onPlaceAdd = () => {
    if (!props.listMap[props.resultId]) {
      props.addResultToList();
    }
    else {
      props.openAlertModal('Place already added to list.');
    }
  }

  return (
      <div className="search-bar control">
        <MediaQuery minWidth={pageWidths.sm}>
          {(matches) => !matches && (
            <ButtonIcon 
            className="search-bar__menu-btn" 
            color="primary"
            icon="bars"
            clicked={props.toggleMenu}/>
          )}
        </MediaQuery>
        <div className="search-bar__input-wrapper">
          <FontAwesomeIcon 
                className="search-bar__input-icon" 
                icon="search-location"/>
          <Input className="search-bar__input" type="text" innerRef={searchInputRef} placeholder="search for a location..."/>
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
    toggleMenu: () => dispatch(actions.toggleMenu()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);