import React, { useRef, useState } from 'react';
import {BsPlayFill, BsPauseFill} from 'react-icons/bs'
import './Intro.css';
import {meal} from '../../constants'
const Intro = () => {
  const [playVideo,setPlayVideo] =  useState(true);
  const videoRef= useRef();

  const handlePlay= ()=>{
    setPlayVideo(!playVideo);

    
    if(playVideo){
      videoRef.current.play();
    }
    else videoRef.current.pause();
  }
  return(
    <div className='app__intro '>
      <video 
        src={meal}
        ref={videoRef}
        loop
        controls={true}
        
      ></video>
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay-circle " onClick={()=> handlePlay()}>
          {playVideo ? <div><BsPlayFill color='#fff' fontSize={30}/></div>:<div><BsPauseFill color='#fff' fontSize={30}/></div>}
          
        </div>
      </div>
  </div>
  )
}
  
;

export default Intro;
