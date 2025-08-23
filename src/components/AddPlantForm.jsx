import React, { useState } from 'react';

const AddPlantForm = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        categories: '',
        inStock: true,
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.price || !formData.categories) {
            setError('All fields are required.');
            return;
        }

        const newPlant = {
            id: Date.now(),
            name: formData.name.trim(),
            price: parseInt(formData.price),
            categories: formData.categories.split(',').map((c) => c.trim()),
            inStock: formData.inStock,
        };

        onAdd(newPlant);
        setFormData({ name: '', price: '', categories: '', inStock: true });
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
            <h2>Add a New Plant 🪴</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <input
                type="text"
                name="name"
                placeholder="Plant Name"
                value={formData.name}
                onChange={handleChange}
                style={{ marginBottom: '10px', padding: '8px', width: '300px' }}
            /><br />

            <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                style={{ marginBottom: '10px', padding: '8px', width: '300px' }}
            /><br />

            <input
                type="text"
                name="categories"
                placeholder="Categories (comma-separated)"
                value={formData.categories}
                onChange={handleChange}
                style={{ marginBottom: '10px', padding: '8px', width: '300px' }}
            /><br />

            <label>
                <input
                    type="checkbox"
                    name="inStock"
                    checked={formData.inStock}
                    onChange={handleChange}
                /> In Stock
            </label><br /><br />

            <button type="submit" style={{ padding: '10px 20px' }}>
                Add Plant
            </button>
        </form>
    );
};

export default AddPlantForm;
