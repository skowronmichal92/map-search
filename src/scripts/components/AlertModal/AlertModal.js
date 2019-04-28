import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

export default AlertModal;