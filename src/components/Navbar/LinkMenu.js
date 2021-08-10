import React from 'react';
import { Link } from 'react-router-dom';

export const LinkMenu = ( { data } ) => {

    return (
        <div className="navbar__linkMenu">
            <ul className="navbar__menuLinks">
                {
                    data.map( (data, i) => {
                        return (
                            <Link to={ data.link } key={ i } className="link">
                                <li className="navbar__menuLink">
                                    { data.title }
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}
