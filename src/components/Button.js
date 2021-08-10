import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const Button = () => {
    return (
        <button className="btnPrimary smallCard__btn"> 
            Explorar
            <FontAwesomeIcon icon={ faChevronRight } className="smallCard__icon" />
        </button>
    )
}
