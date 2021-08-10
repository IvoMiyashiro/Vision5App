import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

import { 
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin } from 'react-icons/ai';

import logo from '../../assets/images/logos/logo_white.png'

import { socialmedia } from '../../data/socialmedia';

export const Footer = () => {

    const iconStyle = {
        color: "white",
        fontSize: "1.5rem"
    }

    const { facebook, instagram, linkedin } = socialmedia;

    return (
        <footer className="footer">
            <ul className="footer__linksList">
                <LinkS to="home" smooth={ true } offset={ -90 }>
                    <li className="footer__link"> Inicio </li>
                </LinkS>
                <LinkS to="about" smooth={ true } offset={ -90 }>
                    <li className="footer__link"> Nosotros </li>
                </LinkS>
                <LinkS to="services" smooth={ true } offset={ -90 }>
                    <li className="footer__link"> Servicios </li>
                </LinkS>
                <LinkS to="contact" smooth={ true } offset={ -90 }>
                    <li className="footer__link"> Contacto </li>
                </LinkS>
                <LinkS to="blog" smooth={ true } offset={ -90 }>
                    <li className="footer__link footer__lastLink"> Blog </li>
                </LinkS>
            </ul>
            <section className="footer__logoSection">
                <img 
                    src={ logo } 
                    alt="vision5" 
                    className="footer__logo"
                />
                <p className="footer__logoText">
                    © Copyright 2017 - 2021 Vision 5 Electronic 
                    <span className="footer__logoSpan"> Todos los derechos reservados. </span>
                    <span className="footer__logoSpan"> 
                        <Link to="/privacy-policies" className="link footer__logoLink"> 
                            Política de Privacidad 
                        </Link>
                        |
                        <Link to="/accessibility" className="link footer__logoLink">
                            Accesibilidad 
                        </Link>
                    </span>
                </p>
            </section>
            <section className="footer__iconsSection">
                <a 
                    href={ facebook }
                    className="footer__iconLink" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <AiOutlineFacebook style={ iconStyle } />
                </a>
                <a 
                    href={ instagram }
                    className="footer__iconLink" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <AiOutlineInstagram style={ iconStyle } />
                </a>
                <a 
                    href={ linkedin }
                    className="footer__iconLink" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <AiOutlineLinkedin style={ iconStyle } />
                </a>
            </section>
        </footer>
    )
}
