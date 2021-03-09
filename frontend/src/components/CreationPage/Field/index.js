// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
// import './style.scss';

// == Composant
const Field = ({ value, type, name, className, placeholder, onChange }) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className={className}
        placeholder={placeholder}
        name={name}
      />

      {/* <label htmlFor={inputId} className="field-label">
        {placeholder}
      </label> */}
    </>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
