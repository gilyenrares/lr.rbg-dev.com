import React from 'react';
import './HeroSection.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

function HeroSection({
  hasTop,
  hasBottom,
  lightBg,
  topLine,
  headline,
  description,
  buttonLink,
  buttonLabel,
  buttonStyle,
  img,
  alt,
  imgStart
}) {
  return (
    <> 
    {hasTop ? <div className={lightBg ? 'white-slope' : 'black-slope' }></div> : null}
      <Container fluid className={lightBg ? 'hero' : 'hero darkBg'}>
        <Container>
          <Row className='align-items-center'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
            >
            <Col className='col-md-6'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightBg ? 'heading dark' : 'heading'}>
                  {headline}
                </h1>
                <section className={lightBg? 'hero-desc dark' : 'hero-desc' }>
                  <p>{description.p1}</p>
                  <p>{description.p2}</p>
                  <p>{description.p3}</p>
                </section>
                <Link to={buttonLink}>
                  <Button buttonStyle={buttonStyle} buttonSize='btn--large'>
                    {buttonLabel}
                  </Button>
                </Link>
            </Col>
            <Col className='col-md-6'>
              <img src={img} alt={alt} className='hero-img' />
            </Col>
          </Row>
        </Container>
      </Container>
      {hasBottom ? <div className={lightBg ? 'black-slope' : 'white-slope' }></div> : null}
    </>
  );
}

export default HeroSection;