import Modal from "react-bootstrap/Modal";
import React, { useState, setState } from "react";
import { Button } from "../Button";
import { IconContext } from "react-icons/lib";
import Form from "react-bootstrap/Form";
import "../sections/Forms.css";
import { event } from "jquery";

export default class LoginModal extends React.Component {
    state = {
        email: "",
        password: "",
        isChecked: false,
        validated: false,
    };
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            email: "",
            password: "",
            isChecked: false,
            validated: false,
            show: false,
        };
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleFormSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    handleChecked() {
        this.setState({ isChecked: !this.state.isChecked });
    }
    render() {
        const {
            email,
            password,
            isChecked,
            validated,
            onHide,
            show,
        } = this.state;
        return (
            <IconContext.Provider value={{ color: "#fff" }}>
                {/* <Button
                    buttonStyle="btn--primary"
                    buttonSize="btn--wide"
                    onClick={this.handleShow}
                >
                    Login
                </Button> */}
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    size="md"
                    aria-labelledby="login-modal"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="login-modal">Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form
                            noValidate
                            validated={validated}
                            onSubmit={this.handleFormSubmit}
                            action="{{ route('login') }}"
                        >
                            <Form.Group controlId="validationCustom01">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    size="lg"
                                    type="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(event) =>
                                        this.setState({
                                            email: event.target.value,
                                        })
                                    }
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
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(event) =>
                                        this.setState({
                                            password: event.target.value,
                                        })
                                    }
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
                                <Form.Check
                                    type="checkbox"
                                    label="Remember me"
                                    name="rememberMe"
                                    value={isChecked}
                                    onChange={this.handleChecked}
                                />
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
                            onClick={this.handleClose}
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </IconContext.Provider>
        );
    }
}
