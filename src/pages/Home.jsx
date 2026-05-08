import React from 'react';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';

const featuredItems = [
  { id: 1, name: "Floral Summer Dress", price: 89.99, category: "Dresses", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500" },
  { id: 2, name: "Women's Blazer Suit", price: 149.99, category: "Suits", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500" },
  { id: 3, name: "Casual Denim Jacket", price: 89.99, category: "Jackets", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500" },
  { id: 4, name: "Designer Handbag", price: 199.99, category: "Accessories", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" },
  { id: 105, name: "Navy Blue Blazer", price: 179.99, category: "Blazers", image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=500" },
  { id: 106, name: "Grey Formal Blazer", price: 99.99, category: "Blazers", image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500" },
];

const Home = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '20px',
        padding: '4rem 2rem',
        textAlign: 'center',
        marginBottom: '3rem',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to Our Store</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Discover the finest collection of women's fashion</p>
        <button onClick={() => navigate('/women')} style={{
          background: 'white',
          color: '#667eea',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '50px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>Shop Now →</button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        <div style={{ textAlign: 'center', padding: '2rem', background: '#f8f9fa', borderRadius: '15px' }}>
          <div style={{ fontSize: '3rem' }}>✨</div>
          <h3>Premium Quality</h3>
          <p>Highest quality materials</p>
        </div>
        <div style={{ textAlign: 'center', padding: '2rem', background: '#f8f9fa', borderRadius: '15px' }}>
          <div style={{ fontSize: '3rem' }}>🚚</div>
          <h3>Free Shipping</h3>
          <p>On orders over $100</p>
        </div>
        <div style={{ textAlign: 'center', padding: '2rem', background: '#f8f9fa', borderRadius: '15px' }}>
          <div style={{ fontSize: '3rem' }}>🔄</div>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
        <div style={{ textAlign: 'center', padding: '2rem', background: '#f8f9fa', borderRadius: '15px' }}>
          <div style={{ fontSize: '3rem' }}>💳</div>
          <h3>Secure Payment</h3>
          <p>100% secure transactions</p>
        </div>
      </div>

      <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Featured Collection</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {featuredItems.map(item => (
          <div key={item.id} style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <div style={{ padding: '1.5rem' }}>
              <h3>{item.name}</h3>
              <p style={{ color: '#666' }}>{item.category}</p>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#667eea' }}>${item.price}</p>
              <button onClick={() => addToCart(item)} style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: '0.7rem 1.5rem',
                borderRadius: '25px',
                width: '100%',
                cursor: 'pointer'
              }}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;