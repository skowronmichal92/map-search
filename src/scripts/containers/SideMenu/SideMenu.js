import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Backdrop from '../../components/Backdrop/Backdrop';

import * as actions from '../../store/actions';

class SideMenu extends Component {

  render() {
 
    const classes = classNames({
      'side-menu': true,
      'side-menu--active': this.props.open,
    });

    return (
      <>
        <div className={classes}>
          <div className="side-menu__header">
            <div className="side-menu__title-container">
              <span className="side-menu__title">Features List</span>
            </div>
          </div>
          <div className="side-menu__content">
            FeaturesList
          </div>
        </div>

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
    open: state.menu.open
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch(actions.toggleMenu()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
