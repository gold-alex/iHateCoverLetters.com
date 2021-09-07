import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import LazyHero from 'react-lazy-hero';


// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div>
      <LazyHero 
        isCentered = "true" 
        minHeight = "100vh" 
        opacity =".75" 
        transitionDuration="0"	
        parallaxOffset= '100' 
        color	= '#000000' 
        imageSrc="https://images.pexels.com/photos/5198264/pexels-photo-5198264.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">

        <h1>Welcome to iHateCoverLetters!</h1>
        <h4>
          Looking to expedite your job hunt? iHateCoverLetters has you covered!
        </h4>
        <div id = "landing-description">
          <h4>
            Input a cover letter template (or a few), and whenver you need clean, company specific cover letter PDFs generated, simply input the company names and job titles you'd like to generate and we'll do the rest.
          </h4>
          <h4>
            Get started by registering or logging in below
          </h4>
        </div>
      </LazyHero>
    </div>
  );
}

export default LandingPage;
