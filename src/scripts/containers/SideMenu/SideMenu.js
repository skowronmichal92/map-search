import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Backdrop from '../../components/Backdrop/Backdrop';
import FeaturesList from '../FeaturesList/FeaturesList';
import FeaturesCard from '../../components/FeaturesCard/FeaturesCard';

import * as actions from '../../store/actions';

class SideMenu extends Component {

  render() {
 
    const classes = classNames({
      'side-menu': true,
      'side-menu--active': this.props.open,
    });

    return (
      <>
        <FeaturesCard
           className={classes}
           list={this.props.searchList}>
          <FeaturesList/>
        </FeaturesCard>

        {this.props.open && (
          <Backdrop
            show={this.props.open}
            animatedClose={true}
            clicked={this.props.toggleMenu}/>
        )}
      </>
    );
  }
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
