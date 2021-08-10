import React from 'react';

import { LargeCard } from '../Cards/LargeCard';
import { SmallCard } from '../Cards/SmallCard';

export const CardsSection = ({ largeCard, smallCard }) => {
    return (
        <div className="container">
            <div className="slider__cardsContainer">
                <LargeCard data={ largeCard } />
                <SmallCard data={ smallCard } />
            </div>
        </div>
    )
}