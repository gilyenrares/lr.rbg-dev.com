import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Button } from "../Button";
import { IconContext } from "react-icons/lib";
import "../sections/Forms.css";
import SignUp from "./forms/SignUp";

function SignupModal(props) {
    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <Modal {...props} size="md" aria-labelledby="signup-modal" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="signup-modal">SignUp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignUp></SignUp>
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

export default SignupModal;
