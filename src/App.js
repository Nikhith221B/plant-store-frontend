import React, { useState, useEffect } from 'react';
import { fetchPlants, addPlant } from './services/api';
import PlantCard from './components/PlantCard';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import AddPlantForm from './components/AddPlantForm';
import Loader from './components/Loader';
import ErrorState from './components/ErrorState';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    const [plants, setPlants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

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

    return (
        <Router>
            <Navbar user={user} setUser={setUser} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={
                    <Catalog
                        user={user}
                        plants={plants}
                        loading={loading}
                        error={error}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        categories={categories}
                    />
                } />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/register" element={<Register setUser={setUser} />} />
                <Route path="/about" element={<About />} />
                <Route path="/admin" element={
                    user && user.isAdmin ? (
                        <AddPlantForm onAdd={handleAddPlant} />
                    ) : user ? (
                        <p style={{ padding: '30px', color: 'red' }}>Access denied: Admins only.</p>
                    ) : (
                        <Navigate to="/login" />
                    )
                } />
            </Routes>
        </Router>
    );
}

export default App;
