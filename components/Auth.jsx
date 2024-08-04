import React, { useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!isLogin && !username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!emailPattern.test(email)) newErrors.email = 'Invalid email address';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    if (!isLogin && password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!isLogin && !role) newErrors.role = 'Role is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isLogin) {
        // Handle login
        try {
          const response = await axios.get('http://localhost:3000/users', { params: { email } });
          const user = response.data.find(user => user.email === email && user.password === password);
          if (user) {
            if (user.role === 'trainer') {
              navigate('/trainerlogin');
            } else {
              setMessage('Login successful');
              setErrors({});
              navigate('/dashboard');
            }
          } else {
            setMessage('');
            setErrors({ form: 'Invalid credentials' });
          }
        } catch (error) {
          setMessage('');
          setErrors({ form: 'An error occurred' });
        }
      } else {
        // Handle sign-up
        const signUpData = { username, email, password, role };
        try {
          await axios.post('http://localhost:3000/users', signUpData);
          setMessage('Sign up successful. Please login.');
          setUsername('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setRole('');
          setErrors({});
          setIsLogin(true);
        } catch (error) {
          setMessage('');
          setErrors({ form: 'Sign up failed' });
        }
      }
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
            {errors.username && <p className="error-message">{errors.username}</p>}
          </div>
        )}
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
        {!isLogin && (
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input 
                type="password" 
                id="confirm-password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="role">Role:</label>
              <select 
                id="role" 
                value={role} 
                onChange={(e) => setRole(e.target.value)} 
                required
              >
                <option value="" disabled>Select role</option>
                <option value="user">User</option>
                <option value="trainer">Trainer</option>
              </select>
              {errors.role && <p className="error-message">{errors.role}</p>}
            </div>
          </div>
        )}
        {errors.form && <p className="error-message">{errors.form}</p>}
        {message && <p className="success-message">{message}</p>}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        <p className="toggle-link">
          {isLogin ? (
            <>
              Not a member? <button type="button" onClick={() => setIsLogin(false)}>Sign Up</button><br></br>
              If Trainer? <button type="button" onClick={() => navigate('/trainerlogin')}>Trainer</button>
            </>
          ) : (
            <>
              Already a member? <button type="button" onClick={() => setIsLogin(true)}>Login</button>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Auth;
