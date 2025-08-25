import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import PlantCard from '../components/PlantCard';
import Loader from '../components/Loader';
import ErrorState from '../components/ErrorState';
import { fetchPlants } from '../services/api';

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
    const [localPlants, setLocalPlants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [localError, setLocalError] = useState('');

    const loadFilteredPlants = async () => {
        setIsLoading(true);
        try {
            const data = await fetchPlants(searchTerm, selectedCategory);
            setLocalPlants(data);
            setLocalError('');
        } catch (err) {
            setLocalError(err.message);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        loadFilteredPlants(); // on first mount
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Mini Plant Store 🌿</h1>

            <div style={{ marginBottom: '20px' }}>
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    onSearch={loadFilteredPlants}
                />
                <FilterDropdown
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    categories={categories}
                />
            </div>

            {isLoading ? (
                <Loader />
            ) : localError ? (
                <ErrorState message={localError} />
            ) : (
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start'
                }}>
                    {localPlants.length > 0 ? (
                        localPlants.map(plant => (
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
            )}
        </div>
    );
};

export default Catalog;
