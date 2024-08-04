import React, { useState, useEffect } from 'react';
import '../styles/CategoryProducts.css';
import categoryProducts from '../data/categoryProducts';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const categories = ['LATTAFA', 'ARMAF', 'EMPER', 'OPIO'];

const CategoryProducts = () => {
  const [activeCategory, setActiveCategory] = useState('LATTAFA');
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (transitioning) {
      const timeout = setTimeout(() => {
        setTransitioning(false);
      }, 500); // Match this duration with the CSS transition duration

      return () => clearTimeout(timeout);
    }
  }, [transitioning]);

  const handleCategoryClick = (category) => {
    if (activeCategory !== category) {
      setTransitioning(true);
      setTimeout(() => {
        setActiveCategory(category);
      }, 250); // Half of the transition duration for smooth effect
    }
  };

  return (
    <div className="category-products">
      <h2>CATEGORY BRAND'S</h2>
      <div className="categories">
        {categories.map((category) => (
          <span
            key={category}
            className={`category ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </span>
        ))}
      </div>
      <div className={`products ${transitioning ? 'transitioning' : ''}`}>
        {categoryProducts[activeCategory].map((product, index) => (
          <div className="product" key={index}>
            <div className="product-overlay">
              <img src={product.image} alt={product.name} />
              <div className="overlay">
                <button className="add-to-cart">
                  <span className="add-to-cart-text">ADD TO CART</span>
                  <ShoppingCartOutlinedIcon className="cart-icon" />
                </button>
                <div className="wishlist-icon">♡</div>
              </div>
            </div>
            <p className='category-product-name'>{product.name}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
