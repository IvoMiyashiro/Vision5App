import React from 'react';
import { Slider } from '../../components/ReviewCarousel';


export const ReviewsSection = ( { data } ) => {
    return (
        <div className="reviews">
            <h1 className="reviews__title"> 1000+ Clientes Satisfechos </h1>
            <Slider data={ data } />
        </div>
    )
}
