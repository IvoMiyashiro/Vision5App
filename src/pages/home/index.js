import React from 'react';
import { Link as LinkS } from 'react-scroll';

import { Slider } from '../../components/ImageCarousel';
import { AboutSection } from './AboutSection';
import { ServicesSection } from './ServicesSection';
import { ReviewsSection } from './ReviewsSection';
import { ContactSection } from './ContactSection';
import { BlogSection } from './BlogSection';
import { Footer } from '../../components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { 
    carouselData,
    largeCardData,
    smallCardData,
    aboutData,
    servicesData,
    hoverCardData,
    reviewCardsData,
    blogCardsData
} from '../../data/home';


export const HomeScreen = () => {
    return (
        <div className="home">
            <LinkS to="home" smooth={ true } offset={ -90 }>
                <button className="home__goTopBtn"> 
                    <FontAwesomeIcon icon={ faChevronUp } className="home__goTopBtnIcon" />
                </button>
            </LinkS>
            <Slider 
                data={ carouselData } 
                largeCard={ largeCardData } 
                smallCard={ smallCardData }
            />
            <section className="container" id="about">
                <AboutSection data={ aboutData } />
            </section>
            <section className="container" id="services">
                <ServicesSection 
                    data={ servicesData } 
                    hoverCard={ hoverCardData } 
                />
            </section>
            <section className="container">
                <ReviewsSection data={ reviewCardsData } />
            </section>
            <section className="container" id="contact">
                <ContactSection />
            </section>
            <section className="container" id="blog">
                <BlogSection data={ blogCardsData } />
            </section>
            <Footer />
        </div>
    )
}