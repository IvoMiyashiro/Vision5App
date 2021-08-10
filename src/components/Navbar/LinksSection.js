import React from 'react';
import { Link as LinkS } from 'react-scroll';
import { Link } from 'react-router-dom';

import { LinkMenu } from './LinkMenu';

export const LinksSection = () => {
    return (
        <div className="navbar__linksSection">
            <ul className="navbar__links">
                <LinkS to="home" smooth={ true } offset={ -90 } activeClass="navbar__active">
                    <Link to="/" className="link">
                        <li className="navbar__link"> 
                            Inicio 
                        </li>
                    </Link>
                </LinkS>
                <LinkS to="about" smooth={ true } offset={ -80 } activeClass="navbar__active">
                    <li className="navbar__link"> 
                        Nosotros
                        <LinkMenu 
                            data={[{
                                title: 'Nosotros',
                                link: '/about'  
                            },{
                                title: 'Boletín Informativo',
                                link: '/about/newsletter',
                            },{
                                title: 'Reseñas',
                                link: '/about/reviews',
                            }]}
                        />
                    </li>
                </LinkS>
                <LinkS to="services" smooth={ true } offset={ -80 } activeClass="navbar__active">
                    <li className="navbar__link"> 
                        Servicios 
                        <LinkMenu 
                            data={[{
                                title: 'Servicios',
                                link: '/services',
                            },{
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
                </LinkS>
                <LinkS to="contact" smooth={ true } offset={ -80 } activeClass="navbar__active">
                    <Link to="/" className="link">
                        <li className="navbar__link"> 
                            Contacto 
                        </li>
                    </Link>
                </LinkS>
                <LinkS to="blog" smooth={ true } offset={ -80 } activeClass="navbar__active">
                    <Link to="/" className="link">
                        <li className="navbar__link"> 
                            Blog
                            <LinkMenu 
                                data={[{
                                    title: 'Visitar Blog',
                                    link: '/blog',
                                }]}
                            />
                        </li>
                    </Link>
                </LinkS>
            </ul>
        </div>
    )
}
