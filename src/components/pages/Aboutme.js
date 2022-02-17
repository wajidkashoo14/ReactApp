import React from 'react';
import './Aboutme.css';
import SmallCardHolder from './SmallCardHolder';
import AboutMeInfo from './AboutMeInfo';
import Square from './Square';


function Aboutme() {
  return <section className='aboutme__container'>

<div className='aboutme__container__info'>
        <SmallCardHolder />
        <AboutMeInfo />
        <div className="square__about">
        <Square />
        </div>
       
    </div>
      
  </section>;
}

export default Aboutme;
