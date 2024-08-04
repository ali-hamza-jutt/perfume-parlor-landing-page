import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../styles/NewArrival.css';

const products = [
    { name: 'Zimaya Sharaf Blend Perfume 100ml', price: 'Rs8,915.00',image1:'https://perfumehut.com.pk/wp-content/uploads/2024/03/Zimaya-Sharaf-Blend-Perfume-100ml.webp',image2:'https://perfumehut.com.pk/wp-content/uploads/2024/03/Zimaya-Sharaf-Blend-Perfume-100ml-1.webp' },
    { name: 'Zimaya Mazaaj Perfume 100ml', price: 'Rs7,685.00',image1:'https://perfumehut.com.pk/wp-content/uploads/2024/03/Zimaya-Mazaaj-Perfume-100ml.webp',image2:'https://perfumehut.com.pk/wp-content/uploads/2024/03/Zimaya-Mazaaj-Perfume-100ml-1.webp' },
    { name: 'Zimaya Wameed Perfume 100ml', price: 'Rs7,070.00' ,image1:'https://perfumehut.com.pk/wp-content/uploads/2024/03/Zimaya-Wameed-Perfume-100ml.webp',image2:'https://perfumehut.com.pk/wp-content/uploads/2024/03/Zimaya-Wameed-Perfume-100ml-1.webp'},
    { name: 'Zimaya Stallion Perfume 100ml', price: 'Rs7,070.00',image1:'https://perfumehut.com.pk/wp-content/uploads/2024/03/Zimaya-Stallion-Perfume-100ml.webp',image2:'https://perfumehut.com.pk/wp-content/uploads/2024/03/Zimaya-Stallion-Perfume-100ml-1.webp' },
    { name: 'Zimaya Hawwa Pink Perfume 100ml', price: 'Rs7,070.00',image1:'https://perfumehut.com.pk/wp-content/uploads/2024/03/Zimaya-Hawwa-Pink-Perfume-100ml.webp',image2:'https://perfumehut.com.pk/wp-content/uploads/2024/03/Zimaya-Hawwa-Pink-Perfume-100ml-1.webp' },
    { name: 'Zimaya Hawwa Red Perfume 100ml', price: 'Rs7,070.00',image1:'https://perfumehut.com.pk/wp-content/uploads/2024/03/Zimaya-Hawwa-Red-Perfume-100ml.webp',image2:'https://perfumehut.com.pk/wp-content/uploads/2024/03/Zimaya-Hawwa-Red-Perfume-100ml-1.webp' },
    { name: 'Zimaya Khafaya Pink Perfume 100ml', price: 'Rs7,070.00',image1:'https://perfumehut.com.pk/wp-content/uploads/2024/03/Zimaya-Khafaya-Pink-Perfume-100ml.webp',image2:'https://perfumehut.com.pk/wp-content/uploads/2024/03/Zimaya-Khafaya-Pink-Perfume-100ml-1.webp' }
];

const NewArrival = () => {
    return (
        <div className="new-arrival">
            <div className="new-arrival-header">
                <div className="new-arrival-heading-section">
                    <h2>New Arrival's</h2>
                    <p>Perfume Hut Stocks more than 2,000 collections of Men’s and Women’s Perfume and Fragrance. If you are looking to buy the Best Perfume Online, then Perfume Hut is the best place for buying Perfumes, Deodorants, Attars, Arabic Perfumes, Italian Perfumes, French Designer Perfumes.</p>
                </div>
                <div className="filter-section">
                    <button className="filter-button">FILTER PRICE</button>
                    <button className="filter-button-red">FILTER</button>
                </div>
            </div>
            <div className="new-arrival-product-grid">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                     <img src={product.image1} alt={product.name} className="first-image" />

                        <img src={product.image2} alt={`${product.name} - Hover`} className="second-image" />
                        <div className="cart-icon">
                            <ShoppingCartOutlinedIcon />
                        </div>
                        <h3>{product.name}</h3>
                        <p className="price">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewArrival;
