import React from 'react';
import sliderImg from "../gfx/logo-wordpress.png";

export default function Footer() {
    return (
        <div>
            <div className="footer-elements">
                <div className="footer-elements__title">Footer Title</div>
                <div className="footer-elements__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Nunc sem quam, molestie in luctus et, volutpat sed sapien. Maecenas quis varius.</div>
                <div className="footer-elements__subtitle">Footer Subtitle</div>
                <div className="footer-elements__sliders">
                    <div className="footer-elements__sliders__slider">
                        <div className="footer-elements__sliders__slider-title">Slider 1</div>
                        <div className="footer-elements__sliders__slider-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Nunc sem quam, molestie in luctus et, volutpat sed sapien. Maecenas quis varius.</div>
                        <div className="footer-elements__sliders__slider-logo"><img src={sliderImg} alt="Slider 1" /></div>
                    </div>
                    <div className="footer-elements__sliders__slider">
                        <div className="footer-elements__sliders__slider-title">Slider 2</div>
                        <div className="footer-elements__sliders__slider-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Nunc sem quam, molestie in luctus et, volutpat sed sapien. Maecenas quis varius.</div>
                        <div className="footer-elements__sliders__slider-logo"><img src={sliderImg} alt="Slider 2" /></div>
                    </div>
                    <div className="footer-elements__sliders__slider">
                        <div className="footer-elements__sliders__slider-title">Slider 3</div>
                        <div className="footer-elements__sliders__slider-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Nunc sem quam, molestie in luctus et, volutpat sed sapien. Maecenas quis varius.</div>
                        <div className="footer-elements__sliders__slider-logo"><img src={sliderImg} alt="Slider 3" /></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
