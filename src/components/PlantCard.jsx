import React from 'react';

const PlantCard = ({ name, price, categories, inStock }) => {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '12px',
            width: '240px',
            margin: '10px',
            backgroundColor: '#f9f9f9'
        }}>
            <h3>{name}</h3>
            <p><strong>Price:</strong> ₹{price}</p>
            <p><strong>Categories:</strong> {categories.join(', ')}</p>
            <p style={{ color: inStock ? 'green' : 'red' }}>
                {inStock ? 'In Stock' : 'Out of Stock'}
            </p>
        </div>
    );
};

export default PlantCard;
