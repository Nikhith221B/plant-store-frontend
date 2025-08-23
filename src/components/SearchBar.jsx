import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <input
            type="text"
            placeholder="Search by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
                padding: '10px',
                fontSize: '16px',
                marginRight: '10px',
                width: '300px'
            }}
        />
    );
};

export default SearchBar;
