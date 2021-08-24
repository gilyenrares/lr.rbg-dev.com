import React from "react";
import { Button } from "../../Button";
import Form from "react-bootstrap/Form";
import "../../sections/Forms.css";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isChecked: false,
            validated: false,
        };
    }
    // state = {
    //     email: "",
    //     password: "",
    //     isChecked: false,
    //     validated: false,
    // };
    handleLoginSubmit(event) {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            event.preventDefault();
        }
        this.setState({ validated: true });
    }

    handleChecked = (event) => {
        this.setState({ isChecked: event.target.checked });
    };
    render() {
        const { email, password, isChecked, validated } = this.state;
        return (
            <Form
                noValidate
                validated={validated}
                onSubmit={(event) => this.handleLoginSubmit(event)}
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
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="Remember me"
                        name="rememberMe"
                        checked={isChecked}
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
        );
    }
}
