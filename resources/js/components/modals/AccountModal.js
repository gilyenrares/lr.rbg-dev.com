import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { Button } from '../Button';
import './Modal.css';

function AccountModal(props) {
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Modal
        {...props}
        size="md"
        aria-labelledby="login-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title  id="login-modal">
            <FaUser /> Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='mx-auto flex-row justify-content-md-center'>
          <Button className='mx-auto' buttonStyle='btn--primary' buttonSize='btn--wide' >Login</Button>
          <hr/>
          <Button className='mx-auto' buttonStyle='btn--success' buttonSize='btn--wide' >SignUp</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button buttonStyle='btn--danger' buttonSize='btn--small' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </IconContext.Provider>
  )
}

export default AccountModal

