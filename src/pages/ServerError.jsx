import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import './styles/ErrorPages.css';

const ServerError = () => {
  return (
    <div className="error-page">
      <div className="error-background">
        <div className="glitch-grid"></div>
      </div>
      
      <motion.div
        className="error-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="error-code error-code-500"
          animate={{
            textShadow: [
              '0 0 20px rgba(255, 0, 110, 0.8)',
              '0 0 40px rgba(255, 215, 0, 0.8)',
              '0 0 20px rgba(255, 0, 110, 0.8)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          500
        </motion.div>
        
        <h1 className="error-title">System Glitch! Respawn In Progress...</h1>
        <p className="error-description">
          Our servers encountered an unexpected error. Don't worry, our tech team is on it!
        </p>
        
        <motion.div
          className="error-icon"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          ⚠️
        </motion.div>

        <div className="error-actions">
          <Link to="/">
            <Button variant="primary" size="large" glow>
              Return Home
            </Button>
          </Link>
          <Button variant="outline" size="large" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ServerError;

