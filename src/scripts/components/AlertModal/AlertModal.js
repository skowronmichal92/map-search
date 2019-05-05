import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import PropTypes from 'prop-types';

const AlertModal = (props) => {

  return (
    <Modal centered isOpen={props.opened} toggle={props.toggle} className={props.className}>
        <ModalHeader toggle={props.toggle}>Error</ModalHeader>
        <ModalBody>
            {props.children}
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
        </ModalFooter>
    </Modal>
  );
}

AlertModal.propTypes = {
  opened: PropTypes.bool,
  toggle: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default AlertModal;