import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Backdrop from '../../components/Backdrop/Backdrop';
import FeaturesList from '../FeaturesList/FeaturesList';
import FeaturesCard from '../../components/FeaturesCard/FeaturesCard';

import * as actions from '../../store/actions';

const SideMenu = (props) => {

  const classes = classNames({
    'side-menu': true,
    'side-menu--active': props.open,
  });

  return (
    <>
      <FeaturesCard
          className={classes}
          list={props.searchList}>
        <FeaturesList/>
      </FeaturesCard>

      {props.open && (
        <Backdrop
          show={props.open}
          animatedClose={true}
          clicked={props.toggleMenu}/>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    open: state.menu.open,
    searchList: state.search.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch(actions.toggleMenu()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
