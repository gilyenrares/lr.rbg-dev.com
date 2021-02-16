import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Button } from "../Button";
import { IconContext } from "react-icons/lib";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Col } from "react-bootstrap";
import "../sections/Forms.css";

function LoginModal(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <Modal {...props} size="md" aria-labelledby="login-modal" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="login-modal">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                defaultValue=""
                                className="c-input"
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                type="password"
                                name="pwd"
                                placeholder="Password"
                                defaultValue=""
                                className="c-input"
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid password
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button
                            buttonStyle="btn--success"
                            buttonSize="btn--wide"
                            type="submit"
                        >
                            Login
                        </Button>
                    </Form>
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
