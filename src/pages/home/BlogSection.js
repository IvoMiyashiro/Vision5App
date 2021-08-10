import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import { BlogCard } from '../../components/Cards/BlogCard';

export const BlogSection = ({ data }) => {

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
    },[scrollEffectClass, setScrollEffectClass])

    return (
        <div className="blogSection">
            <section className={ 'titleSection ' + scrollEffectClass }  ref={ titleRef }>
                <h1 className="blogSection__title">
                    <span> Blog </span>
                    Últimas noticias y blogs posts
                </h1>
            </section>
            <div className="blogSection__posts">
                {
                    data.map( ( data , i) => {
                        return (
                            <BlogCard data={ data } key={ i } />
                        )
                    })
                }
            </div>
            <Link to="/blog" className="link blogSection__btn">
                <button className="btnPrimary "> 
                    Ver Todos 
                </button>
            </Link>
        </div>
    )
}
