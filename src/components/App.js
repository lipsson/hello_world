import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";

import '../css/styles.scss';

import Main from './Main';
import SliderEdit from './SliderEdit';
import Footer from './Footer';


export const EditContext = React.createContext();

const LOCAL_STORAGE_KEY = 'lips-on.sliders';

export default function App() {
    
    const [selectedSliderId, setSelectedSliderId] = useState();
    const [sliders, setSliders] = useState(sampleSliders);
    const selectedSliders = sliders.find(slider => slider.id === selectedSliderId)

    const sliderContextValue = { handleSliderAdd, handleSliderDelete, handleSliderSelect, handleSliderChange, handleSliderChangeImg };

    useEffect(() => {
        const slidersJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (slidersJSON != null) setSliders(JSON.parse(slidersJSON))
      }, [])
      
    useEffect(() => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(sliders)), [sliders]);
    
    function handleSliderChangeImg(id, slider) {
        const newSliders = [...sliders];
        const index = newSliders.findIndex(s => s.id === id);
        newSliders[index].logo = slider.logo;
        setSliders(newSliders);
    }


    function handleSliderChange(id, slider) {
        const newSliders = [...sliders];
        const index = newSliders.findIndex(s => s.id === id);
        newSliders[index] = slider;
        setSliders(newSliders);
    }
    
    function handleSliderSelect(id) {
        setSelectedSliderId(id)
    }
    
    function handleSliderAdd() {
        const newSlider = {
            id: uuidv4(),
            name: '',
            description: '',
            logo: ''
        }
        setSelectedSliderId(newSlider.id);
        setSliders([...sliders, newSlider]);
    }
    
    function handleSliderDelete(id) {
        if (selectedSliderId !== null && selectedSliderId === id) setSelectedSliderId(undefined)
        setSliders(sliders.filter(slider => slider.id !== id))
    }
    

    return (
        <EditContext.Provider value={sliderContextValue}>
            <div className="body">
                <div className="header">
                    <div className="header__logo"></div>
                </div>
                <div className="main">
                
                    <Main sliders={sliders} />
                    
                </div>  
                <span class="main-dot"></span> 
                {selectedSliders && <SliderEdit slider={selectedSliders}/>}
                <div className="main__btn-container">
                        <button 
                        className="btn btn--primary"
                        onClick={handleSliderAdd}
                        >
                        Dodaj </button>
                    </div>
                <div className="footer">
                    <Footer />
                </div>
            </div> 
        </EditContext.Provider>
    )
}

const sampleSliders = [
    {
        id: 1,
        name: "Header 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Nunc sem quam, molestie in luctus et, volutpat sed sapien. Maecenas quis varius.",
        logo: ""
    },
    {
        id: 2,
        name: "Header 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Nunc sem quam, molestie in luctus et, volutpat sed sapien. Maecenas quis varius.",
        logo: ""
    },
    {
        id: 3,
        name: "Header 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Nunc sem quam, molestie in luctus et, volutpat sed sapien. Maecenas quis varius.",
        logo: "../gfx/logo-wordpress.png"
    }

  ]
