import React from 'react';
import { connect } from 'react-redux';

import FeaturesList from '../FeaturesList/FeaturesList'; 
import FeaturesCard from '../../components/FeaturesCard/FeaturesCard';  

const Menu = (props) => {   

  return (
    <FeaturesCard
        className="menu"
        list={props.searchList}>
      <FeaturesList/>
    </FeaturesCard>
  );
}

const mapStateToProps = state => {
  return {
    searchList: state.search.list
  }
}

export default connect(mapStateToProps)(Menu);
