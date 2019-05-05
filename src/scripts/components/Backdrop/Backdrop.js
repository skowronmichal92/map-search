import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

const Backdrop = (props) => {
  const className = 'backdrop';

  const classes = classNames({
    [className]: true,
    [`${className}--active`]: props.show,
    [`${className}--z-index`]: props.animatedClose
  });

  return (
    <div
      className={classes}
      onClick={props.clicked}>
    </div>
  );
}

Backdrop.propTypes = {
  show: PropTypes.bool,
  animatedClose: PropTypes.bool,
  clicked: PropTypes.func,
};

export default Backdrop;
