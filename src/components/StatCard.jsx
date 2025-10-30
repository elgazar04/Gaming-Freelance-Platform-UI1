import React from 'react';
import { motion } from 'framer-motion';
import './styles/StatCard.css';

const StatCard = ({ icon, label, value, change, color = 'green' }) => {
  return (
    <motion.div
      className={`stat-card stat-${color}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="stat-icon">
        {icon}
      </div>
      <div className="stat-content">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
        {change && (
          <div className={`stat-change ${change.startsWith('+') ? 'positive' : 'negative'}`}>
            {change}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default StatCard;

