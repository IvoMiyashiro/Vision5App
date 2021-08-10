import React from 'react';
import img from '../../assets/svgs/page-not-found.svg';

export const NotFoundScreen = () => {
    return (
        <div className="pageNotFound">
            <h1 className="pageNotFound__title"> 
                <span> Lo siento </span>
                Página no encontrada
            </h1>
            <img 
                src={ img } 
                alt='pageNotFound'
                className="pageNotFound__img"
            />
        </div>
    )
}
