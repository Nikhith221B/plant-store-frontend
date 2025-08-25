import React, { useState, useEffect } from 'react';
import { fetchPlants, addPlant } from './services/api';
import PlantCard from './components/PlantCard';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import AddPlantForm from './components/AddPlantForm';
import Loader from './components/Loader';
import ErrorState from './components/ErrorState';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import About from './pages/About';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    const [plants, setPlants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    // Fetch user from localStorage (on mount)
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    // Fetch plants
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
            await addPlant(newPlant);
            loadPlants();
        } catch (err) {
            alert(err.message);
        }
    };

    const categories = [...new Set(plants.flatMap(p => p.categories))];

    // Main Catalog Page
    const CatalogPage = () => (
        <div>
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

    return (
        <Router>
            <Navbar user={user} setUser={setUser} />
            <Routes>
                <Route path="/" element={<CatalogPage />} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/admin" element={
                    user && user.isAdmin ? (
                        <AddPlantForm onAdd={handleAddPlant} />
                    ) : user ? (
                        <p style={{ padding: '30px', color: 'red' }}>Access denied: Admins only.</p>
                    ) : (
                        <Navigate to="/login" />
                    )
                } />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register setUser={setUser} />} />
            </Routes>
        </Router>
    );
}

export default App;
