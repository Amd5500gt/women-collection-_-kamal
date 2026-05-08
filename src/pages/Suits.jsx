import React from 'react';
import { useCart } from '../components/CartContext';

const suitsItems = [
  { id: 201, name: "Classic Black Blazer Suit", price: 399.99, category: "Formal Suit", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500" },
  { id: 202, name: "Navy Blue Power Suit", price: 429.99, category: "Formal Suit", image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=500" },
  { id: 203, name: "Grey Professional Suit", price: 449.99, category: "Formal Suit", image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500" },
  { id: 101, name: "Floral Summer Dress", price: 89.99, category: "Dresses", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500" },
  { id: 102, name: "Red Evening Gown", price: 299.99, category: "Dresses", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500" },
  { id: 103, name: "White Lace Dress", price: 159.99, category: "Dresses", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500" },
  { id: 206, name: "Designer Women Blazer", price: 229.99, category: "Blazer", image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=500" },
  { id: 207, name: "Wedding Guest Suit", price: 499.99, category: "Wedding Suit", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500" },
  { id: 208, name: "Pink Formal Blazer", price: 279.99, category: "Formal Suit", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500" },
  { id: 209, name: "Double Breasted Suit", price: 459.99, category: "Formal Suit", image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=500" },
    { id: 111, name: "Brown Leather Boots", price: 159.99, category: "Footwear", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500" },
  { id: 113, name: "Designer Handbag", price: 199.99, category: "Accessories", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" }
];

const Suits = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '3rem',
        borderRadius: '20px',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Women's Suits Collection</h1>
        <p>Elevate your style with our elegant blazers and suits</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {suitsItems.map(item => (
          <div key={item.id} style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
            <div style={{ padding: '1.5rem' }}>
              <h3>{item.name}</h3>
              <p style={{ color: '#667eea' }}>{item.category}</p>
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

export default Suits;