import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBlog, faChevronRight, faHome, faServer, faUsers } from '@fortawesome/free-solid-svg-icons';

export const MobileMenu = () => {

    const aboutMenu = useRef( null );
    const aboutLinkIcon = useRef( null );
    const servicesMenu = useRef( null );
    const servicesLinkIcon = useRef( null );

    const handleAboutMenu = () => {

        if ( aboutMenu.current.style.height === '' || aboutMenu.current.style.height === '0px') {
            aboutMenu.current.style.height = '140px';
            aboutLinkIcon.current.style.transform = 'rotate(90deg)';
        } else {
            aboutMenu.current.style.height = '0px';
            aboutLinkIcon.current.style.transform = 'rotate(-0deg)';
        }
    }

    const handleServicesMenu = () => {

        if ( servicesMenu.current.style.height === '' || servicesMenu.current.style.height === '0px') {
            servicesMenu.current.style.height = '185px';
            servicesLinkIcon.current.style.transform = 'rotate(90deg)';
        } else {
            servicesMenu.current.style.height = '0px';
            servicesLinkIcon.current.style.transform = 'rotate(-0deg)';
        }
    }

    return (
        <ul className="mobileMenu__links">
            <li className="mobileMenu__link">
                    <Link to="/" className="link">
                        <div>
                            <FontAwesomeIcon icon={ faHome } className="mobileMenu__linkIcon" />
                            <span> Inicio </span>
                        </div>
                    </Link>
            </li>
            <li className="mobileMenu__link" onClick={ handleAboutMenu }>
                <Link to="/about" className="link">
                    <FontAwesomeIcon icon={ faUsers } className="mobileMenu__linkIcon" />
                    <span className="mobileMenu__span"> Nosotros </span>
                </Link>
                <div className="mobileMenu__iconContainer" ref={ aboutLinkIcon }>
                    <FontAwesomeIcon 
                        icon={ faChevronRight } 
                        className="mobileMenu__linkIcon"
                    />
                </div>
            </li>
            <ul className="mobileMenu__linkMenu" ref={ aboutMenu }>
                <Link to="/about" className="link" >
                    <li className="mobileMenu__menuLink"> Nosotros </li>
                </Link>
                <Link to="/about/newsletter" className="link" >
                    <li className="mobileMenu__menuLink"> Boletín Informativo </li>
                </Link>
                <Link to="/about/reviews" className="link" >
                    <li className="mobileMenu__menuLink"> Reseñas </li>
                </Link>
            </ul>
            <li className="mobileMenu__link" onClick={ handleServicesMenu }>
                <Link to="/services" className="link">
                    <FontAwesomeIcon icon={ faServer } className="mobileMenu__linkIcon" />
                    <span> Servicios </span>
                </Link>
                <div className="mobileMenu__iconContainer" ref={ servicesLinkIcon }>
                    <FontAwesomeIcon 
                        icon={ faChevronRight } 
                        className="mobileMenu__linkIcon"
                    />
                </div>
            </li>
            <ul className="mobileMenu__linkMenu" ref={ servicesMenu }> 
                <Link to="/services" className="link" >
                    <li className="mobileMenu__menuLink"> Servicios </li>
                </Link>
                <Link to="/services/products" className="link" >
                    <li className="mobileMenu__menuLink"> Products </li>
                </Link>
                <Link to="/services/our-process" className="link" >
                    <li className="mobileMenu__menuLink"> Nuestro Proceso </li>
                </Link>
                <Link to="/services/FAQs" className="link" >
                    <li className="mobileMenu__menuLink"> Preguntas Frecuentes </li>
                </Link>
            </ul>
            <li className="mobileMenu__link">
                <Link to="/contact" className="link">
                    <FontAwesomeIcon icon={ faAddressBook } className="mobileMenu__linkIcon" />
                    <span> Contacto </span>
                </Link>
            </li>
            <li className="mobileMenu__link">
                <Link to="/blog" className="link" >
                    <FontAwesomeIcon icon={ faBlog } className="mobileMenu__linkIcon" />
                    <span> Blog </span>
                </Link>
            </li>
        </ul>
    )
}
