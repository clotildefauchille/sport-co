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
      <label htmlFor={inputId} className="create-form__label">
        {name}
      </label>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className={className}
        name={name}
      />
    </>
  );
};

Field.propTypes = {
  value: PropTypes.node,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
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
