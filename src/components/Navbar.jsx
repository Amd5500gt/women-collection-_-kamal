import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const Navbar = () => {
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
    window.location.reload();
  };

  return (
    <nav style={{
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Women's Collection</span>
          <span style={{ fontSize: '0.8rem', color: '#666', display: 'block' }}>Fashion</span>
        </Link>
        
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <li><Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Home</Link></li>
          <li><Link to="/women" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Women</Link></li>
          <li><Link to="/suits" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Suits</Link></li>
          <li><Link to="/cart" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Cart ({getCartCount()})</Link></li>
          {isLoggedIn ? (
            <>
              <li><span style={{ color: '#667eea' }}>👋 {localStorage.getItem('userEmail')?.split('@')[0]}</span></li>
              <li><button onClick={handleLogout} style={{
                background: 'none',
                border: '1px solid #ddd',
                padding: '0.4rem 1rem',
                borderRadius: '20px',
                cursor: 'pointer'
              }}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" style={{ textDecoration: 'none', color: '#333' }}>Login</Link></li>
              <li><Link to="/register" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '0.5rem 1.2rem',
                borderRadius: '25px',
                textDecoration: 'none'
              }}>Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;