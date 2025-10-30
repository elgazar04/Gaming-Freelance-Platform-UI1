import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import Button from './Button';
import './styles/Navbar.css';

const Navbar = ({ user = null, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FaGamepad className="logo-icon" />
          <span className="logo-text">GameBoost</span>
        </Link>

        <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/marketplace" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>
            Marketplace
          </Link>
          <Link to="/jobs" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>
            Job Board
          </Link>
          <Link to="/about" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>
            How It Works
          </Link>
          
          {user ? (
            <>
              <Link 
                to={user.role === 'gamer' ? '/gamer/dashboard' : '/client/dashboard'} 
                className="navbar-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link to="/profile" className="navbar-profile">
                <FaUser />
              </Link>
            </>
          ) : (
            <div className="navbar-auth">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" size="small">Login</Button>
              </Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" size="small" glow>Get Started</Button>
              </Link>
            </div>
          )}
        </div>

        <button 
          className="navbar-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

