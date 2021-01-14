import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/data/hero-services';
import Jumbotron from '../components/sections/Jumbotron';
import { services } from '../components/data/jumbo';
import Cards from '../components/sections/Cards';
import { cardServices } from '../components/data/cards-services';

function Services() {
  return (
    <>
      <Jumbotron {...services}/>
      <HeroSection {...homeObjOne} />
      <Cards cards={cardServices}/>
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Services;