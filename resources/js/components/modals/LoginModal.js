import Modal from "react-bootstrap/Modal";
import React, { useState, setState } from "react";
import { Button } from "../Button";
import { IconContext } from "react-icons/lib";
import Login from "./forms/Login";
import "../sections/Forms.css";
import { event } from "jquery";

function LoginModal(props) {
    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <Modal {...props} size="md" aria-labelledby="login-modal" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="login-modal">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Login></Login>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        buttonStyle="btn--danger"
                        buttonSize="btn--small"
                        onClick={props.onHide}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </IconContext.Provider>
    );
}
export default LoginModal;
