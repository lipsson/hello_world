import React, { useContext} from 'react';
import { EditContext } from "./App"

export default function Slider( props ) {
    const {id, name, description, logo} = props
    
    const {handleSliderDelete, handleSliderSelect } = useContext( EditContext)

    return (
        <div className="main__slider">

            <div className="main__slider-header">
                <h3 className="main__slider-title"  >{ name }</h3>
                
            </div>
            <div className="main__slider-row">
                <span className="main__slider-description">{ description }</span>
            </div>
            <div className="main__slider-row">
                <span className="main__slider-logo"><img src={logo} alt= {logo} /></span>
            </div>
            <div>
                <button className="btn btn--primary mr-1" 
                onClick={() => handleSliderSelect(id)}
                >
                    Edycja
                </button>
                <button onClick={() => handleSliderDelete(id)} className="btn btn--delete">
                    Usuń
                </button>
            </div>
            
        </div>
    )
}
