import React from 'react';
import './styles/Input.css';

const Input = ({ 
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label = '',
  icon = null,
  error = '',
  required = false,
  disabled = false,
  className = ''
}) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && (
        <label className="input-label">
          {label} {required && <span className="required">*</span>}
        </label>
      )}
      <div className="input-container">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`input-field ${icon ? 'input-with-icon' : ''} ${error ? 'input-error' : ''}`}
        />
      </div>
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};

export default Input;

