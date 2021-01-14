import React from 'react';
import ContactForm from '../components/sections/ContactForm'
import HeroSection from '../components/sections/HeroSection';
import { contactObjOne, contactObjTwo } from '../components/data/hero-contact';
import Jumbotron from '../components/sections/Jumbotron';
import { contact } from '../components/data/jumbo';
import MyMap from '../components/sections/MyMap';

function Contact() {
  return (
    <>
      <Jumbotron {...contact} />
      <HeroSection {...contactObjOne} />
      <ContactForm />
      <MyMap />
      <HeroSection {...contactObjTwo} />

    </>
  );
}

export default Contact;