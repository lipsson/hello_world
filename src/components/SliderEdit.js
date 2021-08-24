import React , { useContext } from 'react';
import { EditContext } from "./App"

export default function RecipeEdit({slider}) {
    const { handleSliderSelect, handleSliderChange  } = useContext( EditContext )

    function handleImg(change){
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                handleSliderChange(slider.id, {...slider, logo: reader.result})
            }

        }
        reader.readAsDataURL(change.target.files[0])
        
        

        
    }
    function handleChange(change) {
        handleSliderChange(slider.id, {...slider, ...change})
    }

    return (
        <div className="main-edit">
            <div className="main-edit__remove-btn-container">
                <button className="btn btn--delete" onClick = {() => handleSliderSelect(undefined)}>Zamknij</button>
            </div>
            <div className="main-edit__details-grid">
            <div className = "main-edit--flex">
                <label className="main-edit__label" htmlFor="name">Nazwa</label>
                <input className="main-edit__input" value={slider.name} autoFocus onChange={e => handleChange({name: e.target.value})} type="text" name="name" id="name" />
            </div>
            <div className = "main-edit--flex">  
                <label className="main-edit__label" htmlFor="description">Opis</label>
                <input className="main-edit__input" value={slider.description} onChange={e => handleChange({description: e.target.value})} type="text" name="description" id="description" />
            </div> 
            <div className = "main-edit--flex">
                <label className="main-edit__label" htmlFor="logo">Logo</label>
                <input className="main-edit__input"  onChange={e => handleImg(e)}  type="file" name="logo" id="logo" accept="image/*"/>
            </div>
            </div>
            
        </div>
    )
}
