import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSearch();
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="Search by name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    marginRight: '10px',
                    width: '300px'
                }}
            />
            <button
                onClick={onSearch}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#2d6a4f',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                }}
            >
                Search
            </button>
        </>
    );
};

export default SearchBar;
