import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Box, TextField, Button, Typography, MenuItem, Select, InputLabel } from '@mui/material';

const SignupContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
`;

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      if (role) {
        // Mock signup, add real signup logic here
        const userData = { email, password, role };
        
        fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          navigate('/dashboard');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      } else {
        alert('Please select a role');
      }
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <SignupContainer>
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSignup}>
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
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          margin="normal"
          fullWidth
          required
        />
        <InputLabel id="role-label">Role</InputLabel>
        <Select
          labelId="role-label"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          fullWidth
          required
        >
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="trainer">Trainer</MenuItem>
        </Select>
        <Button variant="contained" color="primary" type="submit" fullWidth style={{ marginTop: '16px' }}>
          Sign Up
        </Button>
      </form>
      <Typography variant="body2" style={{ marginTop: '10px' }}>
        Already have an account? <Link to="/login">Login</Link>
      </Typography>
    </SignupContainer>
  );
};

export default Signup;
