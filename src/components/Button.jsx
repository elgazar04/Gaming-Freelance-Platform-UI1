import React from 'react';
import './styles/Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon = null,
  glow = false
}) => {
  const classNames = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? 'btn-full' : '',
    glow ? 'btn-glow' : '',
    disabled ? 'btn-disabled' : ''
  ].join(' ');

  return (
    <button 
      className={classNames} 
      onClick={onClick} 
      type={type}
      disabled={disabled}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;

