import React from 'react';

import { Link } from 'react-router-dom';

import { LinkMenu } from './LinkMenu';

export const LinksSection = () => {
    return (
        <div className="navbar__linksSection">
            <ul className="navbar__links">
                    <li className="navbar__link"> 
                        <Link to="/" className="link"> Inicio </Link>
                    </li>
                    <li className="navbar__link"> 
                    <Link to="/about" className="link"> Nosotros </Link>
                        <LinkMenu 
                            data={[{
                                title: 'Boletín Informativo',
                                link: '/about/newsletter',
                            },{
                                title: 'Reseñas',
                                link: '/about/reviews',
                            }]}
                        />
                    </li>
                
                    <li className="navbar__link"> 
                        <Link to="/services" className="link"> Servicios </Link>
                        <LinkMenu 
                            data={[{
                                title: 'Productos',
                                link: '/services/products',
                            },{
                                title: 'Nuestro Proceso',
                                link: '/services/our-process',
                            },{
                                title: 'Preguntas Frecuentes',
                                link: '/services/FAQs',
                            }]}
                        />
                    </li>
                
                    <li className="navbar__link"> 
                        <Link to="/contact" className="link"> Contacto </Link>
                    </li>
                
                    <li className="navbar__link"> 
                        <Link to="/blog" className="link"> Blog </Link>
                    </li>
            </ul>
        </div>
    )
}
