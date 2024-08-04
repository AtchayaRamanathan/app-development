import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Box, TextField, Button, Typography } from '@mui/material';

const LoginContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login, add real authentication here
    navigate('/dashboard');
  };

  return (
    <LoginContainer>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          fullWidth
          required
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Login
        </Button>
      </form>
      <Typography variant="body2" style={{ marginTop: '10px' }}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </Typography>
      <Typography variant="body2" style={{ marginTop: '10px' }}>
       If trainer? <Link to="/trainer">Trainer</Link>
      </Typography>
    </LoginContainer>
  );
};

export default Login;
