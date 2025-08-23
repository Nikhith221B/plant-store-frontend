import React from 'react';

const FilterDropdown = ({ selectedCategory, setSelectedCategory, categories }) => {
    return (
        <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
                padding: '10px',
                fontSize: '16px'
            }}
        >
            <option value="">All Categories</option>
            {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
            ))}
        </select>
    );
};

export default FilterDropdown;
