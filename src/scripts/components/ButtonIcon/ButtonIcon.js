import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Button } from 'reactstrap';

const ButtonIcon = (props) => {
    const {color} = props;
    
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
            <span 
                className={buttonIconTextClassName}>{props.children}</span>
            <FontAwesomeIcon 
                className={buttonIconIconClassName} 
                icon={props.icon}/>
        </Button>
    );
}

export default ButtonIcon;