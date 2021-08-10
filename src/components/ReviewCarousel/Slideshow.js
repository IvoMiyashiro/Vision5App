import React, { useRef, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { nextSlide, prevSlide } from './01-functions';
import { ReviewCard } from '../Cards/ReviewCard';

export const Slideshow = ({
    controls,
    autoplay,
    speed,
    transition,
    data,
}, ) => {

    const slider = useRef( null );
    const intervalSlider = useRef( null );

    useEffect(() => {

        if ( autoplay ) {
            intervalSlider.current = setInterval(() => {
                nextSlide( slider, transition );
            }, speed);
    
            slider.current.addEventListener( 'mouseenter', () => {
                clearInterval( intervalSlider.current )
            });
    
            slider.current.addEventListener( 'mouseleave', () => {
                intervalSlider.current = setInterval(() => {
                    nextSlide( slider, transition );
                }, speed);
            });
        }
    return () => clearInterval( intervalSlider.current );

    }, [autoplay, speed, transition]);

    return (
        <main className="slider__container">    
            <div className="slider__show" ref={ slider }>
                {
                    data.map( ( data, i ) => {
                        return (
                            <div className="slider__slideRev" key={ i }> 
                                <ReviewCard data={ data } />
                            </div>
                        )
                    })
                }
            </div>
                {
                    controls 
                    &&
                    <div className="slider__controls"> 
                        <button className="slider__leftBtn" onClick={ () => prevSlide(slider, transition) }>
                            <FontAwesomeIcon icon={ faChevronLeft } />
                        </button>
                        <button className="slider__rightBtn" onClick={ () => nextSlide(slider, transition) }>
                            <FontAwesomeIcon icon={ faChevronRight } />
                        </button>
                    </div>
                }
        </main>
    )
}