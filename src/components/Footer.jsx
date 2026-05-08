import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: '#2c3e50',
      color: 'white',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        <div>
          <h3>Élégance</h3>
          <p>Premium women's fashion for the modern woman</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul style={{ listStyle: 'none', marginTop: '0.5rem' }}>
            <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
            <li><a href="/women" style={{ color: 'white', textDecoration: 'none' }}>Women</a></li>
            <li><a href="/suits" style={{ color: 'white', textDecoration: 'none' }}>Suits</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: info@elegance.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div>📘 Instagram</div>
          <div>📷 Facebook</div>
          <div>🐦 Twitter</div>
        </div>
      </div>
      <div style={{ textAlign: 'center', padding: '1rem', borderTop: '1px solid #34495e' }}>
        <p>&copy; 2024 Élégance Women's Collection. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;