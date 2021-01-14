import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { Navbar, Col, Container, Row } from 'react-bootstrap';

function Footer() {
  return (
  <>
    <div className='top-slope'></div>
    <Container fluid className='footer-container'>
      <Col className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </Col>
      <Row className='footer-links'>
        <Col className='footer-link-items d-flex align-items-center'>
          <h2>About Us</h2>
          <Link to='/sign-up'>How it works</Link>
          <Link to='/'>Testimonials</Link>
          <Link to='/'>Careers</Link>
          <Link to='/'>Investors</Link>
          <Link to='/'>Terms of Service</Link> 
        </Col>
        <Col className='footer-link-items d-flex align-items-center'>
          <h2>Contact Us</h2>
          <Link to='/'>Contact</Link>
          <Link to='/'>Support</Link>
          <Link to='/'>Destinations</Link>
          <Link to='/'>Sponsorships</Link>
        </Col>
        <Col  className='footer-link-items d-flex align-items-center'>
          <h2>Videos</h2>
          <Link to='/'>Submit Video</Link>
          <Link to='/'>Ambassadors</Link>
          <Link to='/'>Agency</Link>
          <Link to='/'>Influencer</Link>
        </Col>
        <Col className='footer-link-items d-flex align-items-center'>
          <h2>Social Media</h2>
          <Link to='/'>Instagram</Link>
          <Link to='/'>Facebook</Link>
          <Link to='/'>Youtube</Link>
          <Link to='/'>Twitter</Link>
        </Col>
      </Row>
    </Container>
    <Container fluid className='footer row m-0 d-flex align-items-center'>
      <Navbar.Brand href="/" className='col mx-5 text-center' >
        <img
          alt="infinity logo"
          src="../images/logo.png"
          className="d-inline-block align-top navbar-icon"
        />
        RBG-DEV
      </Navbar.Brand>
      <div className="copyright col mx-5 text-center">
        Copyright © 
        <img src="images/logo.png" 
          height="19" 
          width="38" 
          alt=""
        /> RBG-Development 2019 - 2021
      </div>
      <div className='social-icons col mx-5'>
        <Link 
          className='social-icon-link'
          to='/'
          target='_blank'
          aria-label='Facebook'
        >
          <FaFacebook />
        </Link>
        <Link
          className='social-icon-link'
          to='/'
          target='_blank'
          aria-label='Instagram'
        >
          <FaInstagram />
        </Link>
        <Link
          className='social-icon-link'
          to={
            '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
          }
          target='_blank'
          aria-label='Youtube'
        >
          <FaYoutube />
        </Link>
        <Link
          className='social-icon-link'
          to='/'
          target='_blank'
          aria-label='Twitter'
        >
          <FaTwitter />
        </Link>
        <Link
          className='social-icon-link'
          to='/'
          target='_blank'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </Link>
      </div>
    </Container>
  </>
  );
}

export default Footer;