import React from 'react';
import { connect } from 'react-redux';

import MediaQuery from 'react-responsive';

import BadgeButton from '../../components/BadgeButton/BadgeButton'; 
import SearchBar from '../SearchBar/SearchBar'; 

import * as actions from '../../store/actions';
import { pageWidths } from '../../other/mediaQuery';

const TopBar = (props) => {

  return (
    <div className="top-bar control">

      <MediaQuery minWidth={pageWidths.sm}>
        {(matches) => !matches && (
          <BadgeButton 
            count={props.list.length}
            clicked={props.toggleMenu}/>
        )}
      </MediaQuery>

      <SearchBar/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    list: state.search.list,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch(actions.toggleMenu()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);