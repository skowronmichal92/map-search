import React from 'react';

import FeaturesList from '../FeaturesList/FeaturesList'; 

const Menu = (props) => {   
  return (
    <div className="menu">
      <div className="menu__header">
        <div className="menu__title-container">
          <span className="menu__title">Features List</span>
        </div>
      </div>
      <div className="menu__content">
        <FeaturesList/>
      </div>
    </div>
  );
}

export default Menu;
