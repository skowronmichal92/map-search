import React from 'react';
import { connect } from 'react-redux';

import classNames from 'classnames';
import { Transition } from 'react-transition-group';

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

      <Transition in={props.open} timeout={400}>
        {state => {
          const show = state === 'entering' ? false : props.open;
          return (state !== 'exited') ? (
            <Backdrop
              show={show}
              animatedClose={true}
              clicked={props.toggleMenu}/>
            ) : null;
        }}
      </Transition>

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
