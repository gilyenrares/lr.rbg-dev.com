import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import { projectObjOne, projectObjTwo, projectObjThree, projectObjFour } from '../components/data/hero-projects';
import Jumbotron from '../components/sections/Jumbotron';
import { projects } from '../components/data/jumbo';

function Projects() {
  return (
    <>
      <Jumbotron {...projects} />
      <HeroSection {...projectObjOne} />
      <HeroSection {...projectObjTwo} />
      <HeroSection {...projectObjThree} />
      <HeroSection {...projectObjFour} />
    </>
  );
}

export default Projects;