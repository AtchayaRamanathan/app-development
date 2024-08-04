import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'black', // Black background
        color: 'orangered', // Text color
        padding: '10px',
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ZenFist Fitness
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/workout">
          Workout
        </Button>
        <Button color="inherit" component={Link} to="/services">
          Services
        </Button>
        <Button color="inherit" component={Link} to="/auth">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
