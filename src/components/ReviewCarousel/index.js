import React from 'react';
import { Slideshow } from './Slideshow';

export const Slider = ( {
    controls = true, 
    autoplay = true, 
    speed = 5000, 
    transition = 500,
    img,
    data,
} ) => {

    return (
        <main className="slider__main">
            <Slideshow 
                controls={ controls } 
                autoplay={ autoplay }
                speed={ speed }  
                transition={ transition }
                img={ img }
                data={ data }
            />
        </main>
    )
}
