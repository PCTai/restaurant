import React, { useRef } from 'react';
import {images} from '../../constants'
import './Gallery.css';
import {GrFormPreviousLink,GrFormNextLink} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
const Gallery = () => {   
  const slideRef= useRef();
  const scroll= (direction)=>{
    // slideRef.current.translateX(-300);
    if(direction=== "left"){
      slideRef.current.scrollLeft -=320;
    }
    else{
      slideRef.current.scrollLeft +=320;
    }
  }
  return(
  <div className='app__gallery '>
  <div className="app__gallery-content">
    <h3>Instagram</h3>
    <img src={images.spoon} alt="" />
    <h1 className='app__gallery-title'>Photo Gallery</h1>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>

    <button type='button' className='custom__button'>View more</button>
  </div>
  <div className="app__gallery-slide">
    <div className="app__gallery-slide-prev" onClick={() => scroll('left')}>
      <GrFormPreviousLink color='#222' fontSize={30}/>
    </div>
    <div className="app__gallery-slide-next" onClick={() => scroll('right')}>
      <GrFormNextLink  fontSize={30}/>
    </div>
    <div 
      ref={slideRef}
      className="app__gallery-slide-list"
    >
      <div className="app__gallery-card">
        <img src={images.gallery01} alt="" />
        <BsInstagram className='instagram' color='#fff' fontSize={20}></BsInstagram>
      </div>
      <div className="app__gallery-card">
        <img src={images.gallery02} alt="" />
        <BsInstagram className='instagram' color='#fff' fontSize={20}></BsInstagram>
      </div>
      <div className="app__gallery-card">
        <img src={images.gallery03} alt="" />
        <BsInstagram className='instagram' color='#fff' fontSize={20}></BsInstagram>
      </div>
      <div className="app__gallery-card ">
        <img src={images.gallery04} alt="" />
        <BsInstagram className='instagram' color='#fff' fontSize={20}></BsInstagram>
      </div>
      <div className="app__gallery-card">
        <img src={images.gallery03} alt="" />
        <BsInstagram className='instagram' color='#fff' fontSize={20}></BsInstagram>
      </div>
      <div className="app__gallery-card ">
        <img src={images.gallery04} alt="" />
        <BsInstagram className='instagram' color='#fff' fontSize={20}></BsInstagram>
      </div>
    </div>
  </div>

</div>
)};

export default Gallery;
