import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import './styles/ErrorPages.css';

const NotFound = () => {
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
          className="error-code"
          animate={{
            textShadow: [
              '0 0 20px rgba(0, 255, 157, 0.8)',
              '0 0 40px rgba(123, 97, 255, 0.8)',
              '0 0 20px rgba(0, 255, 157, 0.8)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          404
        </motion.div>
        
        <h1 className="error-title">You Ventured Into The Void</h1>
        <p className="error-description">
          The page you're looking for doesn't exist or has been moved to another dimension.
        </p>
        
        <motion.div
          className="error-icon"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          👾
        </motion.div>

        <div className="error-actions">
          <Link to="/">
            <Button variant="primary" size="large" glow>
              Return Home
            </Button>
          </Link>
          <Link to="/marketplace">
            <Button variant="outline" size="large">
              Browse Marketplace
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;

