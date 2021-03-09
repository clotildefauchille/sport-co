// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';

// == Composant
const Registration = () => (
  <section className="registration">
    <h1 className="registration__title">Inscription</h1>
    <form className="registration__form">
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
          id="password"
          name="password"
          placeholder="entrez votre mot de passe"
          required
        />
        <input
          className="registration__input password"
          type="password"
          id="password"
          name="password"
          placeholder="confirmez votre mot de passe"
          required
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
        />
      </label>
      <label htmlFor="presentation" className="registration__label">
        <h2 className="registration__inputName">Présentation</h2>
        <textarea
          id="presentation"
          name="presentation"
          className="registration__input registration__textarea"
          placeholder="présentez vous en quelques lignes"
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

// == Export
export default Registration;
