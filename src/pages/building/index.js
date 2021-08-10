import React from 'react';
import img from '../../assets/svgs/building-page.svg';

export const BuildingScreen = () => {
    return (
        <div className="buildingPage">
            <h1 className="buildingPage__title"> 
                <span> Lo siento </span>
                Página en Construcción 
            </h1>
            <img 
                src={ img } 
                alt='buildingpage'
                className="buildingPage__img"
            />
        </div>
    )
}
