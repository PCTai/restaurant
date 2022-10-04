import React from 'react';
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div id='home' className='app__header section__padding '>
    <div className="app__header-wrapper">
      <div className='app__header-content'>
        <div className="app__header-content-top">
          <h5 className='app__header-content-trend' >Chase the new Flavour</h5>
          <img src={images.spoon} alt="" />
        </div>
        <div className="app__header-content-middle">
          <h1 className='app__header-content-title' >The key to Fine dining</h1>
          <p className='app__header-content-desc'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        </div>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className="app__header-media">
        <img src={images.welcome} alt="" />
      </div>
    </div>
  </div>
);

export default Header;
