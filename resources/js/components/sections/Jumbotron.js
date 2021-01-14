import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import './Jumbotron.css'

function Jumbotron({
    location,
    title,
    subtitle,
    url,
    button,
    btnStyle,
}) {
    return (
        <Container fluid className='p-0'>
            <div className={location}>
                <section className='d-flex flex-column align-items-center text-center banner'>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    {url===''? (
                        null
                      ):(
                        <Link to={url}>
                        <Button buttonSize='btn--wide' buttonStyle={btnStyle}>{button}</Button>
                      </Link>
                      )
                    }
                    
                </section>
            </div>
            <div className='trans-slope'></div>
        </Container>
    )
}

export default Jumbotron
