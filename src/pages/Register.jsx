import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://plant-store-backend-gjoh.onrender.com';

const Register = ({ setUser }) => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${BASE_URL}/auth/register`, {
                ...form,
                isAdmin: false
            });

            const loginRes = await axios.post(`${BASE_URL}/auth/login`, {
                email: form.email,
                password: form.password
            });

            localStorage.setItem('token', loginRes.data.token);
            localStorage.setItem('user', JSON.stringify(loginRes.data.user));
            setUser(loginRes.data.user);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div style={{
            maxWidth: '400px',
            margin: '60px auto',
            padding: '30px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#fff'
        }}>
            <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>🌱 Register</h2>

            {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}

            <form onSubmit={handleRegister}>
                <label>Username</label><br />
                <input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    value={form.username}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />

                <label>Email</label><br />
                <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />

                <label>Password</label><br />
                <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />

                <button type="submit" style={buttonStyle}>
                    Create Account
                </button>
            </form>
        </div>
    );
};

// Shared styles
const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px'
};

const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#2d6a4f',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer'
};

export default Register;
