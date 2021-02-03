import Modal from 'react-bootstrap/Modal'
import React from 'react'
import { Button } from '../Button';
import { IconContext } from 'react-icons/lib';

function LoginModal(props) {
   return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="login-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="login-modal">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button buttonStyle='btn--danger' buttonSize='btn--small' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </IconContext.Provider>
  );
}

export default LoginModal

