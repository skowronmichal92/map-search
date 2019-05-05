import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ButtonIcon from '../../components/ButtonIcon/ButtonIcon'; 

import * as actions from '../../store/actions';
import withMarker from '../../hoc/enhancers/withMarker';
import usePrevious from '../../hooks/usePrevious'; 

const SearchBar = (props) => {
  const searchInputRef = useRef();
  const autocomplete = useRef();
  const marker = useRef(null);

  const { getResult, result, map, createMarker, showMarker, removeMarker } = props;

  const prevResult = usePrevious(result);

  useEffect(() => {
    const onPlaceChanged = (e) => {
      const place = autocomplete.current.getPlace();
      getResult(place);
    }

    autocomplete.current = new window.google.maps.places.Autocomplete(searchInputRef.current);

    autocomplete.current.setFields(['formatted_address', 'name', 'geometry', 'place_id']);
    autocomplete.current.addListener('place_changed', onPlaceChanged);

  }, [getResult]);
  
  useEffect(() => {

    if (marker.current) {
      removeMarker(marker.current);
    }
    
    if (result && !_.isEqual(result, prevResult)) {
      const { place_id } = result;
      const { lat, lng } = result.geometry.location;
  
      marker.current = createMarker(map, place_id, lat(), lng());
      marker.current.setOpacity(.3);
      
      showMarker(map, marker.current);
    }

  }, [prevResult, result, map, createMarker, showMarker, removeMarker]); 

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
    listMap: state.search.listMap,
    map: state.map.instance
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

export default connect(mapStateToProps, mapDispatchToProps)(withMarker(SearchBar));