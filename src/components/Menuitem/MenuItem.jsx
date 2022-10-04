import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price, tag }) => (
  <div className='menu-item'>
    <div className="menu-item-head">
      <h3 className="menu-item-title">
        {title}
      </h3>
      <div className="menu-item-right">
        <div></div>
        <span>{price}</span>
      </div>
    </div>
    <p>{tag}</p>
  </div>
);

export default MenuItem;
