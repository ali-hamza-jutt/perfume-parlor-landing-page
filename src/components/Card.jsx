import React from 'react';

const Card = ({ image, title, price }) => {
    return (
        <div style={styles.card}>
            <img src={image} alt={title} style={styles.image} />
            <div style={styles.cardContent}>
                <h3 style={styles.title}>{title}</h3>
                <p style={styles.price}>{price}</p>
            </div>
        </div>
    );
}

const styles = {
    card: {
        width: '250px',
        height: '350px',
        textAlign: 'center',
        margin: '5px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    image: {
        width: '100%',
        height: '75%',
        objectFit: 'cover',
    },
    cardContent: {
        padding: '0', // Remove padding from all cards
    },
    title: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    price: {
        color: 'red',
        fontSize: '16px',
    },
};

export default Card;
