import React, { useEffect, useRef, useState } from 'react';
import { HoverCard } from '../../components/Cards/HoverCard';

export const ServicesSection = ({ data, hoverCard }) => {

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
        <div className="services">
            <section className={ 'titleSection ' + scrollEffectClass }  ref={ titleRef }>
                <h1 className="services__title">
                    <span> Servicios </span>
                    { data.title }
                </h1>
            </section>
            <section className="services__cardsSection">
                {
                    hoverCard.map( (data, i) => {
                        return (
                            <HoverCard data={ data } key={ i } />
                        )
                    })
                }
            </section>
        </div>
    )
}