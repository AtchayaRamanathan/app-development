import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Auth from './components/Auth';
import NavBar from './components/NavBar';
import Services from './pages/Services';
import Workout from './pages/Workout';
import TrainerDashboard from './components/Trainer/TrainerDashboard';
import TrainerLogin from './components/Trainer/TrainerLogin';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trainerlogin" element={<TrainerLogin/>} />
        <Route path="/dash" element={<TrainerDashboard/>} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/services" element={<Services />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
