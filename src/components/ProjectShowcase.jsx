import React from 'react';
import specialProducts from '../data/specialProducts';
import '../styles/ProductShowcase.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useScreenSize from '../hooks/useScreenSize.js'



const ProductShowcase = () => {
    return (
        <div className="product-showcase">
            <MainProduct />
            <ProductGrid products={specialProducts} />
        </div>
    );
}

const MainProduct = () => {
    return (
        <div className="main-product-container">
        <div className="main-product">
            <h2>DEWAR-E-KHASS</h2>
            <img src="https://img.freepik.com/fotos-premium/flasche-parfuem-mit-blumen-auf-rosa-hintergrund_447653-728.jpg" alt="Yutaray Night" className="main-product-image" />
            <h3>Yutaray Night For Men Perfume 100ml</h3>
            <p className="old-price">Rs2,500.00</p>
            <p className="new-price">Rs1,250.00</p>
        </div>
        <p className='main-product-description'>In this category, we have listed Dewar-e-Khass, which includes our best-selling perfumes with huge discounts. You can enjoy a 50% discount on all Dewar-e-Khass products.</p>
        </div>
        
    );
}

const ProductGrid = ({ products }) => {
    
            const {isMobile}=useScreenSize();
    return (
        <div className="product-grid-container">
            <h2>Perfume Parlor Special</h2>
            <div className="product-grid">
                {products.map((product, index) => {
                    // Determine the class based on the index
                    const targetedIndex=isMobile?2:3;
                    const itemClass = index < targetedIndex ? 'top-grid-item' : 'bottom-grid-item';

                    return (
                        <div key={index} className={`grid-item ${itemClass}`}>
                            <img src={product.image1} alt={product.title} className="grid-first-image" />
                            <img src={product.image2} alt={product.title} className="grid-second-image" />
                            <h6>{product.title}</h6>
                            <p className="new-price">{product.price}</p>
                            <div className="grid-cart-icon">
                                <ShoppingCartOutlinedIcon />
                            </div>
                            <div className="grid-wishlist-icon">
                                <FavoriteBorderIcon />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}



export default ProductShowcase;
