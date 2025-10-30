import React from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad, FaTwitter, FaDiscord, FaTwitch, FaYoutube } from 'react-icons/fa';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <FaGamepad className="footer-logo-icon" />
              <span>GameBoost</span>
            </div>
            <p className="footer-description">
              The ultimate platform for gamers to monetize their skills and clients to level up their gameplay.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaDiscord /></a>
              <a href="#" className="social-icon"><FaTwitch /></a>
              <a href="#" className="social-icon"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Platform</h4>
            <Link to="/marketplace" className="footer-link">Marketplace</Link>
            <Link to="/jobs" className="footer-link">Job Board</Link>
            <Link to="/about" className="footer-link">How It Works</Link>
            <Link to="/pricing" className="footer-link">Pricing</Link>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">For Gamers</h4>
            <Link to="/register" className="footer-link">Become a Seller</Link>
            <Link to="/gamer/dashboard" className="footer-link">Dashboard</Link>
            <Link to="/resources" className="footer-link">Resources</Link>
            <Link to="/success-stories" className="footer-link">Success Stories</Link>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <Link to="/help" className="footer-link">Help Center</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 GameBoost. All rights reserved.</p>
          <p className="footer-tagline">Level Up Your Skills. Play. Earn. Dominate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

