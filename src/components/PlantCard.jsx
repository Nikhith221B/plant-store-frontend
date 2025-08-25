import React from 'react';

const fallbackImage = "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const PlantCard = ({ name, price, categories, inStock, image }) => {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '12px',
            width: '240px',
            margin: '10px',
            backgroundColor: '#ffffffcc',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
            <img
                src={image || fallbackImage}
                alt={name}
                style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '6px',
                    marginBottom: '10px'
                }}
            />

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
