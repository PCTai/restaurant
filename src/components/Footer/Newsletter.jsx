import React from 'react';
import {images} from '../../constants'
import './Newsletter.css';

const NewsLetter = () => (
  <div className='app__letter section__padding'>
      <div className="app__letter-wrapper">
        <div className="app__letter-head">
          <h3>NewLetter</h3>
          <img src={images.spoon} alt="" />
          <h1>Subscribe to Our Newsletter</h1>
          <p>And never miss latest Updates!</p>

          <form method='get' className="app__letter-form">
            <input type="text"  name='email' className='input-form'/>
            <button type='submit' className='custom__button'>Subscribe</button>
          </form>
        </div>
      </div>
  </div>
);

export default NewsLetter;
