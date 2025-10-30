import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaGamepad, FaUserTie } from 'react-icons/fa';
import Input from '../components/Input';
import Button from '../components/Button';
import './styles/Auth.css';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialTab = searchParams.get('tab') === 'register' ? 'register' : 'login';
  const initialRole = searchParams.get('role') || 'gamer';
  
  const [activeTab, setActiveTab] = useState(initialTab);
  const [role, setRole] = useState(initialRole);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication - in real app would call API
    if (activeTab === 'login') {
      // Navigate to dashboard based on role
      navigate(role === 'gamer' ? '/gamer/dashboard' : '/client/dashboard');
    } else {
      // Navigate to dashboard after registration
      navigate(role === 'gamer' ? '/gamer/dashboard' : '/client/dashboard');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-background">
        <div className="auth-grid"></div>
      </div>
      
      <motion.div
        className="auth-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="auth-card">
          <div className="auth-logo">
            <FaGamepad className="auth-logo-icon" />
            <h2>GameBoost</h2>
          </div>

          <div className="auth-tabs">
            <button
              className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {activeTab === 'register' && (
              <>
                <Input
                  label="Username"
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleInputChange}
                  icon={<FaUser />}
                  required
                />

                <div className="role-selector">
                  <label className="role-label">I want to:</label>
                  <div className="role-buttons">
                    <button
                      type="button"
                      className={`role-btn ${role === 'gamer' ? 'active' : ''}`}
                      onClick={() => setRole('gamer')}
                    >
                      <FaGamepad />
                      <span>Sell Services</span>
                      <small>As a Gamer</small>
                    </button>
                    <button
                      type="button"
                      className={`role-btn ${role === 'client' ? 'active' : ''}`}
                      onClick={() => setRole('client')}
                    >
                      <FaUserTie />
                      <span>Hire Gamers</span>
                      <small>As a Client</small>
                    </button>
                  </div>
                </div>
              </>
            )}

            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              icon={<FaEnvelope />}
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              icon={<FaLock />}
              required
            />

            {activeTab === 'register' && (
              <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                icon={<FaLock />}
                required
              />
            )}

            {activeTab === 'login' && (
              <a href="/forgot-password" className="forgot-password">
                Forgot password?
              </a>
            )}

            <Button type="submit" variant="primary" size="large" fullWidth glow>
              {activeTab === 'login' ? 'Login' : 'Create Account'}
            </Button>

            {activeTab === 'register' && (
              <p className="auth-terms">
                By registering, you agree to our{' '}
                <a href="/terms">Terms of Service</a> and{' '}
                <a href="/privacy">Privacy Policy</a>
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;

