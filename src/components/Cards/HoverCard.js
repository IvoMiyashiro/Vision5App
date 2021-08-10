import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const HoverCard = ({ data }) => {

    const { background, icon, title, text } = data;

    return (
        <div className={ 'hoverCard ' + background }>
            <header className="hoverCard__iconSection">
                <FontAwesomeIcon icon={ icon } className="hoverCard__icon" />
            </header>
            <main className="hoverCard__mainText">
                <h1 className="hoverCard__title title"> { title } </h1>
                <p className="hoverCard__text"> { text } </p>
            </main>
            <Link to="/" className="link">
                <button className="hoverCard__btn">
                    Más
                    <FontAwesomeIcon icon={ faChevronRight } className="hoverCard__btnIcon" />
                </button>
            </Link>
        </div>
    )
}