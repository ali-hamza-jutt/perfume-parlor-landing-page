import React from 'react';
import Card from './Card'; // Ensure this path matches your project structure

const productData = [
    {
        image: 'https://img.freepik.com/fotos-premium/flasche-parfuem-mit-blumen-auf-rosa-hintergrund_447653-728.jpg',
        title: 'Perfume 1',
        price: 'Rs4,310.00',
    },
    {
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D',
        title: 'Perfume 2',
        price: 'Rs7,120.00',
    },
    {
        image: 'https://images.unsplash.com/photo-1458538977777-0549b2370168?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D',
        title: 'Perfume 3',
        price: 'Rs3,745.00',
    },
    {
        image: 'https://www.alphaaromatics.com/wp-content/uploads/2019/04/Guide-To-Start-Perfume-Line.jpg',
        title: 'Perfume 4',
        price: 'Rs5,510.00',
    },
    {
        image: 'https://www.alphaaromatics.com/wp-content/uploads/2019/04/Guide-To-Start-Perfume-Line.jpg',
        title: 'Perfume 4',
        price: 'Rs5,510.00',
    },
];

const CardsList = () => {
    return (
        <div style={styles.productList}>
            {productData.map((product, index) => (
                <Card 
                    key={index} 
                    image={product.image} 
                    title={product.title} 
                    price={product.price} 
                />
            ))}
        </div>
    );
}

const styles = {
    productList: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
};

export default CardsList;
