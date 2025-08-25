import React from 'react';

const About = () => {
    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto' }}>
            <h2>🌿 About Mini Plant Store</h2>
            <p style={{ fontSize: '16px', marginTop: '20px' }}>
                This is a full-stack web application built as part of an internship assignment for <strong>Urvann</strong>. It allows users to browse, filter, and search a catalog of plants, and enables admins to add new plants to the system.
            </p>

            <h3 style={{ marginTop: '30px' }}>🛠️ Tech Stack</h3>
            <ul>
                <li>Frontend: React.js (functional components + hooks)</li>
                <li>Backend: Node.js + Express.js</li>
                <li>Database: MongoDB Atlas</li>
                <li>Auth: JWT + bcrypt</li>
                <li>Deployment: Render</li>
            </ul>

            <h3 style={{ marginTop: '30px' }}>👨‍💻 Developer</h3>
            <p>
                Developed by <strong>Nagi</strong> as part of a software development internship task. <br />
                GitHub: <a href="https://github.com/Nikhith221B" target="_blank" rel="noreferrer">github.com/Nikhith221B</a>
            </p>
        </div>
    );
};

export default About;
