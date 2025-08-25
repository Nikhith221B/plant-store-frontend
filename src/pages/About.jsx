// src/pages/About.jsx

import React from 'react';

const About = () => {
    return (
        <div style={{
            maxWidth: '900px',
            margin: '60px auto',
            padding: '40px 20px',
            backgroundColor: '#f0fdf4',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            fontFamily: 'Segoe UI, sans-serif'
        }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1b4332' }}>
                🌿 About Mini Plant Store
            </h2>

            <p style={{ fontSize: '16px', marginBottom: '30px', color: '#333' }}>
                This is a full-stack web application.
                It allows users to browse, filter, and search a catalog of plants, while authenticated admins can add new plants to the system.
            </p>

            <h3 style={{ fontSize: '20px', color: '#1b4332', marginBottom: '12px' }}>🛠️ Tech Stack</h3>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.7', color: '#333' }}>
                <li>🌐 <strong>Frontend:</strong> React.js (functional components + hooks)</li>
                <li>⚙️ <strong>Backend:</strong> Node.js + Express.js</li>
                <li>🗃️ <strong>Database:</strong> MongoDB Atlas</li>
                <li>🔐 <strong>Auth:</strong> JWT + bcrypt</li>
                <li>🚀 <strong>Deployment:</strong> Render</li>
            </ul>

            <h3 style={{ fontSize: '20px', color: '#1b4332', margin: '30px 0 12px' }}>👨‍💻 Developer</h3>
            <p style={{ fontSize: '16px', color: '#333' }}>
                Developed by <strong>Nagi</strong> as part of a software development task.
                <br />
                GitHub: <a href="https://github.com/Nikhith221B" target="_blank" rel="noreferrer" style={{ color: '#1d3557' }}>
                    github.com/Nikhith221B
                </a>
            </p>
        </div>
    );
};

export default About;
