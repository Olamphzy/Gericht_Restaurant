import React from 'react';

import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__about app__bg flex__center section__padding' id='about'>
    <div className="app__about-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__about-content flex__center">
      <div className="app__about-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className="p__opensans">We provide you with of ever resisting taste and flavour, taking much consideration of your taste and desires we carve it into a beautifully made-meal of your choice.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className="app__about-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="app__about-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className="p__opensans">We provide you with of ever resisting taste and flavour, taking much consideration of your taste and desires we carve it into a beautifully made-meal of your choice.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
