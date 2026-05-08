import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (name && email && password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', name);
      navigate('/');
      window.location.reload();
    } else {
      setError('Please fill in all fields');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh'
    },
    card: {
      background: 'white',
      borderRadius: '20px',
      padding: '2.5rem',
      width: '100%',
      maxWidth: '400px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    input: {
      width: '100%',
      padding: '0.8rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '1rem',
      marginTop: '0.5rem'
    },
    button: {
      width: '100%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      padding: '0.8rem',
      borderRadius: '8px',
      fontSize: '1rem',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Create Account</h2>
          <p style={{ color: '#666' }}>Join Élégance today</p>
        </div>
        
        {error && <div style={{ background: '#ff4757', color: 'white', padding: '0.5rem', borderRadius: '5px', marginBottom: '1rem' }}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label>Full Name</label>
            <input type="text" style={styles.input} value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" required />
          </div>
          
          <div style={styles.formGroup}>
            <label>Email Address</label>
            <input type="email" style={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
          </div>
          
          <div style={styles.formGroup}>
            <label>Password</label>
            <input type="password" style={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" required />
          </div>
          
          <div style={styles.formGroup}>
            <label>Confirm Password</label>
            <input type="password" style={styles.input} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" required />
          </div>
          
          <button type="submit" style={styles.button}>Register</button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <p>Already have an account? <Link to="/login" style={{ color: '#667eea' }}>Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;