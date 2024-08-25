'use client'


import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./style.css";
import images1 from '../../Assets/Mini-cake/Slider/slider1.jpeg';
import images2 from '../../Assets/Mini-cake/Slider/slider2.jpeg';
import images3 from '../../Assets/Mini-cake/Slider/slider3.jpeg';

const Carousel = () => {
    const images = [ images1, images2, images3];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{backgroundImage: `url(${images[0].src})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1].src})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2].src})` }}>
                </div>
            </div>
        </Slide>
    );
};

export default Carousel;