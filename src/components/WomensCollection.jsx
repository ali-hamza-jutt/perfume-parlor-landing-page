import React from 'react';
import CollectionsCard from './CollectionsCard'; // Ensure this path matches your project structure
import '../styles/MensCollection.css';
import womensCollection from '../assets/womensCollection.jpg';
import womensCollectionData from '../data/womensCollectionData';

const WomensCollection = () => {
    return (
        <div className="collections-container">
            <div className="collections-header">
                <h2>Women's Collection</h2>
                <p>Pakistan women's perfume collection is a stunning fusion of heritage and contemporary design, with a variety of fragrances to suit Pakistani women's refined and varied tastes. These fragrances are choices for every situation, from special occasions to daily wear, and they embody elegance, femininity, and appeal.</p>
            </div>
            <div className="collections-image-container">
                <img className='collections-image' src={womensCollection} alt="Mens Collection" />
            </div>
            <div className='collections-list'>
                {womensCollectionData.map((product, index) => {
                    const itemClass = index < 5 ? 'top-collection-cards' : 'bottom-collection-cards';
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

export default WomensCollection;
