import React from 'react';
import { connect } from 'react-redux';

import FeaturesList from '../FeaturesList/FeaturesList'; 
import FeaturesEmpty from '../../components/FeaturesEmpty/FeaturesEmpty'; 

const Menu = (props) => {   
  

  return (
    <div className="menu">
      <div className="menu__header">
        <div className="menu__title-container">
          <span className="menu__title">Features List</span>
        </div>
      </div>
      <div className="menu__content">
        {props.searchList.length ? <FeaturesList/> : <FeaturesEmpty/>}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    searchList: state.search.list
  }
}

export default connect(mapStateToProps)(Menu);
