import React from 'react';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ReviewCard = ( { data } ) => {

    return (
        <div className="reviewCard">
            <header className="reviewCard__starSection">
                <FontAwesomeIcon icon={ faStar } className="reviewCard__icon"/>
                <FontAwesomeIcon icon={ faStar } className="reviewCard__icon"/>
                <FontAwesomeIcon icon={ faStar } className="reviewCard__icon"/>
                <FontAwesomeIcon icon={ faStar } className="reviewCard__icon"/>
                <FontAwesomeIcon icon={ faStar } className="reviewCard__icon"/>
            </header>
            <main className="reviewCard__reviewSection">
                <p className="reviewCard__review"> { data.review } </p>
            </main>
            <footer className="reviewCard__nameSection">
                <p className="reviewCard__name"> { data.name } </p>
            </footer>
        </div>
    )
}