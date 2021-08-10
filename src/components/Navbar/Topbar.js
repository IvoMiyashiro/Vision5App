import React from 'react';
import { 
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineWhatsApp } from 'react-icons/ai';

import { socialmedia } from '../../data/socialmedia';

export const Topbar = () => {

    const iconStyle = {
        color: "white",
        fontSize: "1.1rem"
    }

    const { facebook, instagram, linkedin } = socialmedia

    return (
        <div className="topbar">
            <div className="container">
                <div className="topbar__iconsSection">
                    <a 
                        href={ facebook } 
                        className="topbar__link" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <AiOutlineFacebook style={ { color: 'white' } } />
                    </a>
                    <a 
                        href={ instagram } 
                        className="topbar__link" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <AiOutlineInstagram style={ iconStyle } />
                    </a>
                    <a 
                        href={ linkedin } 
                        className="topbar__link" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <AiOutlineLinkedin style={ iconStyle } />
                    </a>
                    <a href="/" rel="noreferrer">
                        <AiOutlineWhatsApp style={ iconStyle } />
                    </a>
                </div>
            </div>
        </div>
    )
}
