import React, { useState } from 'react';

const CLOUD_NAME = 'dg8fnpzin';
const UPLOAD_PRESET = 'plant_upload';

const AddPlantForm = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        categories: '',
        inStock: true,
        image: ''
    });
    const [imagePreview, setImagePreview] = useState('');
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        setError('');

        const form = new FormData();
        form.append('file', file);
        form.append('upload_preset', UPLOAD_PRESET);

        try {
            const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
                method: 'POST',
                body: form
            });

            const data = await res.json();
            setFormData((prev) => ({ ...prev, image: data.secure_url }));
            setImagePreview(data.secure_url);
        } catch (err) {
            setError('Image upload failed');
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        const { name, price, categories, image } = formData;
        if (!name || !price || !categories) {
            setError('All fields are required');
            return;
        }

        const newPlant = {
            id: Date.now(),
            name: formData.name.trim(),
            price: parseInt(formData.price),
            categories: formData.categories.split(',').map((c) => c.trim()),
            inStock: formData.inStock,
            image
        };

        onAdd(newPlant);
        setFormData({ name: '', price: '', categories: '', inStock: true, image: '' });
        setImagePreview('');
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
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                style={{ marginBottom: '15px' }}
            /><br />

            {uploading && <p>Uploading image...</p>}
            {imagePreview && (
                <img
                    src={imagePreview}
                    alt="Preview"
                    style={{ height: '100px', marginBottom: '10px', borderRadius: '5px' }}
                />
            )}

            <button type="submit" style={{ padding: '10px 20px' }}>
                Add Plant
            </button>
        </form>
    );
};

export default AddPlantForm;
