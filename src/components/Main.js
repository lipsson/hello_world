import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';

import Slider from "./Slider";

import leftArrow from '../gfx/leftArrow.png';
import rightArrow from '../gfx/rightArrow.png';


export default function Main( { sliders } ) {
    
    const [width, setWidth] = useState(window.innerWidth);
    let sliderItems= 3;
    const items = [];

    useEffect( () => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    })


    function updateWidth() {
        setWidth(window.innerWidth);
    }
    if (width < 1500) sliderItems = 2;
    if (width < 1360) sliderItems = 1;

    for (let i = 0; i < sliders.length; i += sliderItems) {
        if (i % sliderItems === 0) {
            items.push(
                sliders.slice(i, i + sliderItems).map((slider) => {
                    return  <Slider 
                        key={ slider.id } 
                        { ...slider }
                        /> 
                })
            );
        }
    }
    return (
            <div className="main-container">
                <div className="main-title">Heading</div>
                <div className="main-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Nunc sem quam, molestie in luctus et, volutpat sed sapien. Maecenas quis varius.</div>
                <div className="main-list">
                    <Carousel
                        NextIcon={<img src={ rightArrow } alt="Next"/>}
                        PrevIcon={<img src={ leftArrow } alt="Previous" />} 
                        navButtonsProps={{
                            style: {
                                backgroundColor: '#215398',
                                opacity: '0.5',
                                
                            }
                        }} 
                        autoPlay={false}
                        animation="slide"
                        indicators={true}
                        timeout={500}
                        cycleNavigation={true}
                        
                    >
                    {items}
                    </Carousel>
                </div>
            </div>
    )
}
