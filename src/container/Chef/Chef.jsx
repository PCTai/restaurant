import React from 'react';
import MenuItem from '../../components/Menuitem/MenuItem';
import {images} from '../../constants';
import {data} from '../../constants';
import './Chef.css';

const Chef =function () { 
  const {wines, cocktails}= data;

  return(
  <div id='menu' className='app__chef section__padding app__wrapper'>
    <div className="app__chef-head">
      <h3 className="app__chef-head-top">
        Menu that fits you palatte
      </h3>
      <img src={images.spoon} alt="" />
      <h1 className="app__chef-head-title">
        Today’s Special
      </h1>
    </div>
    <div className="app__chef-content">
      <div className="app__chef-content-wine">
        <h1>Wine & Beer</h1>
        <div className="list-wine">
          {wines.map(wine =>(
            <MenuItem key={wine.title} title={wine.title} price={wine.price} tag={wine.tags}></MenuItem>
          )) }
        </div>
      </div>
      <div className="app__chef-content-img">
        <img src={images.menu} alt="" />
      </div>
      <div className="app__chef-content-cock">
        <h1>Cocktails</h1>
        {cocktails.map(cock =>(
            <MenuItem key={cock.title} title={cock.title} price={cock.price} tag={cock.tags}></MenuItem>
          )) }
      </div>
    </div>
    <button type='button' className='custom__button'>View more</button>
  </div>
)};

export default Chef;
