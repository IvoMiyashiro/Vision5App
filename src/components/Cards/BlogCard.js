import React from 'react';
import { Link } from 'react-router-dom';

export const BlogCard = ({ data }) => {

    const { date, title, text, img } = data

    return (
        <Link to="/" className="link">
            <div className="blogCard">
                <img 
                    src={ img }
                    alt={ title }
                    className="blogCard__img"
                />
                <div className="blogCard__section">
                    <p className="blogCard__date"> { date } </p>
                    <h1 className="blogCard__title"> { title } </h1>
                    <p className="blogCard__text"> { text } </p>
                </div>
            </div>
        </Link>
    )
}
