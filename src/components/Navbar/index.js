import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logos/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Topbar } from './Topbar';
import { LinksSection } from './LinksSection';
import { MobileMenu } from './MobileLinkMenu';

export const Navbar = () => {

    const mobileMenuRef = useRef( null );
    const modalRef = useRef( null );

    const handleOpenMenu = () => {
        mobileMenuRef.current.style.width = '80%';
        modalRef.current.style.width = '100vw';
    }

    const handleCloseMenu = () => {
        mobileMenuRef.current.style.width = '0px';
        modalRef.current.style.width = '0px';
    }

    return (
        <>
            <Topbar />
            <div className="sticky">
                <div className="container">
                    <nav className="navbar">
                        <div className="navbar__section">
                            <Link to="/" className="navbar__logoSection">
                                <img 
                                    src={ logo }
                                    alt="vision5"
                                    className="navbar__logo"
                                />
                            </Link>
                            <div className="navbar__mobileMenuSection">
                                <button className="navbar__barsBtn" onClick={ handleOpenMenu }>
                                    <FontAwesomeIcon 
                                        icon={ faBars } 
                                        className="navbar__barsIcon" 
                                    />
                                </button>
                            </div>
                            <LinksSection />
                        </div>
                    </nav>
                </div>
            </div>

            <div className="modalBackground" ref={ modalRef } onClick={ handleCloseMenu }>
            </div>

            <div className="mobileMenu" ref={ mobileMenuRef } onClick={ handleOpenMenu }>
                <MobileMenu />
            </div>
        </>
    )
}
