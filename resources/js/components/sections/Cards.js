import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from '../Button';
import './Cards.css'
// import {cards} from '../data/cards-about'

function Cards(props) {
  const cards= props.cards
  return (
    <Container>
      <Row >
        {cards.map((card,index)=>{
          return (
            <Card key={card.id} {...card}></Card>
          );
        })}
      </Row>
    </Container>
  )
}

const Card =({title,img,p1,p2,p3,url}) => {
  return(
    <Col className='card--custom py-3'>
      <section className='card d-flex flex-column align-items-center justify-content-center'>
        <h3 className='card-title'>{title}</h3>
        <div className='card-icon'>
          <img src={img} alt={title+" badge"} />
        </div>
        <article className='card-text my-auto'>
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
        </article>
        <a href={url} target='_blank' rel='noreferrer'>
          <Button
          buttonStyle='btn--info'
          buttonSize='btn--large'
          >
            Find out more
          </Button>
        </a>
      </section>
    </Col>
  );
}

export default Cards
