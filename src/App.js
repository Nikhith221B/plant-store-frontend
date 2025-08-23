import React, { useState, useEffect } from 'react';
import { fetchPlants, createPlant } from './services/api';
import PlantCard from './components/PlantCard';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import AddPlantForm from './components/AddPlantForm';
import Loader from './components/Loader';
import ErrorState from './components/ErrorState';

function App() {
    const [plants, setPlants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // 🧠 Fetch Plants from Backend
    const loadPlants = async () => {
        setLoading(true);
        try {
            const data = await fetchPlants(searchTerm, selectedCategory);
            setPlants(data);
            setError('');
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadPlants();
    }, [searchTerm, selectedCategory]);

    const handleAddPlant = async (newPlant) => {
        try {
            await createPlant(newPlant);
            loadPlants(); // Refresh after adding
        } catch (err) {
            alert(err.message);
        }
    };

    const categories = [...new Set(plants.flatMap(p => p.categories))];

    return (
        <div style={{ padding: '20px' }}>
            <h1>Mini Plant Store 🌿</h1>

            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorState message={error} />
            ) : (
                <>
                    {/* Search + Filter */}
                    <div style={{ marginBottom: '20px' }}>
                        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <FilterDropdown
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            categories={categories}
                        />
                    </div>

                    <AddPlantForm onAdd={handleAddPlant} />

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
}

export default App;
