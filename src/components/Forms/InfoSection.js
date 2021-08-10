import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { 
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
} from 'react-icons/ai';

export const InfoSection = () => {
    return (
        <div className="formInfo">
            <section className="formInfo__section">
                <p className="formInfo__text"> 
                    Nuestros expertos se contactarán contigo lo antes posible 
                </p>
                <div className="formInfo__infoSection">
                    <div className="formInfo__info">
                        <FontAwesomeIcon icon={ faEnvelope } className="formInfo__icon" />
                        <p> example@example.com </p>
                    </div>
                    <div className="formInfo__info">
                        <FontAwesomeIcon icon={ faPhoneAlt } className="formInfo__icon" />
                        <p> +1(786) 817-0576 </p>
                    </div>
                    <div className="formInfo__info">
                        <FontAwesomeIcon icon={ faMapMarkerAlt } className="formInfo__icon formInfo__locationIcon" />
                        <p> Buenos Aires, Argentina </p>
                    </div>
                </div>
            </section>
            <section>
                <a 
                    href={ '/' } 
                    className="topbar__link" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <AiOutlineFacebook 
                        style={{ 
                            color: 'white',
                            fontSize: '1.25rem' }
                        } 
                    />
                </a>
                <a 
                    href={ '/' } 
                    className="topbar__link" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <AiOutlineInstagram 
                        style={{ color: 'white', 
                        fontSize: '1.25rem', 
                        margin: '0 .5rem' 
                        }} 
                    />
                </a>
                <a 
                    href={ '/' } 
                    className="topbar__link" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <AiOutlineLinkedin 
                        style={{ 
                            color: 'white',
                            fontSize: '1.25rem' 
                        }} 
                        />
                </a>
            </section>
        </div>
    )
}
