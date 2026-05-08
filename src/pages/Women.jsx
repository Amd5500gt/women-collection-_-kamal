import React from 'react';
import { useCart } from '../components/CartContext';

const womenItems = [
  { id: 101, name: "Floral Summer Dress", price: 89.99, category: "Dresses", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500" },
  { id: 102, name: "Red Evening Gown", price: 299.99, category: "Dresses", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500" },
  { id: 103, name: "White Lace Dress", price: 159.99, category: "Dresses", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500" },
  { id: 104, name: "Women's Black Blazer", price: 149.99, category: "Blazers", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500" },
  { id: 105, name: "Navy Blue Blazer", price: 179.99, category: "Blazers", image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=500" },
  { id: 106, name: "Grey Formal Blazer", price: 99.99, category: "Blazers", image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500" },
  { id: 107, name: "Blue Denim Jacket", price: 89.99, category: "Jackets", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500" },
  { id: 108, name: "Black Leather Jacket", price: 199.99, category: "Jackets", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500" },
  { id: 109, name: "White Silk Blouse", price: 79.99, category: "Tops", image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=500" },
  { id: 110, name: "Blue Skinny Jeans", price: 119.99, category: "Bottoms", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500" },
  { id: 111, name: "Brown Leather Boots", price: 159.99, category: "Footwear", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500" },
  { id: 113, name: "Designer Handbag", price: 199.99, category: "Accessories", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" }
];

const Women = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#333' }}>Women's Collection</h1>
        <p style={{ color: '#666' }}>Beautiful Dresses, Blazers & Accessories</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {womenItems.map(item => (
          <div key={item.id} style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
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

export default Women;