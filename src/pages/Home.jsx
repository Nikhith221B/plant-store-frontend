// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ fontFamily: 'Segoe UI, sans-serif' }}>
            {/* Hero Section */}
            <div style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1604227867766-fab3f061f0ec?auto=format&fit=crop&w=1600&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                padding: '100px 30px',
                textAlign: 'center',
                position: 'relative'
            }}>
                <div style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    padding: '60px 20px',
                    borderRadius: '12px',
                    maxWidth: '900px',
                    margin: 'auto'
                }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        🌿 Bring Life to Your Home
                    </h1>
                    <p style={{ fontSize: '18px', marginBottom: '30px' }}>
                        Explore beautiful indoor and outdoor plants that purify the air, brighten your space, and bring joy to your life.
                    </p>
                    <Link to="/catalog">
                        <button style={{
                            padding: '14px 32px',
                            fontSize: '16px',
                            backgroundColor: '#52b788',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}>
                            🌱 Browse Plants
                        </button>
                    </Link>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div style={{ padding: '60px 20px', backgroundColor: '#f0fdf4', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#1b4332' }}>
                    Why Choose Us?
                </h2>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                    maxWidth: '1000px',
                    margin: 'auto'
                }}>
                    {benefits.map((b, i) => (
                        <div key={i} style={{
                            backgroundColor: 'white',
                            border: '1px solid #d3f9d8',
                            borderRadius: '10px',
                            padding: '20px',
                            width: '220px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '32px', marginBottom: '10px' }}>{b.icon}</div>
                            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>{b.title}</h4>
                            <p style={{ fontSize: '14px', color: '#444' }}>{b.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer style={{
                backgroundColor: '#1b4332',
                color: 'white',
                padding: '20px',
                textAlign: 'center'
            }}>
                © {new Date().getFullYear()} Mini Plant Store. Built with 🌿 by Nagi.
            </footer>
        </div>
    );
};

const benefits = [
    {
        icon: '✅',
        title: '50+ Curated Plants',
        text: 'We hand-pick healthy, beautiful plants just for you.'
    },
    {
        icon: '🚚',
        title: 'Fast Delivery',
        text: 'Your plants arrive fresh, fast, and on time.'
    },
    {
        icon: '💧',
        title: 'Easy to Maintain',
        text: 'Low-maintenance options for busy lifestyles.'
    },
    {
        icon: '🎁',
        title: 'Perfect for Gifting',
        text: 'Green gifts that grow joy.'
    }
];

export default Home;
