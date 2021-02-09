import React from "react";
import { Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { FaUser } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../Button";
import LoginModal from "./LoginModal";
import "./Modal.css";
import SignupModal from "./SignupModal";

function AccountModal(props) {
    const [loginShow, setLoginShow] = React.useState(false);
    const [signupShow, setSignupShow] = React.useState(false);
    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <Modal {...props} size="lg" aria-labelledby="login-modal" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="login-modal">
                        <FaUser /> Account
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="mx-auto">
                    <Row className="justify-content-md-center">
                        <Button
                            buttonStyle="btn--primary"
                            buttonSize="btn--wide"
                            onClick={() => setLoginShow(true)}
                        >
                            Login
                        </Button>
                    </Row>
                    <hr />
                    <Row className="justify-content-md-center">
                        <Button
                            buttonStyle="btn--success"
                            buttonSize="btn--wide"
                            onClick={() => setSignupShow(true)}
                        >
                            SignUp
                        </Button>
                    </Row>
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
            <LoginModal show={loginShow} onHide={() => setLoginShow(false)} />
            <SignupModal
                show={signupShow}
                onHide={() => setSignupShow(false)}
            />
        </IconContext.Provider>
    );
}

export default AccountModal;
