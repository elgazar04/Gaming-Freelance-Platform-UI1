import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Auth from './pages/Auth';
import GamerDashboard from './pages/GamerDashboard';
import ClientDashboard from './pages/ClientDashboard';
import Marketplace from './pages/Marketplace';
import GigDetail from './pages/GigDetail';
import JobBoard from './pages/JobBoard';
import Chat from './pages/Chat';
import ProofOfWork from './pages/ProofOfWork';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';

import './styles/global.css';

function App() {
  // Mock user state - in real app would use context/redux
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="app">
        <Navbar user={user} />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/:id" element={<GigDetail />} />
          <Route path="/jobs" element={<JobBoard />} />
          
          {/* Gamer Routes */}
          <Route path="/gamer/dashboard" element={<GamerDashboard />} />
          <Route path="/gamer/gigs" element={<GamerDashboard />} />
          <Route path="/gamer/jobs" element={<GamerDashboard />} />
          <Route path="/gamer/proof" element={<ProofOfWork />} />
          <Route path="/gamer/earnings" element={<GamerDashboard />} />
          
          {/* Client Routes */}
          <Route path="/client/dashboard" element={<ClientDashboard />} />
          <Route path="/client/jobs" element={<ClientDashboard />} />
          <Route path="/client/offers" element={<ClientDashboard />} />
          <Route path="/client/approved" element={<ClientDashboard />} />
          
          {/* Shared Routes */}
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:userId" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:username" element={<Profile />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminDashboard />} />
          <Route path="/admin/jobs" element={<AdminDashboard />} />
          <Route path="/admin/analytics" element={<AdminDashboard />} />
          
          {/* Error Routes */}
          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

