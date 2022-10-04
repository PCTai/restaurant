import React from 'react';
import {images} from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__menu section__padding app__wrapper'>
    <div className="app__menu-G">
      <img src={images.G} alt="" />
    </div>
    <div className="app__menu-aboutus">
      <h1 className='app__menu-about-title'>
        About Us
      </h1>
      <img src={images.spoon} alt="" />
      <p className='app__menu-about-desc p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      <button type='button' className='custom__button'>Know more</button>
    </div>
    <div className="app__menu-knife">
      <img src={images.knife} alt="" />
    </div>
    <div className="app__menu-history">
      <h1 className='app__menu-history-title'>
        Our History
      </h1>
      <img src={images.spoon} alt="" />
      <p className='app__menu-history-desc p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      <button type='button' className='custom__button'>Know more</button>
    </div>
  </div>
);

export default SpecialMenu;
