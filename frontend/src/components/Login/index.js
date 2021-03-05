// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const Login = ({ password, email, OnChangeValue }) => (
  <section className="login">
    <h1 className="login__title">Connexion</h1>
    <input className="login__input" type="email" placeholder="Votre adresse email" value={email} onChange={OnChangeValue} />
    <input className="login__input" type="password" placeholder="Votre mot de passe" value={password} onChange={OnChangeValue} />
    <button type="button" className="login__button">Connexion</button>
    <Link to="/inscription" className="login__noAccount">Vous n'avez pas de compte ?</Link>
  </section>
);

Login.propTypes = {
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  OnChangeValue: PropTypes.func.isRequired,
};

// == Export
export default Login;
