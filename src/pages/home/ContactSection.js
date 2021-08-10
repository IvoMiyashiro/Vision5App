import React, { useEffect, useRef, useState } from 'react';

import { ContactForm } from '../../components/Forms/ContactForm';
import { InfoSection } from '../../components/Forms/InfoSection';

export const ContactSection = () => {

    const titleRef = useRef( null );

    const [ scrollEffectClass, setScrollEffectClass ] = useState( '' );

    const handleScroll = () => {

        if (!titleRef.current) return

        const { y } = titleRef.current.getBoundingClientRect();

        if ( y <= 650 ) {
            setScrollEffectClass( 'scrollEffect' );
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    return (
        <div className="contact">
            <section className={ 'titleSection ' + scrollEffectClass }  ref={ titleRef }>
                <h1 className="contact__title">
                    <span> Contacto </span>
                    Si estás listo para dar el siguiente paso contáctanos.
                </h1>
            </section>
            <section className="contact__section">
                <div className="contact__formSection">
                    <InfoSection />
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}
