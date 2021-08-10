import React from 'react';
import { Link } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { CardsSection } from './CardsSection';

export const Slider = ( { data, largeCard, smallCard } ) => {
    return (
        <div className="slider altContainer">
            <Carousel
                interval={ 5000 }
                infiniteLoop={ true }
                autoPlay={ true }
                showThumbs={ false }
                showStatus={ false }
            >
                {
                    data.map( (data, i) => {
                        return (
                            <div className="slider__slide" key={ i }>
                                <img 
                                    src={ data.img } 
                                    alt="smartphone"
                                    className="slider__slideImg"
                                />
                                <div className="slider__slideContainer">
                                    <div className="slider__slideContent">
                                        <h1 className="slider__slideTitle"> { data.title } </h1>
                                        <p className="slider__slideText"> { data.text } </p>
                                        <Link to={ data.link } className="link  ">
                                            <button className="btnPrimary slider__slideBtn"> { data.btnText } </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>

            <CardsSection largeCard={ largeCard } smallCard={ smallCard } />

        </div>
    )
}
