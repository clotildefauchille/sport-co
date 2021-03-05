// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';

// == Composant
const Login = () => (
  <section className="login">
    <h1 className="login__title">Connexion</h1>
    <input className="login__input" type="email" placeholder="Votre adresse email" />
    <input className="login__input" type="password" placeholder="Votre mot de passe" />
    <button type="button" className="login__button">Connexion</button>
    <Link to="/inscription" className="login__noAccount">Vous n'avez pas de compte ?</Link>
  </section>
);



// == Export
export default Login;
