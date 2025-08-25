import React from 'react';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import PlantCard from '../components/PlantCard';
import Loader from '../components/Loader';
import ErrorState from '../components/ErrorState';

const Catalog = ({
    user,
    plants,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories
}) => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Mini Plant Store 🌿</h1>

            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorState message={error} />
            ) : (
                <>
                    <div style={{ marginBottom: '20px' }}>
                        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <FilterDropdown
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            categories={categories}
                        />
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start'
                    }}>
                        {plants.length > 0 ? (
                            plants.map(plant => (
                                <PlantCard
                                    key={plant._id}
                                    name={plant.name}
                                    price={plant.price}
                                    categories={plant.categories}
                                    inStock={plant.inStock}
                                    image={plant.image}
                                />
                            ))
                        ) : (
                            <p>No matching plants found.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Catalog;
