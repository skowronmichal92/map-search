import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Button } from 'reactstrap';

const ButtonIcon = (props) => {
    const color = props.color || 'default';
    
    const buttonIconClassName = classNames({
        'button-icon': true,
        [props.className]: props.className
    });

    const buttonIconTextClassName = classNames({
        'button-icon__text': true
    });

    const buttonIconIconClassName = classNames({
        'button-icon__icon': true
    });

    return (
        <Button className={buttonIconClassName} color={color} onClick={props.clicked}>
            {props.children && (
                <span 
                className={buttonIconTextClassName}>{props.children}</span>
            )}
            <FontAwesomeIcon 
                className={buttonIconIconClassName} 
                icon={props.icon}/>
        </Button>
    );
}

ButtonIcon.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    clicked: PropTypes.func,
};

export default ButtonIcon;