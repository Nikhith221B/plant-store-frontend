import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    };

    return (
        <nav style={{
            background: '#1b4332',
            color: 'white',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div>
                <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
                    🌿 Mini Plant Store
                </Link>
                <Link to="/catalog" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>
                    Catalog
                </Link>
                {user?.isAdmin && (
                    <Link to="/admin" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>
                        Add Plant
                    </Link>
                )}
                <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
                    About
                </Link>
            </div>

            <div>
                {user ? (
                    <>
                        <span style={{ marginRight: '10px' }}>Hi, {user.username}</span>
                        <button onClick={handleLogout} style={{
                            background: '#52b788',
                            border: 'none',
                            color: 'white',
                            padding: '6px 12px',
                            cursor: 'pointer',
                            borderRadius: '4px'
                        }}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" style={{
                            color: 'white',
                            textDecoration: 'none',
                            padding: '6px 12px',
                            background: '#52b788',
                            borderRadius: '4px',
                            marginRight: '10px'
                        }}>Login</Link>

                        <Link to="/register" style={{
                            color: 'white',
                            textDecoration: 'none',
                            padding: '6px 12px',
                            background: '#40916c',
                            borderRadius: '4px'
                        }}>Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
