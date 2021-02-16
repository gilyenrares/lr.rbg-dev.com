import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Button } from "../Button";
import { IconContext } from "react-icons/lib";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Col } from "react-bootstrap";
import "../sections/Forms.css";

function SignupModal(props) {
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
            <Modal {...props} size="md" aria-labelledby="signup-modal" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="signup-modal">SignUp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <Form.Group controlId="vfn">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                name="fn"
                                type="text"
                                placeholder="First name"
                                defaultValue=""
                                className="c-input"
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please enter your First name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="vln">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                name="ln"
                                type="text"
                                placeholder="Last name"
                                defaultValue=""
                                className="c-input"
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please enter your Last name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="vhn">
                                <Form.Label>House Number</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="numberPrepend">
                                            No:
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        required
                                        size="lg"
                                        type="number"
                                        min="0"
                                        name="hno"
                                        placeholder=""
                                        aria-describedby="numberPrepend"
                                        className="hno c-input"
                                    />
                                    <Form.Control.Feedback>
                                        Looks good.
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your house number.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="8" controlId="vsn">
                                <Form.Label>Street Name</Form.Label>
                                <Form.Control
                                    required
                                    size="lg"
                                    type="text"
                                    name="strn"
                                    placeholder="Street Name"
                                    className="c-input"
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please enter your street name.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="vc">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    required
                                    size="lg"
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className="c-input"
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="vpc">
                                <Form.Label>Postcode</Form.Label>
                                <Form.Control
                                    required
                                    size="lg"
                                    type="text"
                                    name="pcd"
                                    placeholder="Postcode"
                                    className="c-input"
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid postcode.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="vpn">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                name="phno"
                                type="tel"
                                placeholder="07123456789"
                                defaultValue=""
                                className="c-input"
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid phone number
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="ve">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                name="email"
                                type="email"
                                placeholder="Email"
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
                        <Form.Group controlId="vpw">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                name="pwd"
                                type="password"
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
                        <Form.Group controlId="vrpw">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control
                                required
                                size="lg"
                                name="pwd-repeat"
                                type="password"
                                placeholder="Repeat Password"
                                defaultValue=""
                                className="c-input"
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please repeat your password
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Row>
                            <Form.Group controlId="vcb">
                                <Form.Check
                                    required
                                    label="I Agree to the "
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                            <a className="pl-2" href="#">
                                Terms and Conditions
                            </a>
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Row>
                        <Button className="mt-5" type="submit">
                            Submit form
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

export default SignupModal;
