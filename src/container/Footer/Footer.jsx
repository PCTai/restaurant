import React from 'react';
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import './Footer.css';
import {images} from '../../constants'

const Footer = () => (
  <div className='app__footer app__swapper section__padding'>
    <div className="app__footer-contact">
      <h3 className='app__footer-contact-title'>Contact Us</h3>
      <p className='app__footer-contact-address'>9 W 53rd St, New York, NY 10019, USA</p>
      <span className='app__footer-contact-phone'>+1 212-344-1230 <br></br>
      +1 212-555-1230</span>
    </div>
    <div className="app__footer-social">
      <img className='app__footer-social-title' src={images.gericht} alt="" />
      <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
      <img src={images.spoon} alt="" />
      <div className="app__footer-social-list">
        <BsFacebook className='app__footer-social-item' /><BsTwitter className='app__footer-social-item'/><BsInstagram className='app__footer-social-item' />
      </div>
      
    </div>
    <div className="app__footer-hour">
      <h3 className='app__footer-hour-title'>Working Hours</h3>
      <p className='app__footer-hour-item'>Monday-Friday:<br/>08:00 am -12:00 am</p>
      <p className='app__footer-hour-item'>Saturday-Sunday:
      <br/>07:00am -11:00 pm</p>
    </div>
  </div>
);

export default Footer;
