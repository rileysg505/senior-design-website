import React from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className = 'hero-container'>
            {/* insert video */}
            <video src = "/videos/video-1.mp4" autoPlay loop muted/>
            <h1>Applied Apatamers</h1>
            <p>We provide a low-cost, rapid, point of care Covid-19 test</p>
            <div className="hero-btns">
                <Button className = 'btns' buttonStyle='btn--outline' buttonSize='btn--large'> 
                OUR DEVICE
                </Button> 

                {/* <Button className = 'btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.youtube.com/watch?v=xC3_RiJIDiE&ab_channel=BallerBois';
      }}> 
                WATCH TRAILER<i className='far fa-play-circle'/>

                </Button> 
            */}
                
            </div>
        </div>
    )
}

export default HeroSection
