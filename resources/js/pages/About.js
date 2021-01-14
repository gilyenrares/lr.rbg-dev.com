import React from 'react'
import HeroSection from '../components/sections/HeroSection';
import { about } from '../components/data/jumbo'
import {cards} from '../components/data/cards-about'
import Cards from '../components/sections/Cards'
import Jumbotron from '../components/sections/Jumbotron'
import { aboutObjOne, aboutObjTwo } from '../components/data/hero-about';
function About() {
    return (
    <>
        <Jumbotron {...about} />
        <HeroSection {...aboutObjOne} />
        <Cards cards={cards} />
        <div className='black-slope'></div> 
        <HeroSection {...aboutObjTwo} /> 
    </> 
    )
}

export default About
