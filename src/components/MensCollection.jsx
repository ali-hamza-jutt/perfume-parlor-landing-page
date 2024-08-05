import React from 'react';
import CollectionsCard from './CollectionsCard'; // Ensure this path matches your project structure
import '../styles/MensCollection.css';
import mensCollection from '../assets/mensCollection.jpg';
import mensCollectionData from '../data/mensCollectionData';
import useScreenSize from '../hooks/useScreenSize.js';

const MensCollection = () => {
    const {isMobile}=useScreenSize();
    return (
        <div className="collections-container">
            <div className="collections-header">
                <h2>Men's Collection</h2>
                <p>Pakistan men's fragrance collection embodies a fusion of classic elegance and modern sophistication. A vast range of perfumes, from strong, spicy notes to fresh, aquatic odors, are available in the market to suit different tastes and preferences. These perfumes, which are well regarded for their excellence and diversity, are made to satisfy the varied and discriminating tastes of men in Pakistan.</p>
            </div>
            <div className="collections-image-container">
                <img className='collections-image' src={mensCollection} alt="Mens Collection" />
            </div>
            <div className='collections-list'>
                {mensCollectionData.map((product, index) => {
                    const targetedIndex=isMobile?2:5;
                    console.log(targetedIndex)
                    const itemClass = index < targetedIndex ? 'top-collection-cards' : 'bottom-collection-cards';
                    return (
                        <CollectionsCard 
                            key={index} 
                            image1={product.image1} 
                            image2={product.image2} 
                            title={product.title} 
                            price={product.price} 
                            itemClass={itemClass} // Pass the class as a prop
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default MensCollection;
