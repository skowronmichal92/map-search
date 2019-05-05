
import React from 'react';
import PropTypes from 'prop-types';

import ButtonIcon from '../ButtonIcon/ButtonIcon'; 
import BadgeCount from '../BadgeCount/BadgeCount'; 

const BadgeButton = (props) => {
  const color = props.color || 'primary';
  const icon = props.icon || 'bars';
  console.log(props);
  

  return (
    <div className="badge-button__wrapper">
      <ButtonIcon 
        className="badge-button__btn" 
        color={color}
        icon={icon}
        clicked={props.clicked}/>
      <BadgeCount className="badge-button__icon" count={props.count}/>
    </div>
  );
}

BadgeButton.propTypes = {
  clicked: PropTypes.func,
  count: PropTypes.number,
  color: PropTypes.string,
  icon: PropTypes.string,
};

export default BadgeButton;