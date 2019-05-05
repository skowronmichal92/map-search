
import React from 'react';
import logoImg from '../../../images/logo.png';

const Logo = (props) => {
  return (
    <div className="logo">
      <img className="logo__img" src={logoImg} alt="mapsearch logo"/>
    </div>
  );
}

export default Logo;