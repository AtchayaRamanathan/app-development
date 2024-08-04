import React, { useState } from 'react';
import './TrainerLogin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TrainerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) newErrors.email = 'Email is required';
    else if (!emailPattern.test(email)) newErrors.email = 'Invalid email address';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.get('http://localhost:3000/users', { params: { email } });
        const user = response.data.find(user => user.email === email && user.password === password && user.role === 'trainer');
        if (user) {
          setMessage('Login successful');
          setErrors({});
          navigate('/trainerdashboard'); // Replace with the actual trainer dashboard path
        } else {
          setMessage('');
          setErrors({ form: 'Invalid credentials or not a trainer' });
        }
      } catch (error) {
        setMessage('');
        setErrors({ form: 'An error occurred' });
      }
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Trainer Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        {errors.form && <p className="error-message">{errors.form}</p>}
        {message && <p className="success-message">{message}</p>}
        <button type="submit" onClick={() => navigate('/dash')}>Login</button>
        <p className="toggle-link">
          Not a trainer? <button type="button" onClick={() => navigate('/auth')}>Go to Login/Sign Up</button>
        </p>
      </form>
    </div>
  );
};

export default TrainerLogin;
