import React from 'react';
import '../styles/CollectionsCard.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CollectionsCard = ({ image1,image2, title, price }) => {
    return (
        <div className='collection-card'>
            <img src={image1} alt={title} className='collection-card-first-image' />
            <img src={image2} alt={`${title} - Hover`} className="collection-card-second-image" />

            <div className='card-content'>
                <h3 className='collection-card-title'>{title}</h3>
                <p className='collection-card-price'>{price}</p>
            </div>
            <div className="collection-card-cart-icon">
                <ShoppingCartOutlinedIcon />
            </div>
        </div>
    );
}



export default CollectionsCard;
















// import React from 'react';

// const Card = ({ image1, title, price }) => {
//     return (
//         <div style={styles.card}>
//             <img src={image1} alt={title} style={styles.image} />
//             <div style={styles.cardContent}>
//                 <h3 style={styles.title}>{title}</h3>
//                 <p style={styles.price}>{price}</p>
//             </div>
//         </div>
//     );
// }

// const styles = {
//     card: {
//         width: '250px',
//         height: '350px',
//         textAlign: 'center',
//         margin: '5px',
//         overflow: 'hidden',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-evenly',
//     },
//     image: {
//         width: '100%',
//         height: '75%',
//         objectFit: 'cover',
//     },
//     cardContent: {
//         padding: '0', // Remove padding from all cards
//     },
//     title: {
//         fontSize: '16px',
//         fontWeight: 'bold',
//     },
//     price: {
//         color: 'red',
//         fontSize: '16px',
//     },
// };

// export default Card;