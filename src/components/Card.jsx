import React from 'react';
import './styles/Card.css';

const Card = ({ 
  children, 
  variant = 'default', 
  hover = false,
  glow = false,
  className = '',
  onClick
}) => {
  const classNames = [
    'card',
    `card-${variant}`,
    hover ? 'card-hover' : '',
    glow ? 'card-glow' : '',
    className
  ].join(' ');

  return (
    <div className={classNames} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;

