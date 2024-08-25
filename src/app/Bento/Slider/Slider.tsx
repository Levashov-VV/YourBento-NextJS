'use client'


import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./style.css";
import images1 from '../../Assets/Bento-cake/Slider/Slider1.jpeg';
import images2 from '../../Assets/Bento-cake/Slider/Slider2.jpeg';
import images3 from '../../Assets/Bento-cake/Slider/Slider3.jpeg';
import images4 from '../../Assets/Bento-cake/Slider/Slider4.jpeg';
import images5 from '../../Assets/Bento-cake/Slider/Slider5.jpeg';

const Carousel = () => {
    const images = [ images1, images2, images3, images4, images5];

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
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3].src})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4].src})` }}>
                </div>
            </div>
        </Slide>
    );
};

export default Carousel;