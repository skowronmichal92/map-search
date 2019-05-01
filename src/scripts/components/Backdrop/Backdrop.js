import React from 'react';
import classNames from 'classnames';

const backdrop = (props) => {
  const className = 'backdrop';

  const classes = classNames({
    [className]: true,
    [`${className}--active ${className}--z-index`]: props.show,
    [`${className}--z-index`]: props.animatedClose
  });

  return (
    <div
      className={classes}
      onClick={props.clicked}>
    </div>
  );
}

export default backdrop;
