import React from 'react';
import {images} from '../../constants'
import './Laurels.css';

const Laurels = () => (
  <div id='award' className='app__laurel section__padding app__wrapper'>
    <div className="app__laurel-award">
      <h3 className='app__laurel-award-info'>Awards & recognition</h3> 
      <img className='app__laurel-award-spoon' src={images.spoon} alt="" />
      <h1 className='app__laurel-award-title'>Our Laurels</h1>
      <div className="app__laurel-award-list">
        <div className="app__laurel-award-item">
          <img src={images.award01} alt="" />
          <div className="app__laurel-award-item-content">
            <h3>Bib Gourmond</h3>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
        <div className="app__laurel-award-item">
          <img src={images.award02} alt="" />
          <div className="app__laurel-award-item-content">
            <h3>Bib Gourmond</h3>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
        <div className="app__laurel-award-item">
          <img src={images.award03} alt="" />
          <div className="app__laurel-award-item-content">
            <h3>Bib Gourmond</h3>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
        <div className="app__laurel-award-item">
          <img src={images.award05} alt="" />
          <div className="app__laurel-award-item-content">
            <h3>Bib Gourmond</h3>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="app__laurel-image">
      <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;
