import React from 'react';
import { useCart } from '../components/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <div style={{ fontSize: '5rem' }}>🛒</div>
        <h2>Your cart is empty</h2>
        <button onClick={() => window.location.href = '/'} style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          padding: '0.8rem 2rem',
          borderRadius: '25px',
          marginTop: '1rem',
          cursor: 'pointer'
        }}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Shopping Cart</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={{
              display: 'grid',
              gridTemplateColumns: '100px 2fr 120px 100px 80px',
              gap: '1rem',
              alignItems: 'center',
              background: '#f8f9fa',
              padding: '1rem',
              borderRadius: '10px',
              marginBottom: '1rem'
            }}>
              <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
              <div>
                <h4>{item.name}</h4>
                <p style={{ color: '#666' }}>{item.category}</p>
                <p style={{ color: '#667eea' }}>${item.price}</p>
              </div>
              <div>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ width: '30px', height: '30px', cursor: 'pointer' }}>-</button>
                <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ width: '30px', height: '30px', cursor: 'pointer' }}>+</button>
              </div>
              <div>${(item.price * item.quantity).toFixed(2)}</div>
              <button onClick={() => removeFromCart(item.id)} style={{ background: '#ff4757', color: 'white', border: 'none', padding: '0.3rem 0.8rem', borderRadius: '5px', cursor: 'pointer' }}>Remove</button>
            </div>
          ))}
        </div>

        <div style={{ background: '#f8f9fa', borderRadius: '15px', padding: '1.5rem' }}>
          <h3>Order Summary</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem 0', borderBottom: '1px solid #ddd' }}>
            <span>Subtotal:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem 0', borderBottom: '1px solid #ddd' }}>
            <span>Shipping:</span>
            <span>{getTotalPrice() > 100 ? 'Free' : '$10.00'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem 0', fontSize: '1.2rem', fontWeight: 'bold', color: '#667eea' }}>
            <span>Total:</span>
            <span>${(getTotalPrice() + (getTotalPrice() > 100 ? 0 : 10)).toFixed(2)}</span>
          </div>
          <button style={{
            width: '100%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            padding: '0.8rem',
            borderRadius: '25px',
            marginTop: '1rem',
            cursor: 'pointer'
          }}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;