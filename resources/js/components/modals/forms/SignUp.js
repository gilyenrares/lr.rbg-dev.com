import React from "react";
import { Button } from "../../Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../../sections/Forms.css";
import { event } from "jquery";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fn: "",
            ln: "",
            hn: "",
            sn: "",
            city: "",
            pc: "",
            pn: "",
            email: "",
            pw: "",
            rpw: "",
            tncChecked: false,
            validated: false,
        };
    }
    // state = {
    //     email: "",
    //     password: "",
    //     isChecked: false,
    //     validated: false,
    // };
    handleSignUpSubmit(event) {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            event.preventDefault();
        }
        this.setState({ validated: true });
    }

    handleTnC = (event) => {
        this.setState({ tncChecked: event.target.checked });
    };
    render() {
        const {
            fn,
            ln,
            hn,
            sn,
            city,
            pc,
            pn,
            email,
            pw,
            rpw,
            tncChecked,
            validated,
        } = this.state;
        return (
            <Form
                noValidate
                validated={validated}
                onSubmit={(event) => this.handleSignUpSubmit(event)}
                action="{{ route('register') }}"
            >
                <Form.Group controlId="vfn">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        size="lg"
                        name="fn"
                        type="text"
                        placeholder="First name"
                        value={fn}
                        onChange={(event) =>
                            this.setState({ fn: event.target.value })
                        }
                        className="c-input"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                        value={ln}
                        onChange={(event) =>
                            this.setState({ ln: event.target.value })
                        }
                        className="c-input"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please enter your Last name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} md="5" controlId="vhn">
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
                                name="hn"
                                placeholder="7"
                                aria-describedby="numberPrepend"
                                value={hn}
                                onChange={(event) => {
                                    this.setState({ hn: event.target.value });
                                }}
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
                    <Form.Group as={Col} md="7" controlId="vsn">
                        <Form.Label>Street Name</Form.Label>
                        <Form.Control
                            required
                            size="lg"
                            type="text"
                            name="sn"
                            placeholder="Street Name"
                            value={sn}
                            onChange={(event) => {
                                this.setState({ sn: event.target.value });
                            }}
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
                            value={city}
                            onChange={(event) => {
                                this.setState({ city: event.target.value });
                            }}
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
                            name="pc"
                            placeholder="Postcode"
                            value={pc}
                            onChange={(event) => {
                                this.setState({ pc: event.target.value });
                            }}
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
                        name="pn"
                        type="tel"
                        placeholder="07123456789"
                        value={pn}
                        onChange={(event) => {
                            this.setState({ pn: event.target.value });
                        }}
                        className="c-input"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                        value={email}
                        onChange={(event) => {
                            this.setState({ email: event.target.value });
                        }}
                        className="c-input"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="vpw">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        size="lg"
                        name="pw"
                        type="password"
                        placeholder="Password"
                        value={pw}
                        onChange={(event) => {
                            this.setState({ pw: event.target.value });
                        }}
                        className="c-input"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="vrpw">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control
                        required
                        size="lg"
                        name="rpw"
                        type="password"
                        placeholder="Repeat Password"
                        value={rpw}
                        onChange={(event) => {
                            this.setState({ rpw: event.target.value });
                        }}
                        className="c-input"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                            name="tnc"
                            checked={tncChecked}
                            onChange={this.handleTnC}
                        />
                    </Form.Group>
                    <a className="pl-2" href="#">
                        Terms and Conditions
                    </a>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Row>
                <Button className="mt-5" type="submit">
                    Submit form
                </Button>
            </Form>
        );
    }
}
