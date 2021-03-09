// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const Registration = ({
  pseudo,
  email,
  password,
  confirmPassword,
  firstname,
  lastname,
  city,
  presentation,

  OnSubmitForm,
  OnChangeValue,
}) => (
  <section className="registration">
    <h1 className="registration__title">Inscription</h1>
    <form className="registration__form" onSubmit={OnSubmitForm}>
      <label htmlFor="pseudo" className="registration__label">
        <h2 className="registration__inputName">
          Pseudo<span className="registration__required">*</span>
        </h2>
        <input
          id="pseudo"
          name="pseudo"
          className="registration__input"
          type="text"
          placeholder="entrez votre pseudo"
          required
          value={pseudo}
          onChange={OnChangeValue}
        />
      </label>
      <label htmlFor="email" className="registration__label">
        <h2 className="registration__inputName">
          Adresse Email<span className="registration__required">*</span>
        </h2>
        <input
          id="email"
          name="email"
          className="registration__input"
          type="email"
          placeholder="entrez votre adresse email"
          required
          value={email}
          onChange={OnChangeValue}
        />
      </label>
      <label
        htmlFor="password"
        className="registration__label registration__password"
      >
        <h2 className="registration__inputName">
          Mot de passe<span className="registration__required">*</span>
        </h2>
        <input
          className="registration__input password"
          type="password"
          name="password"
          placeholder="entrez votre mot de passe"
          required
          value={password}
          onChange={OnChangeValue}
        />
        <input
          className="registration__input password"
          type="password"
          name="confirmPassword"
          placeholder="confirmez votre mot de passe"
          required
          value={confirmPassword}
          onChange={OnChangeValue}
        />
      </label>
      <div className="registration__container">
        <label htmlFor="firstname" className="registration__label">
          <h2 className="registration__inputName">
            Prénom<span className="registration__required">*</span>
          </h2>
          <input
            id="firstname"
            name="firstname"
            className="registration__input registration__firsname"
            type="text"
            placeholder="entrez votre prénom"
            required
            value={firstname}
            onChange={OnChangeValue}
          />
        </label>
        <label htmlFor="lastname" className="registration__label">
          <h2 className="registration__inputName">
            Nom<span className="registration__required">*</span>
          </h2>
          <input
            id="lastname"
            name="lastname"
            className="registration__input registration__lastname"
            type="text"
            placeholder="entrez votre nom"
            required
            value={lastname}
            onChange={OnChangeValue}
          />
        </label>
      </div>
      <label htmlFor="city" className="registration__label">
        <h2 className="registration__inputName">
          Ville<span className="registration__required">*</span>
        </h2>
        <input
          id="city"
          name="city"
          className="registration__input"
          type="text"
          placeholder="entrez votre ville"
          required
          value={city}
          onChange={OnChangeValue}
        />
      </label>
      <label htmlFor="presentation" className="registration__label">
        <h2 className="registration__inputName">Présentation</h2>
        <textarea
          id="presentation"
          name="presentation"
          className="registration__input registration__textarea"
          placeholder="présentez vous en quelques lignes"
          value={presentation}
          onChange={OnChangeValue}
        />
      </label>
      <div className="registration__container">
        <button type="submit" className="registration__submit">
          Inscription
        </button>
        <Link to="/connexion" className="registration__link">
          J'ai déjà un compte
        </Link>
      </div>
    </form>
  </section>
);

Registration.propTypes = {
  OnSubmitForm: PropTypes.func.isRequired,
  OnChangeValue: PropTypes.func.isRequired,

  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  presentation: PropTypes.string.isRequired,
};

// == Export
export default Registration;
