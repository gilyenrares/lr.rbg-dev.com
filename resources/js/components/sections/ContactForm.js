import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { IoMdCall, IoMdMail } from 'react-icons/io';
import {IoLocationSharp} from 'react-icons/io5'
import { Button } from '../Button'
import './ContactForm.css'

function ContactForm() {
  return (
    <Container id='contact'>
			<Row className='py-5'>
      <Col lg='4' className='pb-5'>
				<section className="logo d-flex flex-row align-items-center justify-content-start">
					<img src="images/logo.png" alt=""></img>
					<h2 className="text-dark">RGB-Dev</h2>
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

export default ContactForm
