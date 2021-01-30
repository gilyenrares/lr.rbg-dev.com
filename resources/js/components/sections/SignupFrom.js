import React from 'react'
import { Container, Col, Row, FormLabel } from 'react-bootstrap'
import { IoMdCall, IoMdMail } from 'react-icons/io';
import {IoLocationSharp} from 'react-icons/io5'
import { Button } from '../Button'
import './Forms.css'
function SignupForm(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="signUpModal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="signUpModal">
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
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function SdfgignupForm() {
  return (
    <Container id='contact'>
			<form action="includes/signup.inc.php" method="post" id="signUpForm">
				 <Container>
            <FormLabel for="first_name"><b>First Name</b></FormLabel>
            <div class="input_item">
              <input type="text" name="fn"  class="login_input trans_200" placeholder="First Name" required="required"></input>
            </div>
            <label for="last_name"><b>Last Name</b></label>
            <div class="input_item">
              <input type="text" name="ln" class="login_input trans_200" placeholder="Last Name" required="required"></input>
            </div>
            <label for="address_street"><b>Street Name</b></label>
            <div class="input_item">
              <input type="address" name="strn"  class="login_input trans_200" placeholder="Street Name" required="required"></input>
            </div>
            <label for="address_city"><b>City</b></label>
            <div class="input_item">
              <input type="address" name="city"  class="login_input trans_200" placeholder="City" required="required"></input>
            </div>
            <label for="postcode"><b>Postcode</b></label>
            <div class="input_item">
              <input type="Postcode" name="pcd" class="login_input trans_200" placeholder="Postcode" required="required"></input>
            </div>
            <label for="phone_number"><b>Phone Number</b></label>
            <div class="input_item">
              <input type="number" name="phno" class="login_input trans_200" placeholder="Phone Number" required="required"></input>
            </div>
            <label for="email"><b>Email</b></label>
            <div class="input_item">
              <input type="email" name="email" class="login_input trans_200" placeholder="Email" required="required"></input>
            </div>
            <label for="password"><b>Password</b></label>
            <div class="input_item">
              <input type="password" name="pwd" class="login_input trans_200" placeholder="Password" required="required"></input>
            </div>
            <label for="repeat_password"><b>Repeat Password</b></label>
            <div class="input_item">
              <input type="password" name="pwd-repeat" class="login_input trans_200" placeholder="Repeat Password" required="required"></input>
            </div>
            <label class="box_text">
              <input type="checkbox" name="remember" required="required"> I Accept the <a href="/">Terms and Conditions</a></input>
            </label>
          </Container>
			 </form>
			<Row className='py-5'>
      <Col lg='4' className='pb-5'>
				<section className="logo d-flex flex-row align-items-center justify-content-center">
					<img src="images/logo.png" alt=""></img>
					<h2 className="ml-3 text-dark">Sign Up</h2>
				</section>	
				<p className="mt-5 d-flex flex-row justify-content-center">Contact RBG Development for any questions, requests or any type of inquiry.</p>
				<Row className="d-flex flex-row justify-content-center">
					<a href='tel:+4474 925 65888'>
						<Button buttonStyle='btn--success'><IoMdCall /> Call us </Button>
					</a>
					<a href = "mailto: gilyenrares@gmail.com">
						<Button buttonStyle='btn--danger'><IoMdMail /> Email us </Button>
					</a>
					<a href="#address">
						<Button  buttonStyle='btn--info'><IoLocationSharp /> Find Us </Button>
					</a>
				</Row>
			</Col>
			<Col lg='8'>
			<h2 className="text-dark">Contact Form</h2>
				<Container className="container">
				<form action="includes/contact.inc.php" method="post">
					<Row>
						<Col lg='6' >
						<input type="text" name="fn" className="c-input" placeholder="First Name"  required="required"></input>
						</Col>
						<Col lg='6'>
						<input type="text" name="ln" className="c-input " placeholder="Last Name"  required="required"></input>
						</Col>
					</Row>
					<input type="email" name="email" className="c-input " placeholder="E-mail" required="required"></input>
					<textarea type="text" name="message" className="c-input c-textarea" placeholder="Message" required="required"></textarea>
					<Button buttonSize='btn--wide' buttonStyle='btn--success' type="submit" name="contact-submit">Send</Button>
					</form>
					</Container>
			</Col>
			</Row>	
    </Container>
  )
}

export default SignupForm
