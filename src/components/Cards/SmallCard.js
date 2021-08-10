import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../Button';


export const SmallCard = ({ data }) => {
    return (
        <div className="smallCard">
            <section className="smallCard__section">   
                <p className="smallCard__text"> { data.text } </p>
                <Link to="/services" className="link">
                    <Button />
                </Link>
            </section>
        </div>
    )
}
