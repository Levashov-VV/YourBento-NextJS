'use client'

import Image from 'next/image';
import slider1 from '../../../../Assets/First main/MyWork/Slider/Slider1.jpeg';
import slider2 from '../../../../Assets/First main/MyWork/Slider/Slider2.jpeg';
import slider3 from '../../../../Assets/First main/MyWork/Slider/Slider3.jpeg';
import slider4 from '../../../../Assets/First main/MyWork/Slider/Slider4.jpeg';
import slider5 from '../../../../Assets/First main/MyWork/Slider/Slider5.jpeg';
import slider6 from '../../../../Assets/First main/MyWork/Slider/Slider6.jpeg';
import '../style.css';
import WOW from 'wowjs';
import { useEffect } from 'react';
import 'animate.css';

export default function MyResult() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <div id="myresult" className='wow fadeInUp'>
      <div className="block">
        <div className="block-text">Мои работы</div>

        <div className="block-line"></div>

        <div className="block-slider">
          <Image 
          className="block-img 
          "src={slider1} 
          alt="slider"
          />

          <Image 
          className="block-img" 
          src={slider2} 
          alt="slider"
          />

          <Image 
          className="block-img "
          src={slider3} 
          alt="slider"
          />

          <Image 
          className="block-img" 
          src={slider4} 
          alt="slider"
          />

          <Image 
          className="block-img "
          src={slider5} 
          alt="slider"
          />

          <Image 
          className="block-img" 
          src={slider6} 
          alt="slider"
          />
        </div>
      </div>
    </div>
  );
};