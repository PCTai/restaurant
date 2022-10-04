import React from 'react';
import "./FindUs.css"
import { images} from '../../constants'
const FindUs = () => (
  <div id='contact' className='app__findus app__wrapper section__padding'>
    <div className="app__findus-contact">
      <div className="app__findus-contact-head">
        <h3>Contact</h3>
        <img src={images.spoon} alt="" />
        <h1 className='app__findus-title'>Find Us</h1>
        <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      </div>
      <div className="app__findus-contact-hours">
        <h3>Opening Hours</h3>
        <p>Mon - Fri: 10:00 am - 02:00 am</p>
        <p>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type='button' className='custom__button'>Visit Us</button>
    </div>
    <div className="app__findus-image">
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
