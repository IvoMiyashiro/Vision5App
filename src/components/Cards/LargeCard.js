import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

export const LargeCard = ({ data }) => {
    return (
        <div className="largeCard">
            {
                data.map( (data, i) => {
                    return (
                        <section className="largeCard__section grid" key={ i }>
                            <h1 className="largeCard__title title">
                                <Link to={ data.link } className='link largeCard__titleLink'> 
                                    { data.title } 
                                </Link>
                            </h1>
                            <p className="largeCard__text"> { data.text }</p>
                            <Link to={ data.link }>
                                <FontAwesomeIcon icon={ faLongArrowAltRight } className="largeCard__icon" />
                            </Link>
                        </section>
                    )
                })
            }
        </div>
    )
}
