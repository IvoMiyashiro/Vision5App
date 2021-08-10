import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { BrandsSection } from './BrandsSection';
import { Button } from '../../components/Button';

export const AboutSection = ({ data }) => {

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
        <div className="about">
            <section className={ 'titleSection ' + scrollEffectClass }  ref={ titleRef }>
                <h1 className="about__title title"> 
                    <span> Acerca de Nosotros </span>
                    { data.title }
                </h1>
            </section>
            <section className="about__textSection">
                <p className="about__text"> 
                    { data.text }
                </p>
            </section>

            <section className="about__listSection">
                <ul className="about__list">
                    {
                        data.list.map( ( data, i ) => {
                            return(
                                <li className="about__listItem" key={ i }>
                                    <FontAwesomeIcon 
                                        icon={ faCheck } 
                                        className="about_listIcon" 
                                    />
                                    <p> { data.text } </p>
                                </li>
                            )
                        })
                    }
                </ul>
                <Link to="/about" className="link mt__2">
                    <Button />
                </Link>
            </section>

            <section className="about__bandsSection">
                <BrandsSection />
            </section>
        </div>
    )
}
