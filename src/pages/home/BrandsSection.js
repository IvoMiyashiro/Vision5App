import React from 'react';

import mercadolibre from '../../assets/images/logos/Logo_Mercadolibre.jpg';
import ripley from '../../assets/images/logos/Logo_Ripley.png';
import falabella from '../../assets/images/logos/Logo_Falabella.png';
import ryutech from '../../assets/images/logos/Logo_Ryutech.jpg';
import paris from '../../assets/images/logos/Logo_Paris.png';
import linio from '../../assets/images/logos/Logo_Linio.jpg';
import abcdin from '../../assets/images/logos/Logo_Abcdin.png';
import amazon from '../../assets/images/logos/Logo_Amazon.svg';

export const BrandsSection = () => {
    return (
        <div className="brands">
            <p className="brands__text">
                Alianzas que respaldan nuestra
                <span> experiencia y trayectoria </span>
            </p>
            <section className="brands__brandsSection">
                <img 
                    src={ ripley } 
                    alt={ 'logo' } 
                    className="brands__logo"
                />
                <img 
                    src={ falabella } 
                    alt={ 'logo' } 
                    className="brands__logo"
                />
                <img 
                    src={ ryutech } 
                    alt={ 'logo' } 
                    className="brands__logo"
                />
                <img 
                    src={ paris } 
                    alt={ 'logo' } 
                    className="brands__logo"
                />
                <img 
                    src={ linio } 
                    alt={ 'logo' } 
                    className="brands__logo"
                />
                <img 
                    src={ abcdin } 
                    alt={ 'logo' } 
                    className="brands__logo"
                />
                <img 
                    src={ amazon } 
                    alt={ 'logo' } 
                    className="brands__logo"
                />
                <img 
                    src={ mercadolibre } 
                    alt={ 'logo' } 
                    className="brands__logo"
                />
            </section>
        </div>
    )
}
