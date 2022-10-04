import React from 'react';

import './AboutUs.css';
import {images} from '../../constants'

const AboutUs = () => (
  <div id='about' className='app__aboutus app__wrapper section__padding'>
    <div className="app__aboutus-image">
      <img src={images.chef} alt="" />
    </div>
    <div className="app__aboutus-content">
      <div className="app__aboutus-content-top">
        <h3>Chef’s Word</h3>
        <img src={images.spoon} alt="" />
        <h1 className='app__aboutus-content-title'>What we believe in</h1>
      </div>
      <p className='app__aboutus-content-desc'>
        <img src={images.quote} alt="" />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati enim commodi magni ipsam atque quidem voluptatibus laboriosam quo non, incidunt est inventore impedit eligendi reprehenderit quis iusto ea debitis!
      </p>
      <h3 className='app__aboutus-content-name'>Kevin Luo</h3>
      <span className='app__aboutus-content-work'>Chef & Founder</span>
      <img className='app__aboutus-content-sign' src={images.sign} alt="" />
    </div>
    
  </div>
);

export default AboutUs;
